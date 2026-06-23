(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lang-selector]').forEach(function (selector) {
      var btn = selector.querySelector('.lang-selector-btn');
      if (!btn) return;

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = selector.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      selector.addEventListener('click', function (e) {
        e.stopPropagation();
      });

      document.addEventListener('click', function () {
        selector.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          selector.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });
})();
