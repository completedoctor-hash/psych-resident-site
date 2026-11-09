/* Psychiatry for Residents: task view (the task in full, the opening, what to cover, the plan). Original content. */
(function () {
  function e(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var css = '.sv2{display:grid;grid-template-columns:250px minmax(0,1fr);gap:26px;margin:26px 0 40px}.sv2>*{min-width:0}' +
    '.sv2 .sn{position:sticky;top:10px;align-self:start;max-height:calc(100vh - 20px);overflow:auto;border:1px solid #D6DAE1;background:#fff}' +
    '.sv2 .sn .lh{background:#14243A;color:#fff;padding:12px 14px;font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase}' +
    '.sv2 .sn .sc{padding:10px 14px 4px;font:700 10.5px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#B8932C;border-top:1px solid #D6DAE1}' +
    '.sv2 .sn a{display:block;padding:7px 14px;font:13.5px/1.35 Georgia,serif;color:#14243A;text-decoration:none}.sv2 .sn a:hover{background:#F7F8FA}.sv2 .sn a.on{background:#F7F8FA;box-shadow:inset 4px 0 0 #B8932C;font-weight:700}' +
    '.sv2 .ar{font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#B8932C}' +
    '.sv2 h2{font:800 32px/1.15 "Playfair Display",Georgia,serif;margin:6px 0 10px;color:#14243A}' +
    '.sv2 .wh{display:inline-block;background:#2E7D5B;color:#fff;font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px}' +
    '.sv2 .bx{margin:18px 0;border:1px solid #D6DAE1;background:#fff}.sv2 .bx>h3{margin:0;padding:11px 18px;font:800 17px "Playfair Display",Georgia,serif;color:#fff;background:#14243A;display:flex;gap:10px;align-items:center}.sv2 .bx>h3 b{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#B8932C;color:#14243A;font:800 12px Helvetica Neue,Arial,sans-serif}' +
    '.sv2 .bx .bd{padding:14px 18px;font:16.5px/1.6 Georgia,serif;color:#14243A}' +
    '.sv2 .tk{border-left:6px solid #14243A;background:#F7F8FA}' +
    '.sv2 .od{padding:5px 0}.sv2 .op{padding:0 0 6px 24px;font-style:italic;color:#2E7D5B}' +
    '.sv2 ol.cv{margin:0;padding:0;list-style:none;counter-reset:c}.sv2 ol.cv li{counter-increment:c;display:grid;grid-template-columns:34px minmax(0,1fr);gap:10px;padding:9px 0;border-bottom:1px dashed #E1E4EA}.sv2 ol.cv li:before{content:counter(c);display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#14243A;color:#fff;font:700 13px Helvetica Neue,Arial,sans-serif}.sv2 ol.cv b{font-weight:700}.sv2 ol.cv span{color:#4A5568}' +
    '.sv2 .pre{border-left:6px solid #B8932C;background:#FBF7EC;padding:12px 16px;margin:0 0 12px}.sv2 .q{background:#fff;border:1px solid #D6DAE1;border-left:6px solid #2E7D5B;padding:10px 14px;margin:10px 0;font-style:italic}.sv2 .ld{border-left:6px solid #14243A;padding:8px 14px;margin:10px 0}' +
    '.sv2 .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:12px}.sv2 .col{border:1px solid #D6DAE1}.sv2 .col h4{margin:0;padding:8px 12px;color:#fff;font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase}.sv2 .col div{padding:8px 12px;border-top:1px solid #EEF0F3;font-size:15px;line-height:1.5}' +
    '.sv2 .nx{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:22px}.sv2 .nx a{border:1px solid #14243A;padding:10px 14px;color:#14243A;text-decoration:none;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase}.sv2 .nx a:hover{background:#14243A;color:#fff}' +
    '.sv2 .rel{margin-top:14px;font:14px Helvetica Neue,Arial,sans-serif}.sv2 .rel a{color:#2E7D5B;font-weight:700}' +
    '@media(max-width:860px){.sv2{grid-template-columns:1fr}.sv2 .sn{position:static;max-height:none}}';
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  window.STATION_RENDER = function (o, PG, el, BY) {
    var items = [], nav = PG.cats.map(function (c) {
      var li = c.items.filter(function (it) { return it.st; });
      if (!li.length) return "";
      return '<div class="sc">' + e(c.name) + '</div>' + li.map(function (it) { items.push(it); return '<a href="#' + e(it.st) + '"' + (it.st === o.sid ? ' class="on"' : '') + '>' + e(it.t) + '</a>'; }).join("");
    }).join("");
    var i = -1; items.forEach(function (it, k) { if (it.st === o.sid) i = k; });
    var B = o.bps, cols = B ? [["bio", "Biological", "#14243A"], ["psych", "Psychological", "#B8932C"], ["social", "Social", "#2E7D5B"], ["safety", "Safety", "#A33A3A"]].filter(function (k) { return (B[k[0]] || []).length; }) : [];
    var box = function (n, t, body, cls) { return '<section class="bx"><h3><b>' + n + '</b>' + t + '</h3><div class="bd' + (cls ? ' ' + cls : '') + '">' + body + '</div></section>'; };
    var h = '<p><a href="#p=' + e(PG.id) + '" class="b2">&larr; ' + e(PG.name) + '</a></p>' +
      '<div class="ar">' + e(o.area) + '</div><h2>' + e(o.title) + '</h2><span class="wh">You are speaking to: ' + e(o.who) + '</span>' +
      box(1, "The task", e(o.task), "tk") +
      box(2, "Opening", (o.opening || []).map(function (l) { return '<div class="od">' + e(l.d) + '</div>' + (l.p ? '<div class="op">↳ ' + e(l.p) + '</div>' : ''); }).join("")) +
      box(3, "What you have to cover", '<ol class="cv">' + (o.cover || []).map(function (c) { return '<li><div><b>' + e(c.h) + '</b> <span>(' + e(c.b) + ')</span></div></li>'; }).join("") + '</ol>') +
      (B ? box(4, "When they ask how it is treated", '<div class="pre">' + e(B.pre) + '</div><div class="q">“' + e(B.ask) + '”</div>' + (B.lead ? '<div class="ld">' + e(B.lead) + '</div>' : '') +
        '<div class="cols">' + cols.map(function (k) { return '<div class="col"><h4 style="background:' + k[2] + '">' + k[1] + '</h4>' + B[k[0]].map(function (x) { return '<div>' + e(x) + '</div>'; }).join("") + '</div>'; }).join("") + '</div>') : '') +
      '<div class="nx">' + (i > 0 ? '<a href="#' + e(items[i - 1].st) + '">&larr; ' + e(items[i - 1].t) + '</a>' : '<span></span>') + (i >= 0 && i < items.length - 1 ? '<a href="#' + e(items[i + 1].st) + '">' + e(items[i + 1].t) + ' &rarr;</a>' : '') + '</div>';
    el.innerHTML = '<div class="sv2"><nav class="sn"><div class="lh">' + e(PG.name) + '</div>' + nav + '</nav><div>' + h + '</div></div>';
  };
})();
