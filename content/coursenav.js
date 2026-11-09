/* Course navigation strip: Home, every course in one menu, My account. Added to every course page. */
(function () {
  if (document.getElementById("tpr-cn")) return;
  var me = document.currentScript && document.currentScript.getAttribute("src") || "";
  var R = me.replace(/content\/coursenav\.js.*$/, "");
  var G = [
    ["Residents", [
      ["Psychiatry for Residents", "residents.html"],
      ["Formulation", "formulation.html"],
      ["Ward challenges (all specialties)", "ward-challenges.html"],
      ["Audio course: Clinical Communication Skills", "rcourse/index.html"],
      ["Specific skills", "skills.html"],
      ["Psychiatry in the News, 2000-2026", "news.html"]]],
    ["Paper A", [
      ["Paper A Full Course", "paper-a.html"],
      ["Paper A Flashcard Revision", "flashcards.html"]]],
    ["Paper B", [
      ["Paper B Live Course", "live-b.html"],
      ["Critical Appraisal Course", "paper-b-research-methods.html"],
      ["Paper B Clinical Course", "paper-b.html"],
      ["Critical Appraisal Intro", "critical-appraisal.html"]]],
    ["Textbooks", [
      ["All textbooks", "books.html"],
      ["Evidence-Based Medicine", "book.html?b=pb-ebm"],
      ["Research Methods", "book.html?b=pb-rm"],
      ["Statistics", "book.html?b=pb-stats"],
      ["Economic Evaluation", "book.html?b=pb-econ"],
      ["Neuroscience", "book.html?b=pa-neuro"],
      ["Human Development + Psychology", "book.html?b=pa-psych"],
      ["Psychopharmacology", "book.html?b=pa-pharm"],
      ["Classification & Assessment", "book.html?b=pa-ca"]]]
  ];
  function tprTag(u){if(!u)return "";var F=["residents.html","formulation.html","news.html","skills.html","curriculum.html","ward-challenges.html#p=core","ward-challenges.html#p=formulation","ward-challenges.html#p=old-age","ward-challenges.html#p=ward"],P=["rcourse/index.html","ward-challenges.html"];
    if(F.indexOf(u)>=0)return '<b class="tg tf">Free</b>';if(P.indexOf(u)>=0)return '<b class="tg tp">Part free</b>';return '<b class="tg tq">Paid</b>';}
  var TAGCSS=".tg{display:inline-block;margin-left:8px;padding:2px 6px;border-radius:3px;font:800 9px/1.2 'Helvetica Neue',Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;vertical-align:2px;font-style:normal}.tf{background:#2E7D5B;color:#fff}.tp{background:#fff;color:#2E7D5B;border:1px solid #2E7D5B}.tq{background:#B8932C;color:#0E1A2B}"+
    ".tlg{padding:8px 18px 10px;margin-bottom:4px;border-bottom:1px solid #E3E6EC;font:12px/1.5 'Helvetica Neue',Arial,sans-serif;color:#5B6474;white-space:normal}.tlg .tg{margin:0 3px 0 0}";
  var LEGEND='<div class="tlg"><b class="tg tf">Free</b> open to everyone, no payment &nbsp; <b class="tg tq">Paid</b> needs a course &nbsp; <a href="'+R+'buy.html" style="color:#8A6A12">See prices</a></div>';
  var css = "#tpr-cn{position:relative;z-index:9999;background:#0E1A2B;border-bottom:2px solid #B8932C;font:600 13px/1 'Helvetica Neue',Arial,sans-serif}" +
    "#tpr-cn .w{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:6px;padding:7px 12px}" +
    "#tpr-cn a,#tpr-cn button{color:#fff;text-decoration:none;background:none;border:1px solid transparent;border-radius:6px;padding:8px 11px;cursor:pointer;font:inherit;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}" +
    "#tpr-cn a:hover,#tpr-cn button:hover,#tpr-cn button[aria-expanded=true]{border-color:#B8932C;color:#E9C870}" +
    "#tpr-cn .h{background:#B8932C;color:#0E1A2B}#tpr-cn .h:hover{background:#D9B85A;color:#0E1A2B}" +
    "#tpr-cn .sp{flex:1}" +
    "#tpr-cn .dd{position:absolute;left:12px;right:12px;top:100%;max-width:760px;margin:0 auto;background:#fff;color:#14243A;border:1px solid #B8932C;border-top:3px solid #B8932C;box-shadow:0 18px 40px -12px rgba(14,26,43,.55);padding:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:4px 16px;max-height:75vh;overflow:auto}" +
    "#tpr-cn .dd[hidden]{display:none}#tpr-cn .dd h5{margin:6px 0 4px;font:800 11px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8A6A12}" +
    "#tpr-cn .dd a{color:#14243A;display:block;padding:7px 8px;font-weight:500;white-space:normal;line-height:1.3}#tpr-cn .dd a:hover{background:#F7F1E1;border-color:transparent;color:#14243A}" +
    "#tpr-cn .dd a.cur{background:#14243A;color:#fff}" +
    "@media(max-width:560px){#tpr-cn .t{display:none}#tpr-cn a,#tpr-cn button{padding:8px 9px}}" +
    "#tpr-cn .dd.fx{position:fixed;top:auto;bottom:76px;left:12px;right:12px}" +
    "#tpr-fab{position:fixed;left:14px;bottom:14px;z-index:9998;display:flex;gap:6px}#tpr-fab[hidden]{display:none}#tpr-fab a,#tpr-fab button{width:48px;height:48px;border-radius:50%;border:2px solid #B8932C;background:#0E1A2B;color:#E9C870;font:700 20px/1 Arial,sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;box-shadow:0 8px 20px -6px rgba(14,26,43,.6)}#tpr-fab a:hover,#tpr-fab button:hover{background:#B8932C;color:#0E1A2B}" +
    "@media print{#tpr-cn,#tpr-fab{display:none}}";
  var st = document.createElement("style"); st.textContent = css + TAGCSS.replace(/(^|\})\./g,"$1#tpr-cn .") + "#tpr-cn .tlg{grid-column:1/-1;padding:4px 8px 10px}"; document.head.appendChild(st);
    var here = location.pathname + location.search;
  var dd = G.map(function (g) {
    return "<div><h5>" + g[0] + "</h5>" + g[1].map(function (l) {
      return '<a href="' + R + l[1] + '"' + ((here + "#").indexOf("/" + l[1] + "#") >= 0 && here.slice(-l[1].length - 1) === "/" + l[1] ? ' class="cur"' : "") + ">" + l[0] + tprTag(l[1]) + "</a>";
    }).join("") + "</div>";
  }).join("");
  var n = document.createElement("div"); n.id = "tpr-cn";
  n.innerHTML = '<div class="w"><a class="h" href="' + R + 'index.html" title="Home page">&#8962;<span class="t"> Home</span></a>' +
    (history.length > 1 ? '<button id="tpr-bk" title="Go back">&larr;<span class="t"> Back</span></button>' : "") +
    '<button id="tpr-cb" aria-expanded="false">&#9776; All courses &#9662;</button><span class="sp"></span>' +
    '<a href="' + R + 'buy.html" class="t">Course prices</a>' +
    '<a href="' + R + 'account.html">&#128273;<span class="t"> My account</span></a></div><div class="dd" id="tpr-dd" hidden>' + LEGEND + dd + "</div>";
  document.body.insertBefore(n, document.body.firstChild);
  var b = document.getElementById("tpr-cb"), d = document.getElementById("tpr-dd");
  b.onclick = function (e) { e.stopPropagation(); d.classList.remove("fx"); d.hidden = !d.hidden; b.setAttribute("aria-expanded", !d.hidden); };
  var f = document.createElement("div"); f.id = "tpr-fab"; f.hidden = true;
  f.innerHTML = '<a href="' + R + 'index.html" title="Home page" aria-label="Home page">&#8962;</a><button title="All courses" aria-label="All courses">&#9776;</button>';
  document.body.appendChild(f);
  f.querySelector("button").onclick = function (e) { e.stopPropagation(); d.classList.add("fx"); d.hidden = !d.hidden; };
  function vis() { var off = n.getBoundingClientRect().bottom < 0; f.hidden = !off; if (!off && d.classList.contains("fx")) { d.hidden = true; d.classList.remove("fx"); } }
  window.addEventListener("scroll", vis, { passive: true }); vis();
  document.addEventListener("click", function (e) { if (!d.hidden && !n.contains(e.target) && !f.contains(e.target)) { d.hidden = true; b.setAttribute("aria-expanded", "false"); } });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !d.hidden) { d.hidden = true; b.setAttribute("aria-expanded", "false"); } });
  var bk = document.getElementById("tpr-bk"); if (bk) bk.onclick = function () { history.back(); };
})();
