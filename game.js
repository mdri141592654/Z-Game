const mainMenu = document.getElementById("main-menu");
const plunderMenu = document.getElementById("plunder-menu");

function showMenu(menuToShow) {
  document.querySelectorAll(".submenu, #main-menu").forEach(menu => {
    menu.classList.remove("active");
  });
  menuToShow.classList.add("active");
}

// Hauptmenü anzeigen
showMenu(mainMenu);

// Plündern-Button
document.getElementById("btn-plunder").addEventListener("click", () => {
  showMenu(plunderMenu);
});

// Zurück-Button
document.getElementById("btn-back").addEventListener("click", () => {
  showMenu(mainMenu);
});
