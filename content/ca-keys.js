/* Keyboard and swipe for the flashcards: the page already has its own keys. */
(function () {
  function click(id) { var b = document.getElementById(id); if (b && !b.disabled) b.click(); }
  var x0 = null;
  document.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 70) click(dx < 0 ? 'next' : 'prev');
  });
})();
