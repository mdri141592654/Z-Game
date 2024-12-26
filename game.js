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
      'timeText': '08:00 am',
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
      'timeText': '08:00 am',
      'material': 'Material',
      'medicine': 'Medicine',
      'ammo': 'Ammunition',
      'wood': 'Wood'
    }
  };

  const texts = languageTexts[language];
  document.getElementById('pluender').innerText = texts.pluender;
  document.getElementById('gepluender').innerText = texts.gepluender;
  document.getElementById('materialVerwenden').innerText = texts.materialVerwenden;
  document.getElementById('schlafen').innerText = texts.schlafen;
  document.getElementById('day').innerText = `${texts.dayText}: xx`;
  document.getElementById('time').innerText = `${texts.timeText}`;
  document.getElementById('material').innerText = `${texts.material}: xx`;
  document.getElementById('medicine').innerText = `${texts.medicine}: xx`;
  document.getElementById('ammo').innerText = `${texts.ammo}: xx`;
  document.getElementById('wood').innerText = `${texts.wood}: xx`;
}
