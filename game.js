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
      'extrem': 'Extrem',
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
      'extrem': 'Extreme',
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
  document.getElementById('extreme').innerText = texts.extrem;
}

// Event-Listener für das Menü 1
document.getElementById('scavenge').addEventListener('click
