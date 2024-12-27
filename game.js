document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language");
  const resources = document.getElementById("resources");
  const dayCounter = document.getElementById("day-counter");
  const healthBar = document.getElementById("health-bar");
  const energyBar = document.getElementById("energy-bar");
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu12 = document.getElementById("menu-1.2");
  const menu111 = document.getElementById("menu-1.1.1");
  const menu112 = document.getElementById("menu-1.1.2");
  const menu113 = document.getElementById("menu-1.1.3");
  const menu114 = document.getElementById("menu-1.1.4");
  const menu115 = document.getElementById("menu-1.1.5");
  const backButton = document.getElementById("back");
  const backButton1_2 = document.getElementById("back-1.2");
  const backButton1_1_1 = document.getElementById("back-1.1.1");
  const backButton1_1_2 = document.getElementById("back-1.1.2");
  const backButton1_1_3 = document.getElementById("back-1.1.3");
  const backButton1_1_4 = document.getElementById("back-1.1.4");
  const backButton1_1_5 = document.getElementById("back-1.1.5");

  const translations = {
    de: {
      resources: "Nahrung: 00<br>Medizin: 00<br>Munition: 00<br>Baumaterial: 00",
      dayCounter: "Tag: 00",
      healthBar: "Gesundheit 100/100",
      energyBar: "Energie 100/100",
      menu1: ["Plündern", "Gezieltes Plündern", "Materialien verwenden", "Schlafen"],
      menu11: ["Zurück", "Leicht", "Medium", "Schwer", "Hart", "Extrem"],
      menu12: ["Zurück", "Leicht", "Medium", "Schwer", "Hart", "Extrem"]
    },
    en: {
      resources: "Food: 00<br>Medicine: 00<br>Ammo: 00<br>Materials: 00",
      dayCounter: "Day: 00",
      healthBar: "Health 100/100",
      energyBar: "Energy 100/100",
      menu1: ["Scavenge", "Targeted Scavenge", "Use Materials", "Sleep"],
      menu11: ["Back", "Easy", "Medium", "Hard", "Very Hard", "Extreme"],
      menu12: ["Back", "Easy", "Medium", "Hard", "Very Hard", "Extreme"]
    },
  };

  const updateLanguage = (lang) => {
    resources.innerHTML = translations[lang].resources;
    dayCounter.textContent = translations[lang].dayCounter;
    healthBar.textContent = translations[lang].healthBar;
    energyBar.textContent = translations[lang].energyBar;

    const menu1Fields = menu1.getElementsByClassName("field");
    const menu11Fields = menu11.getElementsByClassName("field");
    const menu12Fields = menu12.getElementsByClassName("field");

    Array.from(menu1Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu1[index];
    });

    Array.from(menu11Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu11[index];
    });

    Array.from(menu12Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu12[index];
    });
  };

  languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value;
    updateLanguage(selectedLanguage);
  });

  backButton.addEventListener("click", () => {
    menu1.style.display = "block";
    menu11.style.display = "none";
    menu12.style.display = "none";
  });

  backButton1_2.addEventListener("click", () => {
    menu1.style.display = "block";
    menu12.style.display = "none";
  });

  backButton1_1_1.addEventListener("click", () => {
    menu11.style.display = "block";
    menu111.style.display = "none";
  });

  backButton1_1_2.addEventListener("click", () => {
    menu11.style.display = "block";
    menu112.style.display = "none";
  });

  backButton1_1_3.addEventListener("click", () => {
    menu11.style.display = "block";
    menu113.style.display = "none";
  });

  backButton1_1_4.addEventListener("click", () => {
    menu11.style.display = "block";
    menu114.style.display = "none";
  });

  backButton1_1_5.addEventListener("click", () => {
    menu11.style.display = "block";
    menu115.style.display = "none";
  });

  // Initial language update
  updateLanguage("de");
});
