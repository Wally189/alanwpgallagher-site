(function () {
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function createPausableInterval(fn, ms) {
    let id = null;
    function start() {
      if (id == null) id = setInterval(fn, ms);
    }
    function stop() {
      if (id != null) {
        clearInterval(id);
        id = null;
      }
    }
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }
    document.addEventListener("visibilitychange", onVisibility);
    if (!document.hidden) start();
    return { start, stop };
  }

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

  // DIES badge (month + theme) with dismiss
  const monthThemes = [
    { month: 'January', theme: 'Holy Name of Jesus' },
    { month: 'February', theme: 'Holy Family' },
    { month: 'March', theme: 'St Joseph' },
    { month: 'April', theme: 'Easter / Resurrection' },
    { month: 'May', theme: 'Our Lady' },
    { month: 'June', theme: 'Sacred Heart' },
    { month: 'July', theme: 'Precious Blood' },
    { month: 'August', theme: 'Assumption / Immaculate Heart' },
    { month: 'September', theme: 'Our Lady of Sorrows' },
    { month: 'October', theme: 'Our Lady of the Rosary' },
    { month: 'November', theme: 'Holy Souls' },
    { month: 'December', theme: 'Advent / Incarnation' }
  ];

  function buildDiesBadge() {
    const now = new Date();
    const monthInfo = monthThemes[now.getMonth()];

    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    const isIrish = htmlLang.startsWith('ga') || window.location.pathname.toLowerCase().includes('-ga');
    const tagLabel = isIrish ? 'Mí na Paidreacha' : 'Bead';
    const infoUrl = isIrish ? 'rosary-ga.html' : 'rosary.html';

    const badge = document.createElement('div');
    badge.className = 'dies-badge';
    badge.setAttribute('role', 'status');
    badge.setAttribute('aria-label', 'Monthly rosary theme');

    const tag = document.createElement('span');
    tag.className = 'dies-badge__tag';
    tag.textContent = tagLabel;

    const text = document.createElement('span');
    text.className = 'dies-badge__text';
    const labelMonth = `${monthInfo.month}`;
    const labelTheme = `${monthInfo.theme}`;
    text.textContent = labelMonth;

    const infoLink = document.createElement('a');
    infoLink.className = 'dies-badge__info';
    infoLink.href = infoUrl;
    infoLink.setAttribute('aria-label', 'About the monthly rosary theme');
    infoLink.textContent = 'i';

    badge.append(tag, text, infoLink);

    if (!reducedMotion) {
      let showingTheme = false;
      createPausableInterval(() => {
        showingTheme = !showingTheme;
        text.textContent = showingTheme ? labelTheme : labelMonth;
      }, 6000);
    } else {
      text.textContent = `${labelMonth}: ${labelTheme}`;
    }
    document.body.appendChild(badge);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildDiesBadge);
  } else {
    buildDiesBadge();
  }
})();
