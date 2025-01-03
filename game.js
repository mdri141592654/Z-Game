
document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("language");
  const resources = document.getElementById("resources");
  const dayCounter = document.getElementById("day-counter");
  const healthBar = document.getElementById("health-bar");
  const energyBar = document.getElementById("energy-bar");
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu111 = document.getElementById("menu-1.1.1");
  const menu112 = document.getElementById("menu-1.1.2");
  const menu113 = document.getElementById("menu-1.1.3");
  const menu114 = document.getElementById("menu-1.1.4");
  const menu115 = document.getElementById("menu-1.1.5");
  const backButton = document.getElementById("back");

  const translations = {
    de: {
      resources: "Nahrung: 00<br>Medizin: 00<br>Mumition: 00<br>Baumaterial: 00",
      dayCounter: "Tag: 00",
      healthBar: "Gesundheit 100/100",
      energyBar: "Energie 100/100",
      menu1: ["Plündern", "Gezieltes Plündern", "Materialien verwenden", "Schlafen"],
      menu11: ["Zurück", "Leicht", "Medium", "Schwer", "Hart", "Extrem"],
      menu111: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"],
      menu112: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"],
      menu113: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"],
      menu114: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"],
      menu115: ["Zurück", "Ohne Waffe losziehen", "5 Schuss mitnehmen", "10 Schuss mitnehmen", "15 Schuss mitnehmen", "20 Schuss mitnehmen"]
    },
    en: {
      resources: "Food: 00<br>Medicine: 00<br>Ammo: 00<br>Materials: 00",
      dayCounter: "Day: 00",
      healthBar: "Health 100/100",
      energyBar: "Energy 100/100",
      menu1: ["Scavenge", "Targeted Scavenge", "Use Materials", "Sleep"],
      menu11: ["Back", "Easy", "Medium", "Hard", "Very Hard", "Extreme"],
      menu111: ["Back", "Go Without Weapon", "Take 5 Bullets", "Take 10 Bullets", "Take 15 Bullets", "Take 20 Bullets"],
      menu112: ["Back", "Go Without Weapon", "Take 5 Bullets", "Take 10 Bullets", "Take 15 Bullets", "Take 20 Bullets"],
      menu113: ["Back", "Go Without Weapon", "Take 5 Bullets", "Take 10 Bullets", "Take 15 Bullets", "Take 20 Bullets"],
      menu114: ["Back", "Go Without Weapon", "Take 5 Bullets", "Take 10 Bullets", "Take 15 Bullets", "Take 20 Bullets"],
      menu115: ["Back", "Go Without Weapon", "Take 5 Bullets", "Take 10 Bullets", "Take 15 Bullets", "Take 20 Bullets"]
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
    const menu112Fields = menu112.getElementsByClassName("field");
    const menu113Fields = menu113.getElementsByClassName("field");
    const menu114Fields = menu114.getElementsByClassName("field");
    const menu115Fields = menu115.getElementsByClassName("field");

    Array.from(menu1Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu1[index];
    });

    Array.from(menu11Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu11[index];
    });

    Array.from(menu111Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu111[index];
    });

    Array.from(menu112Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu112[index];
    });

    Array.from(menu113Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu113[index];
    });

    Array.from(menu114Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu114[index];
    });

    Array.from(menu115Fields).forEach((field, index) => {
      field.textContent = translations[lang].menu115[index];
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

  // Wechsel zu Menü 1.1.1 bei Klick auf "Leicht"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "easy") {
      menu11.style.display = "none";
      menu111.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.2 bei Klick auf "Medium"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "medium") {
      menu11.style.display = "none";
      menu112.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.3 bei Klick auf "Schwer"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "hard") {
      menu11.style.display = "none";
      menu113.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.4 bei Klick auf "Hart"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "very-hard") {
      menu11.style.display = "none";
      menu114.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.5 bei Klick auf "Extrem"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "extreme") {
      menu11.style.display = "none";
      menu115.style.display = "grid";
    }
  });

  // Zurück-Button in Menü 1.1.1
  menu111.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      menu111.style.display = "none";
      menu11.style.display = "grid"; // Zurück ins Menü 1.1
    }
  });

  // Zurück-Button in Menü 1.1.2
  menu112.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      menu112.style.display = "none";
      menu11.style.display = "grid"; // Zurück ins Menü 1.1
    }
  });

  // Zurück-Button in Menü 1.1.3
  menu113.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      menu113.style.display = "none";
      menu11.style.display = "grid"; // Zurück ins Menü 1.1
    }
  });

  // Zurück-Button in Menü 1.1.4
  menu114.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      menu114.style.display = "none";
      menu11.style.display = "grid"; // Zurück ins Menü 1.1
    }
  });

  // Zurück-Button in Menü 1.1.5
  menu115.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      menu115.style.display = "none";
      menu11.style.display = "grid"; // Zurück ins Menü 1.1
    }
  });

  backButton.addEventListener("click", () => {
    menu11.style.display = "none";
    menu1.style.display = "grid";
  });

  // Standard auf Deutsch setzen
  updateLanguage("de");
});
