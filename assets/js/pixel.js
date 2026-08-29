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

  /* Readable-font toggle. data-font is 'readable' or absent (pixel default);
     it is applied pre-paint by the layout head. applyFont() is shared by the
     nav toggle and the first-visit prompt below. */
  var fontToggle = document.getElementById('fontToggle');
  function applyFont(mode, persist) {
    var readable = mode === 'readable';
    if (readable) { root.setAttribute('data-font', 'readable'); }
    else { root.removeAttribute('data-font'); }
    if (persist !== false) {
      try { localStorage.setItem('font', readable ? 'readable' : 'pixel'); } catch (e) {}
    }
    if (fontToggle) {
      fontToggle.setAttribute('aria-pressed', readable ? 'true' : 'false');
    }
  }
  applyFont(root.getAttribute('data-font') === 'readable' ? 'readable' : 'pixel', false);
  if (fontToggle) {
    fontToggle.addEventListener('click', function () {
      applyFont(root.getAttribute('data-font') === 'readable' ? 'pixel' : 'readable');
    });
  }

  /* First-visit prompt: shown only when no font choice has been stored yet.
     Dismisses by shrinking the card down into the nav font toggle. */
  var fontPrompt = document.getElementById('fontPrompt');
  var storedFont = null;
  try { storedFont = localStorage.getItem('font'); } catch (e) {}
  if (fontPrompt && !storedFont) {
    fontPrompt.hidden = false;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { fontPrompt.classList.add('is-open'); });
    });

    fontPrompt.addEventListener('click', function (e) {
      var choice = e.target.closest('[data-font-choice]');
      if (!choice) return;
      applyFont(choice.getAttribute('data-font-choice'));
      closeFontPrompt();
    });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape' && !fontPrompt.hidden) {
        applyFont('pixel');                 /* Esc keeps the pixel default */
        closeFontPrompt();
        document.removeEventListener('keydown', onEsc);
      }
    });
  }

  function closeFontPrompt() {
    var card = fontPrompt.querySelector('.font-prompt-card');
    fontPrompt.classList.remove('is-open');
    fontPrompt.classList.add('is-closing');

    if (card && fontToggle) {
      var cr = card.getBoundingClientRect();
      var br = fontToggle.getBoundingClientRect();
      var dx = (br.left + br.width / 2) - (cr.left + cr.width / 2);
      var dy = (br.top + br.height / 2) - (cr.top + cr.height / 2);
      card.style.transition = 'transform .5s cubic-bezier(.5,0,.25,1), opacity .5s ease';
      card.style.transformOrigin = 'center center';
      card.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.04)';
      card.style.opacity = '0';
      /* pulse the toggle as the card "lands" in it */
      setTimeout(function () {
        fontToggle.classList.add('just-set');
        setTimeout(function () { fontToggle.classList.remove('just-set'); }, 500);
      }, 360);
    }

    var done = function () {
      fontPrompt.hidden = true;
      fontPrompt.classList.remove('is-closing');
    };
    if (card) { card.addEventListener('transitionend', done, { once: true }); }
    setTimeout(done, 700);
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
