/* Practice run partner for Psychiatry for Residents.
   The AI plays the patient, relative or colleague from the challenge's role brief,
   and at the end marks the resident's transcript against the checklist.

   Netlify environment variables:
     ANTHROPIC_API_KEY   required. Without it the page falls back to self-marking only.
     SIM_MODEL           optional, default "claude-haiku-5-5" (fast and low cost).
     SIM_ROLES           optional, comma list of roles allowed to use the AI partner,
                         e.g. "member,paper-a,paper-b,live-b,admin". Empty = any signed-in user.
     SIM_OFF             optional, set to "1" to switch the AI partner off instantly.
   Set a monthly spend limit in the Anthropic console as well. */

var KEY = process.env.ANTHROPIC_API_KEY || "";
var MODEL = process.env.SIM_MODEL || "claude-haiku-5-5";
var ROLES = (process.env.SIM_ROLES || "").split(",").map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);

function json(code, obj) {
  return { statusCode: code, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(obj) };
}
function whoami(event) {
  var h = event.headers || {};
  var auth = h.authorization || h.Authorization || "";
  if (!/^Bearer\s+\S/i.test(auth)) return Promise.resolve(null);
  var host = h["x-forwarded-host"] || h.host;
  return fetch("https://" + host + "/.netlify/identity/user", { headers: { Authorization: auth } })
    .then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
}
function clip(s, n) { s = String(s == null ? "" : s); return s.length > n ? s.slice(0, n) : s; }

function rolePrompt(sim, ch) {
  var r = sim.role || {};
  return [
    "You are playing one person in a realistic UK psychiatry conversation, to help a junior doctor practise. Stay fully in character as this person. Never mention that you are an AI, a role-play, a test or marking.",
    "WHO YOU ARE: " + clip(r.who, 200),
    "SETTING: " + clip(ch.where || "", 200) + ". " + clip(sim.setup, 400),
    "HOW YOU COME ACROSS: " + clip(r.manner, 400),
    "THINGS YOU SAY FREELY when relevant: " + (r.free || []).map(function (x) { return "- " + clip(x, 240); }).join(" "),
    "THINGS YOU ONLY REVEAL IF THE DOCTOR ASKS DIRECTLY AND SPECIFICALLY (do not volunteer these): " + (r.ifasked || []).map(function (x) { return "- " + clip(x, 240); }).join(" "),
    "WORRIES YOU WILL RAISE at natural points, one at a time: " + (r.worries || []).map(function (x) { return "- " + clip(x, 240); }).join(" "),
    "BEHAVIOUR RULES: " + (r.rules || []).map(function (x) { return "- " + clip(x, 240); }).join(" "),
    "STYLE: Reply in 1 to 3 short spoken sentences, as this person would speak, in British English. Answer only what is asked. Show emotion where it fits. If the doctor uses jargon, look confused and ask what it means. If the doctor is rushed or dismissive, become less forthcoming; if they validate you, open up. Do not coach the doctor and do not list information. If the doctor ends the conversation, say goodbye in character."
  ].join("\n");
}

function markPrompt(sim, transcript, mins) {
  var crit = (sim.marks || []).map(function (m, i) { return (i + 1) + ". [" + clip(m.d, 30) + "] " + clip(m.c, 240); }).join("\n");
  return "You are a strict senior UK psychiatrist reviewing a junior doctor's conversation for training. Judge only what the doctor actually said in the transcript. Be fair, specific and brief.\n\n" +
    "TASK THE DOCTOR HAD: " + clip(sim.setup, 500) + "\nTIME USED: " + mins + " minutes (target 7, limit 9).\n\nCRITERIA:\n" + crit +
    "\n\nGLOBAL STANDARD: pass = " + clip((sim.global || {}).pass, 300) + "; borderline = " + clip((sim.global || {}).borderline, 300) + "; fail = " + clip((sim.global || {}).fail, 300) +
    "\n\nTRANSCRIPT:\n" + transcript +
    "\n\nReturn ONLY valid JSON, no prose: {\"criteria\":[{\"n\":1,\"met\":\"yes|partly|no\",\"why\":\"≤18 words, quoting the doctor where possible\"}],\"global\":\"Pass|Borderline|Fail\",\"strengths\":[\"≤3 short points\"],\"improve\":[\"≤3 short, specific things to say or do next time\"]}";
}

function claude(system, messages, maxTokens) {
  return fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, system: system, messages: messages })
  }).then(function (r) {
    return r.json().then(function (j) {
      if (!r.ok) throw new Error((j && j.error && j.error.message) || ("api " + r.status));
      return ((j.content || [])[0] || {}).text || "";
    });
  });
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") return json(405, { error: "POST only" });
  if (process.env.SIM_OFF === "1") return json(503, { error: "off" });
  if (!KEY) return json(503, { error: "no-key" });
  var user = await whoami(event);
  if (!user) return json(401, { error: "signin" });
  if (ROLES.length) {
    var have = ((user.app_metadata && user.app_metadata.roles) || []).map(function (s) { return String(s).toLowerCase(); });
    if (!have.some(function (r) { return ROLES.indexOf(r) >= 0 || r === "admin"; })) return json(403, { error: "role" });
  }
  var body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "bad json" }); }
  var sim = body.sim || {}, ch = body.ch || {};
  try {
    if (body.mode === "mark") {
      var turns = (body.turns || []).slice(0, 80).map(function (t) { return (t.w === "D" ? "DOCTOR: " : "THEM: ") + clip(t.s, 600); }).join("\n");
      var out = await claude(markPrompt(sim, turns, clip(body.mins, 6)), [{ role: "user", content: "Mark it now." }], 1200);
      var m = out.match(/\{[\s\S]*\}/);
      return json(200, { mark: m ? JSON.parse(m[0]) : null });
    }
    var hist = (body.turns || []).slice(-40).map(function (t) { return { role: t.w === "D" ? "user" : "assistant", content: clip(t.s, 600) || "…" }; });
    if (!hist.length || hist[0].role !== "user") hist.unshift({ role: "user", content: "(The doctor arrives.)" });
    var merged = [];
    hist.forEach(function (m) { if (merged.length && merged[merged.length - 1].role === m.role) merged[merged.length - 1].content += "\n" + m.content; else merged.push(m); });
    if (merged[merged.length - 1].role !== "user") merged.push({ role: "user", content: "(The doctor waits for you to go on.)" });
    var reply = await claude(rolePrompt(sim, ch), merged, 220);
    return json(200, { reply: reply.trim() });
  } catch (e) {
    return json(502, { error: String(e.message || e).slice(0, 200) });
  }
};
