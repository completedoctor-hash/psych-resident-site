/* ---------------------------------------------------------------------
   Opens an account that was registered but never confirmed.
   Nobody should be stuck waiting for a confirmation email.

   It only acts when the email AND the correct password are given:
   Netlify Identity checks the password before it complains that the
   email is not confirmed, so "Email not confirmed" proves the password
   is right. Only then is the account marked as confirmed.
   --------------------------------------------------------------------- */
exports.handler = async function (event, context) {
  const json = (code, obj) => ({ statusCode: code, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(obj) });
  if (event.httpMethod !== "POST") return json(405, { error: "method" });
  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) {}
  const email = String(body.email || "").trim().toLowerCase(), pw = String(body.password || "");
  if (!email || !pw) return json(400, { error: "missing" });
  const id = context && context.clientContext && context.clientContext.identity;
  if (!id || !id.url || !id.token) return json(503, { error: "identity-off" });
  try {
    const t = await fetch(id.url + "/token", {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "grant_type=password&username=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(pw)
    });
    if (t.ok) return json(200, { ok: true, already: true });
    const tj = await t.json().catch(() => ({}));
    const msg = String(tj.error_description || tj.msg || tj.error || "");
    if (!/not confirmed/i.test(msg)) return json(401, { error: "credentials" });
    let user = null;
    for (let page = 1; page <= 20 && !user; page++) {
      const r = await fetch(id.url + "/admin/users?per_page=100&page=" + page + "&filter=" + encodeURIComponent(email), { headers: { Authorization: "Bearer " + id.token } });
      if (!r.ok) break;
      const j = await r.json().catch(() => ({}));
      const list = j.users || [];
      user = list.find(u => String(u.email || "").toLowerCase() === email) || null;
      if (list.length < 100) break;
    }
    if (!user) return json(404, { error: "not-found" });
    const roles = (user.app_metadata && user.app_metadata.roles) || [];
    const put = await fetch(id.url + "/admin/users/" + user.id, {
      method: "PUT", headers: { Authorization: "Bearer " + id.token, "Content-Type": "application/json" },
      body: JSON.stringify({ confirm: true, app_metadata: Object.assign({}, user.app_metadata || {}, { roles: roles.indexOf("free") >= 0 ? roles : roles.concat(["free"]) }) })
    });
    if (!put.ok) return json(502, { error: "confirm-failed" });
    return json(200, { ok: true, confirmed: true });
  } catch (e) {
    return json(502, { error: "identity", message: String(e.message || e) });
  }
};
