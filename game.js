// Spracheinstellungen
const translations = {
  de: {
    resources: "Nahrung: xx<br>Medizin: xx<br>Munition: xx<br>Baumaterial: xx",
    dayCounter: "08:00 Uhr<br>Tag: xx",
    health: "Gesundheit 100/100",
    energy: "Energie 100/100"
  },
  en: {
    resources: "Food: xx<br>Medicine: xx<br>Ammunition: xx<br>Building Materials: xx",
    dayCounter: "08:00 am<br>Day: xx",
    health: "Health 100/100",
    energy: "Energy 100/100"
  }
};

// Elemente auswählen
const languageSelector = document.getElementById("language");
const resourcesDiv = document.getElementById("resources");
const dayCounterDiv = document.getElementById("day-counter");
const healthBar = document.getElementById("health-bar");
const energyBar = document.getElementById("energy-bar");

// Sprache ändern
languageSelector.addEventListener("change", (e) => {
  const lang = e.target.value;
  resourcesDiv.innerHTML = translations[lang].resources;
  dayCounterDiv.innerHTML = translations[lang].dayCounter;
  healthBar.textContent = translations[lang].health;
  energyBar.textContent = translations[lang].energy;
});
