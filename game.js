// Sprachwechsel Funktion
const languageSelect = document.getElementById('language');
languageSelect.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Funktion zum Wechseln der Sprache
function changeLanguage(language) {
  const languageTexts = {
    'de': {
      'pluender': 'Plündern',
      'gepluender': 'Gezieltes Plündern',
      'materialVerwenden': 'Materialien verwenden',
      'schlafen': 'Schlafen',
      'zurueck': 'Zurück',
      'leicht': 'Leicht',
      'medium': 'Medium',
      'schwer': 'Schwer',
      'hart': 'Hart',
      'extrem': 'Extrem',
      'withoutWeapon': 'Ohne Waffe losziehen',
      'ammo5': '5 Schuss mitnehmen',
      'ammo10': '10 Schuss mitnehmen',
      'ammo15': '15 Schuss mitnehmen',
      'ammo20': '20 Schuss mitnehmen'
    },
    'en': {
      'pluender': 'Loot',
      'gepluender': 'Targeted Loot',
      'materialVerwenden': 'Use Materials',
      'schlafen': 'Sleep',
      'zurueck': 'Back',
      'leicht': 'Easy',
      'medium': 'Medium',
      'schwer': 'Hard',
      'hart': 'Very Hard',
      'extrem': 'Extreme',
      'withoutWeapon': 'Go without weapon',
      'ammo5': 'Take 5 shots',
      'ammo10': 'Take 10 shots',
      'ammo15': 'Take 15 shots',
      'ammo20': 'Take 20 shots'
    }
  };

  const texts = languageTexts[language];
  document.getElementById('scavenge').innerText = texts.pluender;
  document.getElementById('targeted-scavenge').innerText = texts.gepluender;
  document.getElementById('use-materials').innerText = texts.materialVerwenden;
  document.getElementById('sleep').innerText = texts.schlafen;
  document.getElementById('back').innerText = texts.zurueck;
  document.getElementById('easy').innerText = texts.leicht;
  document.getElementById('medium').innerText = texts.medium;
  document.getElementById('hard').innerText = texts.schwer;
  document.getElementById('very-hard').innerText = texts.hart;
  document.getElementById('extreme').innerText = texts.extrem;
  document.getElementById('without-weapon').innerText = texts.withoutWeapon;
  document.getElementById('ammo-5').innerText = texts.ammo5;
  document.getElementById('ammo-10').innerText = texts.ammo10;
