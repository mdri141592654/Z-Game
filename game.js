document.addEventListener("DOMContentLoaded", () => {
  const resources = document.getElementById("resources");
  const dayCounter = document.getElementById("day-counter");
  const healthBar = document.getElementById("health-bar");
  const energyBar = document.getElementById("energy-bar");
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu111 = document.getElementById("menu-1.1.1");
  const menu112 = document.getElementById("menu-1.1.2");
  const menu113 = document.getElementById("menu-1.1.3");
  const backButton = document.getElementById("back");

  // Menünavigation
  menu1.addEventListener("click", (e) => {
    if (e.target.id === "scavenge") {
      menu1.style.display = "none";
      menu11.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.1 bei Klick auf "Leicht"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "easy") {
      menu11.style.display = "none";
      menu111.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.2 bei Klick auf "Medium"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "medium") {
      menu11.style.display = "none";
      menu112.style.display = "grid";
    }
  });

  // Wechsel zu Menü 1.1.3 bei Klick auf "Schwer"
  menu11.addEventListener("click", (e) => {
    if (e.target.id === "hard") {
      menu11.style.display = "none";
      menu113.style.display = "grid";
    }
  });

  // Zurück-Buttons für Untermenüs
  const backButtons = [menu111, menu112, menu113];
  backButtons.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      if (e.target.id === "back") {
        menu.style.display = "none";
        menu11.style.display = "grid";
      }
    });
  });

  // Zurück-Button in Menü 1.1
  backButton.addEventListener("click", () => {
    menu11.style.display = "none";
    menu1.style.display = "grid";
  });
});
