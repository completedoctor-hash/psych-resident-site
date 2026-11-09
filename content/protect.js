/* Content protection: blocks select-all, copy, cut, right-click, drag, save and print
   for everyone except the site owner (admin). The admin flag is set by auth.js. */
(function () {
  function isAdmin() {
    try { if (/[?&]student=1/.test(location.search) || sessionStorage.getItem("tpr-student") === "1") { sessionStorage.setItem("tpr-student","1"); return false; } } catch (e) {}
    try { if (window.hasAccess && window.hasAccess("admin")) return true; } catch (e) {}
    try { return localStorage.getItem("tpr-adm") === "1"; } catch (e) { return false; }
  }
  function editable(t) {
    if (!t || !t.closest) return false;
    return !!t.closest("input,textarea,select,[contenteditable=''],[contenteditable='true']");
  }
  var css = document.createElement("style");
  css.id = "tpr-protect";
  css.textContent =
    "html.tpr-lock body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none}" +
    "html.tpr-lock input,html.tpr-lock textarea,html.tpr-lock select,html.tpr-lock [contenteditable]{-webkit-user-select:text;user-select:text}" +
    "html.tpr-lock img,html.tpr-lock svg{-webkit-user-drag:none;user-drag:none;pointer-events:auto}" +
    "@media print{html.tpr-lock body{display:none!important}html.tpr-lock:after{content:'Printing is not available for course content.';display:block;padding:40px;font:16px Georgia,serif}}";
  (document.head || document.documentElement).appendChild(css);
  function apply() { document.documentElement.classList.toggle("tpr-lock", !isAdmin()); }
  apply();
  if (typeof window.onAuthReady === "function") { try { window.onAuthReady(apply); } catch (e) {} }
  setTimeout(apply, 800); setTimeout(apply, 2500);
  function block(e) {
    if (isAdmin() || editable(e.target)) return;
    e.preventDefault(); return false;
  }
  ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach(function (ev) {
    document.addEventListener(ev, block, true);
  });
  document.addEventListener("keydown", function (e) {
    if (isAdmin()) return;
    var k = (e.key || "").toLowerCase(), mod = e.ctrlKey || e.metaKey;
    if (mod && (k === "s" || k === "p" || k === "u")) { e.preventDefault(); return; }
    if (mod && (k === "a" || k === "c" || k === "x") && !editable(e.target)) { e.preventDefault(); return; }
    if (mod && e.shiftKey && (k === "i" || k === "j" || k === "c")) { e.preventDefault(); return; }
    if (k === "f12") { e.preventDefault(); }
  }, true);
  window.addEventListener("beforeprint", function () { if (!isAdmin()) document.documentElement.classList.add("tpr-lock"); });
})();
