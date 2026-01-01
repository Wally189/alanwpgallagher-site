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
    text.textContent = `${monthInfo.month}: ${monthInfo.theme}`;

    const infoLink = document.createElement('a');
    infoLink.className = 'dies-badge__info';
    infoLink.href = infoUrl;
    infoLink.setAttribute('aria-label', 'About the monthly rosary theme');
    infoLink.textContent = 'i';

    badge.append(tag, text, infoLink);
    document.body.appendChild(badge);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildDiesBadge);
  } else {
    buildDiesBadge();
  }
})();
