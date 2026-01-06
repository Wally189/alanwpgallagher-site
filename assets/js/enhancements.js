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

  const horaEls = Array.from(document.querySelectorAll('[data-hora]'));
  const dateEls = Array.from(document.querySelectorAll('[data-date]'));
  const needsHora = horaEls.length && horaEls.every((el) => !el.textContent.trim());
  const needsDate = dateEls.length && dateEls.every((el) => !el.textContent.trim());

  if (needsHora || needsDate) {
    const toMinutes = (hours, minutes) => hours * 60 + minutes;
    const formatRange = (start, end) => {
      const pad2 = (value) => String(value).padStart(2, '0');
      const startH = Math.floor(start / 60);
      const startM = start % 60;
      const endH = Math.floor(end / 60);
      const endM = end % 60;
      return `${pad2(startH)}:${pad2(startM)}-${pad2(endH)}:${pad2(endM)}`;
    };
    const schedule = [
      { start: toMinutes(5, 45), end: toMinutes(6, 15), label: 'Laudes' },
      { start: toMinutes(6, 15), end: toMinutes(7, 15), label: 'Prima' },
      { start: toMinutes(7, 15), end: toMinutes(8, 0), label: 'Tertia' },
      { start: toMinutes(8, 0), end: toMinutes(10, 0), label: 'Labora' },
      { start: toMinutes(10, 0), end: toMinutes(12, 0), label: 'Labora' },
      { start: toMinutes(12, 0), end: toMinutes(14, 0), label: 'Sexta' },
      { start: toMinutes(14, 0), end: toMinutes(16, 0), label: 'Nona' },
      { start: toMinutes(16, 0), end: toMinutes(18, 0), label: 'Vesperae' },
      { start: toMinutes(18, 0), end: toMinutes(18, 15), label: 'Vesperae' },
      { start: toMinutes(18, 15), end: toMinutes(19, 45), label: 'Studium' },
      { start: toMinutes(19, 45), end: toMinutes(21, 30), label: 'Requies' },
      { start: toMinutes(21, 30), end: toMinutes(22, 30), label: 'Completorium' },
      { start: toMinutes(22, 30), end: toMinutes(24, 0), label: 'Silentium' },
      { start: toMinutes(0, 0), end: toMinutes(5, 45), label: 'Silentium' }
    ];
    const firstSaturdayOfMonth = (year, month) => {
      const date = new Date(year, month, 1);
      while (date.getDay() !== 6) {
        date.setDate(date.getDate() + 1);
      }
      return date;
    };
    const getSaturdayRotationLabel = (date) => {
      if (date.getDay() !== 6) {
        return null;
      }
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstSaturday = firstSaturdayOfMonth(year, month);
      const saturdayNumber = Math.floor((date.getDate() - firstSaturday.getDate()) / 7) + 1;
      if (saturdayNumber >= 5) {
        return 'Free';
      }
      const anchorSaturday = firstSaturdayOfMonth(2026, 0);
      const dateMidnight = new Date(year, month, date.getDate());
      const weeksSinceAnchor = Math.floor(
        (dateMidnight - anchorSaturday) / (7 * 24 * 60 * 60 * 1000)
      );
      const rotationIndex = ((weeksSinceAnchor % 4) + 4) % 4;
      return ['A', 'B', 'C', 'D'][rotationIndex];
    };
    const updateHora = () => {
      if (!needsHora) {
        return;
      }
      const now = new Date();
      const current = toMinutes(now.getHours(), now.getMinutes());
      const entry = schedule.find((item) => current >= item.start && current < item.end);
      if (!entry) {
        return;
      }
      const range = formatRange(entry.start, entry.end);
      const saturdayLabel = getSaturdayRotationLabel(now);
      const label = saturdayLabel ? `${entry.label} - ${saturdayLabel}` : entry.label;
      horaEls.forEach((el) => {
        el.textContent = `${label} · ${range}`;
      });
    };
    const ordinal = (day) => {
      if (day % 100 >= 11 && day % 100 <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };
    const updateDies = () => {
      if (!needsDate) {
        return;
      }
      const now = new Date();
      const lang = (document.documentElement.lang || '').toLowerCase();
      const path = (location.pathname || '').toLowerCase();
      const isIrish = lang.startsWith('ga') || path.includes('-ga');
      const year = now.getFullYear();
      let value = '';
      if (isIrish) {
        const gaWeekdays = [
          'Domhnach',
          'Luan',
          'Máirt',
          'Céadaoin',
          'Déardaoin',
          'Aoine',
          'Satharn'
        ];
        const gaMonths = [
          'Eanáir',
          'Feabhra',
          'Márta',
          'Aibreán',
          'Bealtaine',
          'Meitheamh',
          'Iúil',
          'Lúnasa',
          'Meán Fómhair',
          'Deireadh Fómhair',
          'Samhain',
          'Nollaig'
        ];
        const weekday = gaWeekdays[now.getDay()];
        const month = gaMonths[now.getMonth()];
        const day = now.getDate();
        value = `${weekday} ${day} ${month} ${year} AD`;
      } else {
        const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(now);
        const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(now);
        const day = ordinal(now.getDate());
        value = `${weekday} ${day} ${month} ${year} AD`;
      }
      dateEls.forEach((el) => {
        el.textContent = value;
      });
    };

    updateHora();
    updateDies();
    setInterval(updateHora, 60000);
    setInterval(updateDies, 60000);
  }

})();
