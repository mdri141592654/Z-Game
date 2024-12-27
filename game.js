document.addEventListener("DOMContentLoaded", () => {
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu111 = document.getElementById("menu-1.1.1");

  const scavengeButton = document.getElementById("scavenge");
  const backButton11 = document.getElementById("back");
  const easyButton = document.getElementById("easy");
  const backButton111 = document.getElementById("back-1-1-1");

  const languageSelect = document.getElementById("language");

  // Menüwechsel
  scavengeButton.addEventListener("click", () => {
    menu1.style.display = "none";
    menu11.style.display = "grid";
  });

  backButton11.addEventListener("click", () => {
    menu11.style.display = "none";
    menu1.style.display = "grid";
  });

  easyButton.addEventListener("click", () => {
    menu11.style.display = "none";
    menu111.style.display = "grid";
  });

  backButton111.addEventListener("click", () => {
    menu111.style.display = "none";
    menu11.style.display = "grid";
  });

  // Sprache ändern
  const translations = {
    de: {
      scavenge: "Plündern",
      targetedScavenge: "Gezieltes Plündern",
      useMaterials: "Materialien verwenden",
      sleep: "Schlafen",
      back: "Zurück",
      easy: "Leicht",
      medium: "Medium",
      hard: "Schwer",
      veryHard: "Hart",
      extreme: "Extrem",
      noWeapon: "Ohne Waffe losziehen",
      fiveShots: "5 Schuss mitnehmen",
      tenShots: "10 Schuss mitnehmen",
      fifteenShots: "15 Schuss mitnehmen",
      twentyShots: "20 Schuss mitnehmen",
    },
    en: {
      scavenge: "Scavenge",
      targetedScavenge: "Targeted Scavenge",
      useMaterials: "Use Materials",
      sleep: "Sleep",
      back: "Back",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
      veryHard: "Very Hard",
      extreme: "Extreme",
      noWeapon: "Go Unarmed",
      fiveShots: "Take 5 Shots",
      tenShots: "Take 10 Shots",
      fifteenShots: "Take 15 Shots",
      twentyShots: "Take 20 Shots",
    },
  };

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    document.getElementById("scavenge").innerText = translations[lang].scavenge;
    document.getElementById
