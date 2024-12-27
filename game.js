// Language settings
const translations = {
  en: {
    "menu-1": "Main Menu",
    "menu-1.1": "Scavenge",
    "menu-1.1.1": "Go to Area 1",
    "menu-1.1.2": "Go to Area 2",
    "menu-1.1.3": "Go to Area 3",
    "menu-2": "Inventory",
    "menu-3": "Settings",
    "back": "Back"
  },
  de: {
    "menu-1": "Hauptmenü",
    "menu-1.1": "Plündern",
    "menu-1.1.1": "Gehe zu Gebiet 1",
    "menu-1.1.2": "Gehe zu Gebiet 2",
    "menu-1.1.3": "Gehe zu Gebiet 3",
    "menu-2": "Inventar",
    "menu-3": "Einstellungen",
    "back": "Zurück"
  }
};

const languageSelector = document.getElementById('language');
const gameMenus = document.querySelectorAll('.menu');

let currentLanguage = 'en';  // Default language

// Update language based on selection
languageSelector.addEventListener('change', (event) => {
  currentLanguage = event.target.value;
  updateMenuText();
});

// Update the text for all menus based on selected language
function updateMenuText() {
  gameMenus.forEach(menu => {
    const menuId = menu.id;
    if (translations[currentLanguage][menuId]) {
      menu.innerText = translations[currentLanguage][menuId];
    }
    const buttons = menu.querySelectorAll('button');
    buttons.forEach(button => {
      const buttonId = button.id;
      if (translations[currentLanguage][buttonId]) {
        button.innerText = translations[currentLanguage][buttonId];
      }
    });
  });
}

// Navigate function for all "back" buttons
function addBackButtonListener(menuId) {
  const backButton = document.getElementById(`back-${menuId}`);
  if (backButton) {
    backButton.addEventListener('click', () => {
      // Logic to go back to the previous menu
      const currentMenu = document.getElementById(menuId);
      const parentMenu = currentMenu.closest('.menu-group');
      if (parentMenu) {
        currentMenu.style.display = 'none';
        parentMenu.style.display = 'block';
      }
    });
  }
}

// Initialize back button listeners for all menus
document.querySelectorAll('.menu').forEach(menu => {
  const menuId = menu.id;
  addBackButtonListener(menuId);
});

// Example of how to show a menu (to be expanded for more dynamic use)
function showMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu) {
    menu.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initially, show the main menu
  showMenu('menu-1');
  updateMenuText(); // Apply translations when the page loads
});
