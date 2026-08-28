/* Pixel portfolio behavior — theme toggle + project-card accordion.
   Initial theme is set pre-paint by an inline script in the layout head;
   this file only handles the toggle click and the accordion. */
(function () {
  var root = document.documentElement;

  /* Day / night toggle */
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'night' ? 'day' : 'night';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* Project-card accordion (single-open). Event delegation, so no inline
     handlers are needed in the markup. */
  document.addEventListener('click', function (e) {
    var closeBtn = e.target.closest('.close-btn');
    if (closeBtn) {
      var owner = closeBtn.closest('.project-card');
      if (owner) owner.classList.remove('expanded');
      return;
    }
    if (e.target.closest('a')) return;               /* let links behave normally */
    var card = e.target.closest('.project-card');
    if (!card) return;
    var wasExpanded = card.classList.contains('expanded');
    var open = document.querySelectorAll('.project-card.expanded');
    for (var i = 0; i < open.length; i++) open[i].classList.remove('expanded');
    if (!wasExpanded) {
      card.classList.add('expanded');
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();
