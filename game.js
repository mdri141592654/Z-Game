const menuButtons = document.querySelectorAll("#menu button");

// Hauptmenü aktivieren
function showMenu(menuId) {
  document.querySelectorAll(".submenu, #menu").forEach(menu => {
    menu.classList.remove("active");
  });
  document.getElementById(menuId).classList.add("active");
}

// Event-Listener
menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Beispiel-Logik, um das nächste Menü zu aktivieren
    if (button.id === "btn-plunder") {
      alert("Nächstes Menü erscheint hier!");
    }
  });
});
