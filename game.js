document.addEventListener("DOMContentLoaded", () => {
  const menu1 = document.getElementById("menu-1");
  const menu1_1 = document.getElementById("menu-1-1");
  const menu1_2 = document.getElementById("menu-1-2");

  const fieldScavenge = document.getElementById("field-scavenge");
  const fieldTargetedScavenge = document.getElementById("field-targeted-scavenge");
  const back1_1 = document.getElementById("back-1-1");
  const back1_2 = document.getElementById("back-1-2");

  // Menü 1 → Menü 1.1
  fieldScavenge.addEventListener("click", () => {
    hideMenu(menu1);
    showMenu(menu1_1);
  });

  // Menü 1 → Menü 1.2
  fieldTargetedScavenge.addEventListener("click", () => {
    hideMenu(menu1);
    showMenu(menu1_2);
  });

  // Menü 1.1 → Menü 1
  back1_1.addEventListener("click", () => {
    hideMenu(menu1_1);
    showMenu(menu1);
  });

  // Menü 1.2 → Menü 1
  back1_2.addEventListener("click", () => {
    hideMenu(menu1_2);
    showMenu(menu1);
  });

  // Sprachumschaltung
  const languageSelect = document.getElementById("language");
  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    console.log(`Sprache geändert zu: ${selectedLanguage}`);
    // Weitere Anpassungen für Sprachwechsel könnten hier erfolgen
  });

  // Funktion: Menü anzeigen
  function showMenu(menu) {
    menu.classList.remove("hidden");
  }

  // Funktion: Menü ausblenden
  function hideMenu(menu) {
    menu.classList.add("hidden");
  }
});
