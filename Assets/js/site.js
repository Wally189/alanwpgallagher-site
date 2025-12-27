(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const landingKey = "landingUrl";
  if (!sessionStorage.getItem(landingKey)) {
    sessionStorage.setItem(landingKey, location.href);
  }

  const backBtn = document.querySelector("[data-back]");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const landing = sessionStorage.getItem(landingKey);
      if (landing) {
        location.href = landing;
      } else {
        location.href = backBtn.getAttribute("data-back");
      }
    });
  }

  const langBtn = document.querySelector("[data-lang-target]");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      location.href = langBtn.getAttribute("data-lang-target");
    });
  }

  const shareBtn = document.querySelector("[data-share]");
  if (shareBtn) {
    const hint = document.querySelector("[data-share-hint]");
    shareBtn.addEventListener("click", async () => {
      const url = location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(url);
          if (hint) {
            hint.textContent = "Link copied.";
          }
          return;
        } catch (err) {
          // Fall back to showing the URL below.
        }
      }
      if (hint) {
        hint.textContent = url;
      }
    });
  }

  const devotionEl = document.querySelector("[data-devotion-time]");
  if (devotionEl) {
    const pad2 = (value) => String(value).padStart(2, "0");
    const formatDevotion = () => {
      const now = new Date();
      const year = now.getFullYear();
      const day = pad2(now.getDate());
      const month = pad2(now.getMonth() + 1);
      const hours = pad2(now.getHours());
      const minutes = pad2(now.getMinutes());
      devotionEl.textContent = `Deo gratias · Anno Domini ${year} · ${day}.${month}.${year} · ${hours}:${minutes}`;
    };
    formatDevotion();
    setInterval(formatDevotion, 60000);
  }
})();
