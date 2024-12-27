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
      'noWeapon': 'Ohne Waffe losziehen',
      '5Shots': '5 Schuss mitnehmen',
      '10Shots': '10 Schuss mitnehmen',
      '15Shots': '15 Schuss mitnehmen',
      '20Shots': '20 Schuss mitnehmen'
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
      'noWeapon': 'Go Without Weapon',
      '5Shots': 'Take 5 Shots',
      '10Shots': 'Take 10 Shots',
      '15Shots': 'Take 15 Shots',
      '20Shots': 'Take 20 Shots'
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
  document.getElementById('no-weapon').innerText = texts.noWeapon;
  document.getElementById('5-shots').innerText = texts['5Shots'];
  document.getElementById('10-shots').innerText = texts['10Shots'];
  document.getElementById('15-shots').innerText = texts['15Shots'];
  document.getElementById('20-shots').innerText = texts['20Shots'];
}

// Funktion zum Anzeigen eines Menüs
function showMenu(menuId) {
  const menus = document.querySelectorAll('.menu');
  menus.forEach(menu => menu.style.display = 'none');
  document.getElementById(menuId).style.display = 'grid';
}

// Event Listener für das erste Menü
document.getElementById('scavenge').addEventListener('click', () => {
  showMenu('menu-1.1');
});

// Event Listener für das Zurück-Feld im zweiten Menü
document.getElementById('back').addEventListener('click', () => {
  showMenu('menu-1');
});

// Event Listener für das "Leicht" Feld im Menü 1.1
document.getElementById('easy').addEventListener('click', () => {
  showMenu('menu-1.1.1');
});

// Event Listener für das Zurück-Feld im dritten Menü
document.getElementById('back-1.1').addEventListener('click', () => {
  showMenu('menu-1.1');
});
