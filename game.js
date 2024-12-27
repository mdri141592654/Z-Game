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
      'material': 'Material',
      'medicine': 'Medizin',
      'ammo': 'Munition',
      'wood': 'Baumaterial'
    },
    'en': {
      'pluender': 'Loot',
      'gepluender': 'Targeted Loot',
      'materialVerwenden': 'Use Materials',
      'schlafen': 'Sleep',
      'dayText': 'Day',
      'material': 'Material',
      'medicine': 'Medicine',
      'ammo': 'Ammunition',
      'wood': 'Wood'
    }
  };

  const texts = languageTexts[language];
  document.getElementById('scavenge').innerText = texts.pluender;
  document.getElementById('targeted-scavenge').innerText = texts.gepluender;
  document.getElementById('use-materials').innerText = texts.materialVerwenden;
  document.getElementById('sleep').innerText = texts.schlafen;
  document.getElementById('day-counter').innerText = `${texts.dayText}: 00`;
}

// Funktion zum Verstecken der mittleren Felder
const centerFields = document.querySelectorAll('.center-fields .field');
centerFields.forEach(field => {
  field.addEventListener('click', () => {
    document.querySelector('.center-fields').style.display = 'none';
  });
});
