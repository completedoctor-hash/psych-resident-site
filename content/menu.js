/* Site menu with drop-downs. Rebuilds nav.primary on every page that loads it. */
(function () {
  var SOON = null;
  var M = [
    ["Front Page", "index.html"],
    ["The Story", "stories.html"],
    ["The Timeline", "timeline.html"],
    ["In the News", "news.html"],
    ["Residents", null, [
      ["Psychiatry for Residents", "residents.html"],
      ["Audio course: Clinical Communication Skills", "rcourse/index.html"], ["Core: first weeks and on call", "ward-challenges.html#p=core"],
      ["Formulation", "formulation.html"], ["Old Age Psychiatry", "ward-challenges.html#p=old-age"], ["Adult Psychiatry", "ward-challenges.html#p=adult"], ["Psychotherapy", "ward-challenges.html#p=psychotherapy"],
      ["Child Psychiatry", "ward-challenges.html#p=camhs"], ["Forensic Psychiatry", "ward-challenges.html#p=forensic"], ["Addiction Psychiatry", "ward-challenges.html#p=addiction"], ["Learning Disability Psychiatry", "ward-challenges.html#p=ld"], ["Perinatal Psychiatry", "ward-challenges.html#p=perinatal"], ["Ward realities", "ward-challenges.html#p=ward"], ["Special Challenges", "ward-challenges.html#p=comm"], ["Specific Skills", "skills.html"]]],
    ["Curriculum", "curriculum.html"],
    ["Paper A Courses", null, [
      ["Paper A Full Course", "paper-a.html"],
      ["Paper A Flashcard Revision Course", "flashcards.html"],
      ["Revision Mocks 1–16", SOON]]],
    ["Paper A Textbooks", null, [
      ["Neuroscience", "book.html?b=pa-neuro"], ["Human Development + Psychology", "book.html?b=pa-psych"], ["Psychopharmacology", "book.html?b=pa-pharm"], ["Classification & Assessment", "book.html?b=pa-ca"]]],
    ["Paper B Courses", null, [
      ["Paper B Live Course (starts 7 Nov)", "live-b.html"],
      ["Critical Appraisal Course", "paper-b-research-methods.html"],
      ["Paper B Clinical Course", "paper-b.html"],
      ["Critical Appraisal Intro", "critical-appraisal.html"],
      ["Paper B Clinical Flashcard Revision", SOON],
      ["Mocks 1–16", SOON]]],
    ["Paper B Textbook", null, [
      ["Forensics, Psychotherapy & Organisational Psychiatry", SOON], ["Addiction, Learning Disability & Liaison", SOON],
      ["Perinatal, Child & Old Age", SOON], ["Adult Psychiatry", SOON], ["Economic Evaluation & Others", "book.html?b=pb-econ"],
      ["Evidence-Based Medicine", "book.html?b=pb-ebm"], ["Research Methods", "book.html?b=pb-rm"], ["Statistics", "book.html?b=pb-stats"]]],
    ["Textbooks", "books.html"],
    ["Course prices", "buy.html"],
    ["Partnerships", "partners.html"],
    ["Register", "register.html"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  function tprTag(u){if(!u)return "";var F=["residents.html","formulation.html","news.html","skills.html","curriculum.html","ward-challenges.html#p=core","ward-challenges.html#p=formulation","ward-challenges.html#p=old-age","ward-challenges.html#p=ward"],P=["rcourse/index.html","ward-challenges.html"];
    if(F.indexOf(u)>=0)return '<b class="tg tf">Free</b>';if(P.indexOf(u)>=0)return '<b class="tg tp">Part free</b>';return '<b class="tg tq">Paid</b>';}
  var TAGCSS=".tg{display:inline-block;margin-left:8px;padding:2px 6px;border-radius:3px;font:800 9px/1.2 'Helvetica Neue',Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;vertical-align:2px;font-style:normal}.tf{background:#2E7D5B;color:#fff}.tp{background:#fff;color:#2E7D5B;border:1px solid #2E7D5B}.tq{background:#B8932C;color:#0E1A2B}"+
    ".tlg{padding:8px 18px 10px;margin-bottom:4px;border-bottom:1px solid #E3E6EC;font:12px/1.5 'Helvetica Neue',Arial,sans-serif;color:#5B6474;white-space:normal}.tlg .tg{margin:0 3px 0 0}";
  var LEGEND='<div class="tlg"><b class="tg tf">Free</b> open to everyone, no payment &nbsp; <b class="tg tq">Paid</b> needs a course &nbsp; <a href="buy.html" style="color:#8A6A12">See prices</a></div>';
  function item(x) {
    if (x[2]) return '<div class="mg"><span class="mh">' + x[0] + '</span>' + x[2].map(item).join("") + '</div>';
    if (!x[1]) return '<span class="mi soon">' + x[0] + ' <em>Soon</em></span>';
    return '<a class="mi' + (x[1] === here ? ' on' : '') + '" href="' + x[1] + '">' + x[0] + tprTag(x[1]) + '</a>';
  }
  function build(nav) {
    var w = nav.querySelector(".wrap") || nav;
    w.innerHTML = M.map(function (x) {
      if (!x[2]) return '<a href="' + x[1] + '"' + (x[1] === here ? ' class="active"' : '') + '>' + x[0] + '</a>';
      return '<div class="dd"><button type="button" aria-expanded="false">' + x[0] + ' ▾</button><div class="dm">' + (/^(Residents|Paper|Textbook)/.test(x[0]) ? LEGEND : '') + x[2].map(item).join("") + '</div></div>';
    }).join("");
    [].forEach.call(w.querySelectorAll(".dd > button"), function (b) {
      b.onclick = function (e) {
        e.stopPropagation(); var open = b.parentNode.classList.contains("open");
        [].forEach.call(w.querySelectorAll(".dd.open"), function (d) { d.classList.remove("open"); d.firstChild.setAttribute("aria-expanded", "false"); });
        if (!open) { b.parentNode.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
      };
    });
    document.addEventListener("click", function () { [].forEach.call(w.querySelectorAll(".dd.open"), function (d) { d.classList.remove("open"); }); });
  }
  var css = 'nav.primary .wrap{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}' +
    'nav.primary .dd{position:relative;display:inline-block}' +
    'nav.primary .dd>button{font:inherit;font-family:"Helvetica Neue",Arial,sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;background:none;border:0;border-bottom:2px solid transparent;padding:14px 13px;cursor:pointer;color:inherit}' +
    'nav.primary .dd.open>button,nav.primary .dd>button:hover{border-bottom-color:#B8932C;color:#14243A}' +
    'nav.primary .dm{display:none;position:absolute;left:0;top:100%;z-index:60;min-width:320px;background:#fff;border:1px solid #14243A;border-top:3px solid #B8932C;padding:8px 0;text-align:left}' +
    'nav.primary .dd.open .dm{display:block}' +
    'nav.primary .dm .mi{display:block;padding:9px 18px;font:15px/1.35 Georgia,serif;letter-spacing:0;text-transform:none;color:#14243A;text-decoration:none;border:0}' +
    'nav.primary .dm a.mi:hover,nav.primary .dm a.mi.on{background:#14243A;color:#fff}' +
    'nav.primary .dm .soon{color:#8A93A3}nav.primary .dm .soon em{font:700 9px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#B8932C;font-style:normal;margin-left:6px;border:1px solid #B8932C;padding:1px 5px}' +
    'nav.primary .dm .mg{padding:4px 0}nav.primary .dm .mh{display:block;padding:8px 18px 2px;font:700 10px Helvetica Neue,Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#B8932C}' +
    'nav.primary .dm .mg .mi{padding-left:30px}' +
    '@media(max-width:760px){nav.primary .dm{position:static;min-width:0;border-left:0;border-right:0}nav.primary .dd{display:block;width:100%}}';
  var st = document.createElement("style"); st.textContent = css + TAGCSS.replace(/(^|\})\./g,'$1nav.primary .'); document.head.appendChild(st);
  function foot() {
    if (document.querySelector(".tpr-legal")) return;
    var f = document.createElement("div"); f.className = "tpr-legal";
    f.style.cssText = "border-top:1px solid #D6DAE1;padding:16px 24px;text-align:center;font:13px Helvetica Neue,Arial,sans-serif;color:#5B6474;background:#fff";
    f.innerHTML = '<a href="terms.html" style="color:#14243A;margin:0 10px">Terms</a><a href="privacy.html" style="color:#14243A;margin:0 10px">Privacy</a><a href="refunds.html" style="color:#14243A;margin:0 10px">Refunds</a><a href="help.html" style="color:#14243A;margin:0 10px">Help</a><a href="mailto:completedoctor@gmail.com" style="color:#14243A;margin:0 10px">Contact</a>';
    document.body.appendChild(f);
  }
  function go() { foot(); var n = document.querySelector("nav.primary"); if (n) build(n); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
