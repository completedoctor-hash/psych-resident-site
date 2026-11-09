/* Psychiatry for Residents: Specific Skills. Original content. */
(function () {
  var D = window.TPR_SKILL || {}; D.stations = window.TPR_ST || D.stations || []; var X = window.TPR_X || {}, CH = window.TPR_CH || [], MAP = window.RES_MAP || [];
  var BY = {}; CH.forEach(function (c) { BY[c.id] = c; });
  function $(x) { return document.getElementById(x); }
  function e(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var I = {
    door: '<path d="M4 21h16M6 21V4h9v17"/><circle cx="12.5" cy="12.5" r=".8"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
    check: '<path d="M4 12l5 5L20 6"/>',
    chev: '<path d="M6 9l6 6 6-6"/>'
  };
  function ic(n) { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (I[n] || "") + '</svg>'; }
  var SK = [
    ["opening", "Understanding Opening & Structure", "door", "Every task in full, the short opening, then the broad headings you must cover, in order."],
    ["validation", "Mastering Validation", "heart", "Exactly what to say when emotion arrives, and every validation moment from the challenges in one place."],
    ["bps", "BPS", "gear", "For every task: what has happened so far, the moment they ask how it is treated, then the full plan with doses, sessions and named roles."],
    ["distortions", "Cognitive distortion", "brain", "Hear the distortion in natural speech, then respond: validate first, then one Socratic question."],
    ["icd-history", "ICD clusters (history)", "search", "From what the patient says first to the 3 to 5 questions that rule a condition in, and the differentials to rule out."],
    ["icd-mse", "ICD clusters (MSE)", "eye", "From a striking statement to pinning down the phenomenon, then the clusters that rule it in or out."]
  ];
  function bubble(who, txt, cls) { return '<div class="sb2 ' + cls + '"><div class="sw">' + e(who) + '</div><div class="st2">' + e(txt) + '</div></div>'; }
  function acc(title, sub, body, open) { return '<div class="acc' + (open ? ' op' : '') + '"><button class="ah">' + '<span><b>' + e(title) + '</b>' + (sub ? '<small>' + e(sub) + '</small>' : '') + '</span>' + ic("chev") + '</button><div class="ab2">' + body + '</div></div>'; }
  function search(ph) { return '<div class="srch">' + ic("search") + '<input id="q" placeholder="' + e(ph) + '"></div>'; }

  var AREAS = ["Depression and suicide risk", "Mania and bipolar", "Psychosis and schizophrenia", "Anxiety, OCD, trauma and dissociation", "Personality and therapies", "Eating disorders", "Women's and gender health", "Old age", "Liaison", "Addictions", "Child and adolescent", "Neurodevelopmental", "Perinatal", "Forensic", "Medication, emergencies and side effects", "Physical examination"];
  function chips(list) {
    var n = {}; list.forEach(function (x) { n[x.area] = (n[x.area] || 0) + 1; });
    return '<div class="chips2"><button class="chip2 on" data-t="*">All <i>' + list.length + '</i></button>' + AREAS.filter(function (a) { return n[a]; }).map(function (a) { return '<button class="chip2" data-t="' + e(a) + '">' + e(a) + ' <i>' + n[a] + '</i></button>'; }).join("") + '</div>';
  }
  function taskBox(o) { return '<div class="tbox"><div class="tbl">The task</div><p>' + e(o.task) + '</p></div>'; }
  function go(o) { return o.cid && BY[o.cid] ? '<p class="go2"><a href="ward-challenges.html#' + e(o.cid) + '">Do the full challenge →</a></p>' : ''; }
  function pOpening() {
    var L = D.stations || [];
    var body = AREAS.map(function (a) {
      var g = L.filter(function (o) { return o.area === a; }); if (!g.length) return "";
      return '<h3 class="h3 fl" data-t="' + e(a) + '">' + e(a) + ' <i>' + g.length + '</i></h3>' + g.map(function (o) {
        var op = '<div class="sub2">Opening</div><div class="opn">' + (o.opening || []).map(function (l) { return '<div class="odl">' + e(l.d) + '</div>' + (l.p ? '<div class="opl">↳ ' + e(l.p) + '</div>' : ''); }).join("") + '</div>';
        var cv = '<div class="sub2">What you have to cover</div><ol class="cov">' + (o.cover || []).map(function (c) { return '<li><b>' + e(c.h) + '</b> <span>(' + e(c.b) + ')</span></li>'; }).join("") + '</ol>';
        return '<div class="fl" data-t="' + e(a) + '" data-f="' + e((o.title + " " + o.task + " " + a).toLowerCase()) + '">' + acc(o.title, o.who + " · " + a, taskBox(o) + op + cv + go(o)) + '</div>';
      }).join("");
    }).join("");
    var quick = (D.opening || []).length ? '<h3 class="h3">Quick openers by task type</h3>' + acc("All task types", (D.opening || []).length + " openers", '<div class="grid2">' + D.opening.map(function (o) {
      return '<div class="card2"><div class="ck2">' + e(o.type) + '</div><ol class="lines">' + (o.lines || []).map(function (l) { return '<li>' + e(l) + '</li>'; }).join("") + '</ol>' + (o.tip ? '<div class="tip">' + ic("alert") + '<span>' + e(o.tip) + '</span></div>' : '') + '</div>';
    }).join("") + '</div>') : '';
    return '<p class="lead2">Every task, in full. Read the task, then the short opening, then the broad headings you must cover, in order.</p>' + chips(L) + search("Search a task, condition or name…") + body + quick;
  }
  function pValidation() {
    var kit = (D.validation || []).map(function (v) { return '<div class="card2"><div class="ck2">' + e(v.move) + '</div><p class="when">' + e(v.when) + '</p>' + (v.say || []).map(function (s) { return '<div class="say2">' + ic("check") + '<span>“' + e(s) + '”</span></div>'; }).join("") + (v.not ? '<div class="not2">Avoid: “' + e(v.not) + '”</div>' : '') + '</div>'; }).join("");
    var all = [], tags = {};
    Object.keys(X).forEach(function (id) { (X[id].snip || []).forEach(function (s) { var t = s.tag || "Other"; tags[t] = (tags[t] || 0) + 1; all.push({ id: id, t: t, p: s.p, r: s.r }); }); });
    var tl = Object.keys(tags).sort(function (a, b) { return tags[b] - tags[a]; });
    return '<h3 class="h3">The validation toolkit</h3><div class="grid2">' + kit + '</div>' +
      '<h3 class="h3">From the challenges: ' + all.length + ' real moments</h3><p class="lead2">Choose an emotion. Read what they say, decide your reply, then tap to see the reply that validates first.</p>' +
      '<div class="chips2"><button class="chip2 on" data-t="*">All</button>' + tl.map(function (t) { return '<button class="chip2" data-t="' + e(t) + '">' + e(t) + ' <i>' + tags[t] + '</i></button>'; }).join("") + '</div>' +
      search("Search what patients say…") +
      '<div id="vlist">' + all.map(function (s) { var c = BY[s.id] || {}; return '<div class="vm fl" data-t="' + e(s.t) + '" data-f="' + e((s.p + " " + s.r).toLowerCase()) + '"><div class="vt">' + e(s.t) + ' · <a href="ward-challenges.html#' + e(s.id) + '">' + e(String(c.title || "").split(/[:—–]/)[0]) + '</a></div>' + bubble("They say", "“" + String(s.p || "").replace(/^['‘“"]+|['’”"]+$/g, "") + "”", "p") + '<button class="rv">How would you respond? →</button><div class="rr">' + bubble("You say", s.r, "d") + '</div></div>'; }).join("") + '</div>';
  }
  function pBps() {
    var L = (D.stations || []).filter(function (o) { return o.bps; });
    var body = AREAS.map(function (a) {
      var g = L.filter(function (o) { return o.area === a; }); if (!g.length) return "";
      return '<h3 class="h3 fl" data-t="' + e(a) + '">' + e(a) + ' <i>' + g.length + '</i></h3>' + g.map(function (o) {
        var b = o.bps, cols = [["bio", "Biological", "#14243A"], ["psych", "Psychological", "#B8932C"], ["social", "Social", "#2E7D5B"], ["safety", "Safety", "#A33A3A"]].filter(function (k) { return (b[k[0]] || []).length; });
        var inner = '<div class="pre2"><div class="tbl">So far</div><p>' + e(b.pre) + '</p></div>' + bubble(o.who || "They say", "“" + b.ask + "”", "p") + (b.lead ? bubble("You say", b.lead, "d") : '') +
          '<div class="bcols">' + cols.map(function (k) { return '<div class="bcol"><div class="bch" style="background:' + k[2] + '">' + k[1] + '</div>' + b[k[0]].map(function (x) { return '<div class="bit">' + e(x) + '</div>'; }).join("") + '</div>'; }).join("") + '</div>' + go(o);
        return '<div class="fl" data-t="' + e(a) + '" data-f="' + e((o.title + " " + a + " " + JSON.stringify(b)).toLowerCase()) + '">' + acc(o.title, "“" + b.ask + "”", inner) + '</div>';
      }).join("");
    }).join("");
    return '<p class="lead2">What has happened so far, the moment they ask how it is treated, then the plan: medicines with doses, therapy with sessions, and named people and services.</p>' + chips(L) + search("Search a condition, drug or role (e.g. lithium, care coordinator)…") + body;
  }
  function pDist() {
    return '<div class="grid2">' + (D.distortions || []).map(function (d) {
      return '<div class="card2"><div class="ck2">What do you hear?</div>' + (d.says || []).map(function (s) { return bubble("They say", "“" + s + "”", "p"); }).join("") +
        '<button class="rv">Name the distortion →</button><div class="rr"><div class="dn">' + e(d.name) + '</div><p class="when">' + e(d.spot) + '</p>' + (d.respond || []).map(function (s, i) { return bubble(i ? "Then ask" : "Validate", s, "d"); }).join("") + (d.avoid ? '<div class="not2">Avoid: ' + e(d.avoid) + '</div>' : '') + '</div></div>';
    }).join("") + '</div>';
  }
  function groups(list, render) {
    var g = {}, order = [];
    list.forEach(function (x) { var k = x.group || "Other"; if (!g[k]) { g[k] = []; order.push(k); } g[k].push(x); });
    return order.map(function (k) { return '<h3 class="h3">' + e(k) + ' <i>' + g[k].length + '</i></h3>' + g[k].map(render).join(""); }).join("");
  }
  function pHx() {
    return search("Find a condition…") + groups(D.icd_hx || [], function (c) {
      var body = (c.who ? '<div class="who2">' + e(c.who) + '</div>' : '') + bubble("They say", "“" + c.open + "”", "p") + bubble("You say", c.clarify, "d") + bubble("They say", "“" + c.they + "”", "p") +
        '<div class="think">' + ic("brain") + '<span>' + e(c.think) + '</span></div>' +
        '<div class="sub2">The cluster: ask, then tick</div>' + (c.cluster || []).map(function (q, i) { return '<button class="ci2"><span class="bx2">' + ic("check") + '</span><span><b>' + (i + 1) + '.</b> “' + e(q.ask) + '”<small>' + e(q.checks) + '</small>' + (q.yes ? '<em class="yes2">Yes sounds like: “' + e(q.yes) + '”</em>' : '') + (q.then ? '<em class="then2">Then ask: “' + e(q.then) + '”</em>' : '') + '</span></button>'; }).join("") +
        '<div class="tally2">Ticked: <b class="tn">0</b> of ' + (c.cluster || []).length + '</div>' +
        '<div class="rule2"><b>ICD-11 threshold</b> ' + e(c.rule) + (c.code ? '<br><b>Code</b> ' + e(c.code) : '') + '</div>' +
        ((c.severity || []).length ? '<div class="sub2">Grade it</div><ul class="sev2">' + c.severity.map(function (x) { return '<li>' + e(x) + '</li>'; }).join("") + '</ul>' : '') +
        '<div class="sub2">Rule out</div><div class="dgrid">' + (c.diff || []).map(function (d) { return '<div class="dd"><b>' + e(d.name) + '</b><span>“' + e(d.ask) + '”</span>' + (d.hear ? '<small>If they say: “' + e(d.hear) + '”</small>' : '') + (d.sep ? '<small class="sep2">Separates it: ' + e(d.sep) + '</small>' : '') + '</div>'; }).join("") + '</div>' +
        (c.risk ? '<div class="risk2">' + ic("alert") + '<span>' + e(c.risk) + '</span></div>' : '') +
        ((c.next || []).length ? '<div class="sub2">Next steps</div><ul class="sev2">' + c.next.map(function (x) { return '<li>' + e(x) + '</li>'; }).join("") + '</ul>' : '') +
        (c.tell ? '<div class="tell2"><b>Tell your consultant</b>“' + e(c.tell) + '”</div>' : '');
      return '<div class="fl" data-f="' + e((c.name + " " + c.group + " " + c.open).toLowerCase()) + '">' + acc(c.name, "“" + c.open + "”", body) + '</div>';
    });
  }
  function pMse() {
    return search("Find a phenomenon…") + groups(D.icd_mse || [], function (c) {
      var body = (c.who ? '<div class="who2">' + e(c.who) + '</div>' : '') + (c.says || []).map(function (s) { return bubble("They say", "“" + s + "”", "p"); }).join("") +
        '<div class="sub2">Pin it down</div>' + (c.explore || []).map(function (q, i) { return '<button class="ci2"><span class="bx2">' + ic("check") + '</span><span><b>' + (i + 1) + '.</b> “' + e(q) + '”</span></button>'; }).join("") +
        '<div class="think">' + ic("eye") + '<span><b>It is this when…</b> ' + e(c.is) + '</span></div>' +
        ((c.notit || []).length ? '<div class="sub2">It is not…</div><ul class="sev2">' + c.notit.map(function (x) { return '<li>' + e(x) + '</li>'; }).join("") + '</ul>' : '') +
        '<div class="sub2">Clusters to rule in or out</div><div class="dgrid">' + (c.clusters || []).map(function (d) { return '<div class="dd"><b>' + e(d.name) + '</b><span>“' + e(d.ask) + '”</span>' + (d.hear ? '<small>A yes sounds like: “' + e(d.hear) + '”</small>' : '') + '</div>'; }).join("") + '</div>' +
        (c.risk ? '<div class="risk2">' + ic("alert") + '<span>' + e(c.risk) + '</span></div>' : '') +
        (c.write ? '<div class="pre2"><div class="tbl">Write it in the MSE</div><p>' + e(c.write) + '</p></div>' : '') +
        (c.tell ? '<div class="tell2"><b>Tell your consultant</b>“' + e(c.tell) + '”</div>' : '');
      return '<div class="fl" data-f="' + e((c.name + " " + c.group + " " + (c.says || []).join(" ")).toLowerCase()) + '">' + acc(c.name, "“" + (c.says || [""])[0] + "”", body) + '</div>';
    });
  }
  var R = { opening: pOpening, validation: pValidation, bps: pBps, distortions: pDist, "icd-history": pHx, "icd-mse": pMse };
  function home() {
    $("sv").innerHTML = '<div class="hgrid">' + SK.map(function (s, i) { return '<a class="hcard" href="#' + s[0] + '"><span class="hn">' + (i + 1) + '</span>' + ic(s[2]) + '<b>' + e(s[1]) + '</b><span>' + e(s[3]) + '</span><em>Open →</em></a>'; }).join("") + '</div>';
    nav("");
  }
  function nav(k) { $("snav").innerHTML = '<div class="lh2">Specific skills</div>' + SK.map(function (s) { return '<a class="ln2' + (s[0] === k ? ' on' : '') + '" href="#' + s[0] + '">' + ic(s[2]) + e(s[1]) + '</a>'; }).join(""); }
  function show() {
    var k = location.hash.slice(1);
    var s = SK.filter(function (x) { return x[0] === k; })[0];
    if (!s) { $("sh").textContent = "Specific skills"; $("sp").textContent = "Six practical skills that every conversation on the ward depends on. Short, exact, and ready to use tomorrow."; home(); window.scrollTo(0, 0); return; }
    $("sh").textContent = s[1]; $("sp").textContent = s[3];
    nav(k); $("sv").innerHTML = '<div class="ph2">' + ic(s[2]) + '<div><h2>' + e(s[1]) + '</h2><p>' + e(s[3]) + '</p></div></div>' + R[k]();
    window.scrollTo(0, 0);
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest("button"); if (!t) return;
    if (t.classList.contains("ah")) return t.parentNode.classList.toggle("op");
    if (t.classList.contains("rv")) { t.classList.add("gone"); t.nextElementSibling.classList.add("on"); return; }
    if (t.classList.contains("ci2")) { t.classList.toggle("on"); var ab = t.closest(".ab2"); var tn = ab && ab.querySelector(".tn"); if (tn) tn.textContent = ab.querySelectorAll(".ci2.on").length; return; }
    if (t.classList.contains("chip2")) { [].forEach.call(document.querySelectorAll(".chip2"), function (x) { x.classList.toggle("on", x === t); }); filter(); return; }
  });
  function filter() {
    var q = (($("q") || {}).value || "").toLowerCase().trim(), ch = document.querySelector(".chip2.on"), tg = ch ? ch.dataset.t : "*";
    [].forEach.call(document.querySelectorAll("#sv .fl"), function (x) { var okT = tg === "*" || !x.dataset.t || x.dataset.t === tg; var okQ = !q || (x.dataset.f || "").indexOf(q) >= 0; x.hidden = !(okT && okQ); });
  }
  document.addEventListener("input", function (ev) { if (ev.target && ev.target.id === "q") filter(); });
  window.addEventListener("hashchange", show); show();
})();
