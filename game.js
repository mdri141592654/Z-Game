document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language");
  const resources = document.getElementById("resources");
  const dayCounter = document.getElementById("day-counter");
  const healthBar = document.getElementById("health-bar");
  const energyBar = document.getElementById("energy-bar");
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu111 = document.getElementById("menu-1.1.1");  // Neues Menü 1.1.1
  const backButton = document.getElementById("back");
  const backButton111 = document.getElementById("back111"); // Zurück-Button für Menü 1.1.1

  const translations = {
    de: {
      resources: "Nahrung: 00<br>Medizin: 00<br>Mumition: 00<br>Baumaterial: 00",
      dayCounter: "Tag: 00",
      healthBar: "Gesundheit 100/100",
      energyBar: "Energie 100/100",
      menu1: ["Plündern", "Gezieltes Plündern", "Materialien verwenden", "Schlafen"],
      menu11: ["Zurück", "Leicht", "Medium", "Schwer", "Hart", "Extrem"],
      menu111: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"]
    },
    en: {
      resources: "Food: 00<br>Medicine: 00<br>Ammo: 00<br>Materials: 00",
      dayCounter: "Day: 00",
      healthBar: "Health 100/100",
      energyBar: "Energy 100/100",
      menu1: ["Scavenge", "Targeted Scavenge", "Use Materials", "Sleep"],
      menu11: ["Back", "Easy", "Medium", "Hard", "Very Hard", "Extreme"],
      menu111: ["Back", "Go without weapon", "Take 5 shots", "Take 10 shots", "Take 15 shots", "Take 20 shots"]
    },
  };

  const updateLanguage = (lang) => {
    resources.innerHTML = translations[lang].resources;
    dayCounter.textContent = translations[lang].dayCounter;
    healthBar.textContent = translations[lang].healthBar;
    energyBar.textContent = translations[lang].energyBar;

    const menu1Fields = menu1.getElementsByClassName("field");
    const menu11Fields = menu11.getElementsByClassName("field");
    const menu111Fields = menu111.getElementsByClassName("field");

    Array.from(menu1Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu1[index];
    });

    Array.from(menu11Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu11[index];
    });

    Array.from(menu111Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu111[index];
    });
  };

  // Sprachwechsel-Event
  languageSelector.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    updateLanguage(selectedLanguage);
  });

  // Menünavigation
  menu1.addEventListener("click", (e) => {
    if (e.target.id === "scavenge") {
      menu1.style.display = "none";
      menu11.style.display = "grid";
    }
  });

  menu11.addEventListener("click", (e) => {
    if (e.target.id === "easy") {
      menu11.style.display = "none";
      menu111.style.display = "grid";
    }
  });

  backButton.addEventListener("click", () => {
    menu11.style.display = "none";
    menu1.style.display = "grid";
  });

  backButton111.addEventListener("click", () => {
    menu111.style.display = "none";
    menu11.style.display = "grid";
  });

  // Standard auf Deutsch setzen
  updateLanguage("de");
});
