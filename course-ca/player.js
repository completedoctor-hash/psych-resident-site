/* Paper B Live workbook player: guided narration, highlighting, saved progress, self-marking. */
(function () {
  var PAGE = location.pathname.split("/").pop() || "wb";
  var KEY = "tpr-live-" + PAGE;
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var ST = load(); ST.ans = ST.ans || {}; ST.cards = ST.cards || {}; ST.tracks = ST.tracks || {};
  function $(id) { return document.getElementById(id); }

  /* ---------- Mark workbook done ---------- */
  var mk = $("mk");
  if (mk) { if (ST.done) mk.textContent = "Completed ✓"; mk.onclick = function () { ST.done = 1; save(ST); mk.textContent = "Completed ✓"; }; }

  /* ---------- Challenges: click an option to check ---------- */
  var CH = [].slice.call(document.querySelectorAll(".ch"));
  function score() {
    var n = 0, r = 0; for (var k in ST.ans) { n++; if (ST.ans[k].ok) r++; }
    var kn = 0; for (var c in ST.cards) if (ST.cards[c] === 1) kn++;
    var el = $("sc2"); if (el) el.innerHTML = "<b>Your progress</b><br>Challenges: " + r + " correct of " + n + " tried (" + CH.length + " in total)<br>Flashcards known: " + kn;
  }
  CH.forEach(function (ch) {
    var a = ch.getAttribute("data-a"), lis = [].slice.call(ch.querySelectorAll(".op2 li"));
    function mark(i, silent) {
      lis.forEach(function (li) { li.classList.remove("r", "w"); });
      var ok = String(i) === a; lis[i] && lis[i].classList.add(ok ? "r" : "w");
      if (a !== "" && lis[+a]) lis[+a].classList.add("r");
      ch.classList.add("op");
      if (!silent) { ST.ans[ch.id] = { i: i, ok: ok }; save(ST); score(); }
    }
    lis.forEach(function (li) { li.onclick = function () { mark(+li.getAttribute("data-i")); }; });
    if (ST.ans[ch.id]) mark(ST.ans[ch.id].i, true);
  });

  /* ---------- Flashcards: Got it / Again ---------- */
  [].slice.call(document.querySelectorAll(".card")).forEach(function (c, i) {
    var id = "c" + i; if (ST.cards[id] != null) c.classList.add("k" + ST.cards[id]);
    [].slice.call(c.querySelectorAll(".kn span")).forEach(function (b) {
      b.onclick = function (e) { e.stopPropagation(); var k = +b.getAttribute("data-k"); c.classList.remove("k0", "k1"); c.classList.add("k" + k); ST.cards[id] = k; save(ST); score(); };
    });
  });
  score();

  /* ---------- Narration ---------- */
  var ap = $("ap"); if (!ap) return;
  var B = [].slice.call(document.querySelectorAll(".aud button[data-t]"));
  var ss = window.speechSynthesis, V = null, cur = -1, sent = [], si = 0, paused = false, mode = "";
  /* Choose the most natural voice this browser offers, and let the listener choose. */
  function vscore(v) {
    var n = v.name, s = 0;
    if (!/^en/i.test(v.lang)) return -1;
    if (/Natural|Neural|Premium|Enhanced|Online|network/i.test(n + " " + (v.voiceURI || ""))) s += 100;
    if (/Sonia/i.test(n)) s += 60; else if (/Libby|Maisie|Abbi|Bella|Hollie|Olivia|Serena/i.test(n)) s += 45; else if (/Ryan|Thomas|Alfie|Elliot|Ethan|Noah|Oliver|Daniel/i.test(n)) s += 35;
    if (/en-GB/i.test(v.lang)) s += 30; else if (/en-(IE|AU|NZ)/i.test(v.lang)) s += 12; else if (/en-US/i.test(v.lang)) s += 6;
    if (/Google UK English Female/i.test(n)) s += 25; else if (/Google/i.test(n)) s += 10;
    if (/Kate|Martha|Stephanie|Fiona|Moira|Karen/i.test(n)) s += 8;
    if (/eSpeak|compact|Fred|Albert|Bad News|Bells|Boing|Bubbles|Cellos|Deranged|Hysterical|Pipe|Trinoids|Whisper|Zarvox|Jester|Organ|Superstar|Wobble/i.test(n)) s -= 200;
    if (v.localService === false) s += 5;
    return s;
  }
  function natural(v) { return /Natural|Neural|Premium|Enhanced|Online|network/i.test(v.name + " " + (v.voiceURI || "")); }
  function ranked() { return (ss ? ss.getVoices() : []).filter(function (v) { return vscore(v) >= 0; }).sort(function (a, b) { return vscore(b) - vscore(a); }); }
  function pick() {
    var L = ranked(), want = ""; try { want = localStorage.getItem("tpr-voice") || ""; } catch (e) {}
    var w = L.filter(function (v) { return v.name === want; })[0]; return w || L[0] || null;
  }
  function voiceMenu() {
    var L = ranked(), sel = $("vc");
    if (!sel) { var ctl = $("sp") && $("sp").parentNode; if (!ctl) return; sel = document.createElement("select"); sel.id = "vc"; sel.title = "Voice"; sel.style.maxWidth = "100%"; ctl.appendChild(sel);
      sel.onchange = function () { try { localStorage.setItem("tpr-voice", sel.value); } catch (e) {} V = pick(); hint(); if (cur >= 0 && !paused && mode === "tts") { var k = cur, s0 = si; stopAll(); cur = k; speakFrom(k, s0); } }; }
    if (!L.length) { sel.hidden = true; return; }
    sel.innerHTML = L.slice(0, 40).map(function (v) { return '<option value="' + v.name.replace(/"/g, "&quot;") + '"' + (V && v.name === V.name ? " selected" : "") + ">" + (natural(v) ? "\u2605 " : "") + v.name.replace(/^Microsoft |^Google /, "").replace(/ Online \(Natural\)/, " (natural)").replace(/ - English \((United Kingdom|United States)\)/, "") + "</option>"; }).join("");
    hint();
  }
  function hint() {
    var h = $("vh"); if (!h) { var a = $("an"); if (!a) return; h = document.createElement("p"); h.id = "vh"; h.style.cssText = "font:12px/1.45 Helvetica Neue,Arial,sans-serif;color:#5B6474;margin:6px 0 0"; a.parentNode.insertBefore(h, a); }
    if (V && natural(V)) { h.textContent = ""; return; }
    var ua = navigator.userAgent;
    h.innerHTML = /iPhone|iPad|Macintosh/.test(ua) ? "For a natural British voice: Settings &rarr; Accessibility &rarr; Spoken Content &rarr; Voices &rarr; English (UK) &rarr; download an <b>Enhanced</b> or <b>Premium</b> voice (e.g. Serena), then reopen this page. Or open the page in <b>Microsoft Edge</b> for Sonia."
      : /Android/.test(ua) ? "For a natural voice: open this page in <b>Microsoft Edge</b> (Sonia), or in Settings &rarr; Text-to-speech choose Google, English (UK), and install the high-quality voice."
      : "For the most natural voice (Sonia, British English), open this page in <b>Microsoft Edge</b>. It is free on Windows and Mac.";
  }
  if (ss) { V = pick(); setTimeout(voiceMenu, 50); ss.onvoiceschanged = function () { V = pick(); voiceMenu(); }; }
  function note(t) { $("an").textContent = t || ""; }
  var lit = null;
  function light(el) {
    if (lit === el) return; if (lit) lit.classList.remove("live"); lit = el;
    if (el) { el.classList.add("live"); el.scrollIntoView({ behavior: "smooth", block: "center" }); }
  }
  function prog(i, f) { var b = B[i] && B[i].querySelector("u b"); if (b) b.style.width = Math.round(f * 100) + "%"; }
  function rate() { return +($("sp").value || 0.95); }
  function savePos() { ST.pos = { t: cur, s: si }; save(ST); }
  function stopAll() { try { ap.pause(); } catch (e) {} if (ss) ss.cancel(); }
  function speakFrom(i, start) {
    if (!ss) { note("Your browser cannot read aloud. Try Microsoft Edge or Google Chrome."); return; }
    mode = "tts"; sent = (B[i].dataset.t || "").match(/[^.!?]+[.!?]*/g) || []; si = start || 0;
    note(V ? "Voice: " + V.name.replace(/^Microsoft /, "") : "");
    next();
    function next() {
      if (cur !== i || paused) return;
      if (si >= sent.length) { finish(i); return; }
      var txt = sent[si].trim(); prog(i, si / sent.length); savePos();
      var m = txt.match(/^Challenge (\d+)\./); if (m) { var c = $("ch" + m[1]); if (c) light(c); }
      if (/^Here's the working/.test(txt) && lit && lit.classList.contains("ch")) lit.classList.add("op");
      var u = new SpeechSynthesisUtterance(txt);
      if (V) { u.voice = V; u.lang = V.lang; } else u.lang = "en-GB";
      u.rate = rate(); u.pitch = 1.0;
      u.onend = function () { if (cur === i && !paused) { si++; next(); } };
      ss.speak(u);
    }
    speakFrom.next = next;
  }
  function finish(i) {
    prog(i, 1); B[i].classList.add("dn"); ST.tracks[i] = 1; save(ST);
    if (i < B.length - 1 && ($("md").value || "c") === "c") play(i + 1); else if (i < B.length - 1) { cur = -1; B.forEach(function (b) { b.classList.remove("on"); }); setIcons(); note("Part finished. Choose the next part when you are ready."); } else { cur = -1; light(null); B.forEach(function (b) { b.classList.remove("on"); }); ST.pos = null; save(ST); note("Session finished. Well done."); }
  }
  function play(i, start) {
    stopAll(); paused = false; cur = i; $("pz").innerHTML = "&#10074;&#10074; Pause";
    B.forEach(function (b) { b.classList.remove("on"); }); var b = B[i]; if (!b) return; b.classList.add("on");
    var g = $(b.dataset.g); light(g);
    if (start || !window.LIVE_MP3) { speakFrom(i, start || 0); setIcons(); return; }
    mode = "mp3"; ap.src = b.dataset.src; ap.playbackRate = rate() / 0.95; var tok = ++TOK;
    ap.play().then(function () { note(""); }).catch(function () { if (tok === TOK && cur === i) speakFrom(i, 0); });
    setIcons();
  }
  var TOK = 0;
  function setIcons() { B.forEach(function (b, j) { var p = b.querySelector(".pi"); if (p) p.innerHTML = (j === cur && !paused) ? "&#10074;&#10074;" : "&#9654;"; }); }
  ap.ontimeupdate = function () { if (ap.duration) { prog(cur, ap.currentTime / ap.duration); ST.pos = { t: cur, s: 0, a: ap.currentTime }; save(ST); } };
  ap.onended = function () { if (cur >= 0) finish(cur); };
  B.forEach(function (b, i) { b.onclick = function () { if (i === cur) { $("pz").onclick(); return; } play(i); }; if (ST.tracks[i]) { b.classList.add("dn"); prog(i, 1); } });
  $("pp").onclick = function () {
    if (paused) { resume(); return; }
    if (cur < 0) { var p = ST.pos; if (p && p.t >= 0 && B[p.t]) play(p.t, p.s || 0); else play(0); }
  };
  function resume() {
    paused = false; $("pz").innerHTML = "&#10074;&#10074; Pause"; setTimeout(setIcons, 0);
    if (mode === "mp3") ap.play(); else if (speakFrom.next) speakFrom.next();
  }
  $("pz").onclick = function () {
    if (cur < 0) return;
    if (paused) { resume(); return; }
    paused = true; $("pz").innerHTML = "&#9654; Resume"; savePos(); setIcons();
    if (mode === "mp3") ap.pause(); else if (ss) ss.cancel();
  };
  try { var md0 = localStorage.getItem("tpr-live-mode"); if (md0) $("md").value = md0; } catch (e) {}
  $("md").onchange = function () { try { localStorage.setItem("tpr-live-mode", $("md").value); } catch (e) {} };
  $("sp").onchange = function () { if (mode === "mp3") ap.playbackRate = rate() / 0.95; };
  /* Resume banner */
  var P = ST.pos, rs = $("res");
  if (P && P.t >= 0 && B[P.t] && rs) {
    var pct = Math.round(100 * (P.s || 0) / Math.max(1, ((B[P.t].dataset.t || "").match(/[^.!?]+[.!?]*/g) || []).length));
    rs.hidden = false; rs.innerHTML = "&#9654; <b>Continue where you left off</b><br>Part " + (P.t + 1) + ", " + pct + "% through";
    rs.onclick = function () { rs.hidden = true; play(P.t, P.s || 0); };
  }
  window.addEventListener("beforeunload", function () { if (cur >= 0) savePos(); });
})();
