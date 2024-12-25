// Hier kommt die JavaScript-Logik für das Spiel
document.addEventListener("DOMContentLoaded", function () {
  // Spielinitiation und grundlegende Spielmechanik
  let health = 100;
  let energy = 100;

  function updateHealthEnergy() {
    document.getElementById("health").textContent = `Gesundheit: ${health}`;
    document.getElementById("energy").textContent = `Energie: ${energy}`;
  }

  // Initiale Anzeige
  updateHealthEnergy();
});
