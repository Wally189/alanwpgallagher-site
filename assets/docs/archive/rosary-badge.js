// Archived: monthly rosary DIES badge (removed from site JS for now).
// Original location: assets/js/enhancements.js
(function () {
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      setInterval(() => {
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
