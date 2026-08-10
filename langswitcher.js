// ==========================================================================
// DİL SEÇİCİ — sağ üstteki küre ikonu + açılır menü
// ==========================================================================
// Seçim localStorage'da saklanır (bkz. data/i18n.js), varsayılan Türkçe'dir;
// tarayıcı dili ASLA otomatik algılanmaz — seçim her zaman açık/explicittir.

(function () {
  const switcher = document.getElementById("langSwitcher");
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  const flagEl = document.getElementById("langBtnFlag");
  if (!switcher || !btn || !menu) return;

  function renderMenu() {
    menu.innerHTML = I18N_LANGS.map(l => `
      <button type="button" class="lang-option${l.code === getLang() ? " active" : ""}" data-lang="${l.code}" role="menuitem">
        <span class="lang-option-flag">${l.flag}</span><span>${l.label}</span>
      </button>
    `).join("");
    const active = I18N_LANGS.find(l => l.code === getLang()) || I18N_LANGS[0];
    flagEl.textContent = active.flag;
    btn.title = t("lang.pickTitle");
  }

  function closeMenu() {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", open ? "false" : "true");
  });

  menu.addEventListener("click", (e) => {
    const opt = e.target.closest(".lang-option");
    if (!opt) return;
    closeMenu();
    setLang(opt.dataset.lang); // applyI18n() -> renderMenu() (aşağıdaki listener)
  });

  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) closeMenu();
  });

  // Dil seçici sadece "oyun öncesi" ekranlarda görünür; maç/draft ekranlarında
  // üstteki bütçe rozetiyle çakışmaması için gizlenir.
  const PRE_GAME_SCREENS = ["landingScreen", "setupScreen", "lobbyScreen"];
  function updateVisibility() {
    const visible = PRE_GAME_SCREENS.some(id => {
      const el = document.getElementById(id);
      return el && !el.classList.contains("hidden");
    });
    switcher.classList.toggle("hidden", !visible);
    if (!visible) closeMenu();
  }
  const observer = new MutationObserver(updateVisibility);
  document.querySelectorAll(".screen").forEach(s => {
    observer.observe(s, { attributes: true, attributeFilter: ["class"] });
  });

  onLangChange(renderMenu);
  renderMenu();
  updateVisibility();
  applyI18n();
})();
