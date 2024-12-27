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
    menu1.classList.add("hidden");
    menu1_1.classList.remove("hidden");
  });

  // Menü 1 → Menü 1.2
  fieldTargetedScavenge.addEventListener("click", () => {
    menu1.classList.add("hidden");
    menu1_2.classList.remove("hidden");
  });

  // Menü 1.1 → Menü 1
  back1_1.addEventListener("click", () => {
    menu1_1.classList.add("hidden");
    menu1.classList.remove("hidden");
  });

  // Menü 1.2 → Menü 1
  back1_2.addEventListener("click", () => {
    menu1_2.classList.add("hidden");
    menu1.classList.remove("hidden");
  });

  // Sprachumschaltung (Beispiel, ggf. anpassen)
  const languageSelect = document.getElementById("language");
  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    alert(`Sprache geändert zu: ${selectedLanguage}`); // Temporär
  });
});
