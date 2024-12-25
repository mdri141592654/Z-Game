// Hier kommt die JavaScript-Logik für das Spiel
document.addEventListener("DOMContentLoaded", function () {
  let health = 100;
  let energy = 100;

  function updateHealthEnergy() {
    document.getElementById("health-bar").textContent = `Gesundheit: ${health}/100`;
    document.getElementById("energy-bar").textContent = `Energie: ${energy}/100`;
  }

  // Initiale Anzeige
  updateHealthEnergy();
});
