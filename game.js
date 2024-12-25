// Elemente auswählen
const menu = document.getElementById("menu");
const submenuPlunder = document.getElementById("submenu-plunder");
const btnPlunder = document.getElementById("btn-plunder");
const btnBack = document.getElementById("btn-back");

// Funktion: Menü anzeigen/verstecken
function showMenu(menuToShow, menuToHide) {
  menuToShow.classList.remove("hidden");
  menuToHide.classList.add("hidden");
}

// Event-Listener: Hauptmenü -> Submenü
btnPlunder.addEventListener("click", () => {
  showMenu(submenuPlunder, menu);
});

// Event-Listener: Submenü -> Hauptmenü
btnBack.addEventListener("click", () => {
  showMenu(menu, submenuPlunder);
});
