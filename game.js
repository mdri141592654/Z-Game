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
      'dayText': 'Tag',
      'timeText': '08:00 am'
    },
    'en': {
      'pluender': 'Loot',
      'gepluender': 'Targeted Loot',
      'materialVerwenden': 'Use Materials',
      'schlafen': 'Sleep',
      'dayText': 'Day',
      'timeText': '08:00 am'
    }
  };

  const texts = languageTexts[language];
  document.getElementById('pluender').innerText = texts.pluender;
  document.getElementById('gepluender').innerText = texts.gepluender;
  document.getElementById('materialVerwenden').innerText = texts.materialVerwenden;
  document.getElementById('schlafen').innerText = texts.schlafen;
  document.getElementById('day').innerText = `${texts.dayText}: xx`;
  document.getElementById('time').innerText = `${texts.timeText}`;
}

// Klick-Event für die Felder, um sie zu animieren
const fields = document.querySelectorAll('.field');
fields.forEach(field => {
  field.addEventListener('click', () => {
    document.querySelector('.center-fields').classList.add('clicked');
  });
});
