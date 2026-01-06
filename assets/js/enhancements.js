(function () {
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal (quotes etc.)
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (revealEls.length) {
    if (!reducedMotion && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }

})();
