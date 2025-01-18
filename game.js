let days = 0;
let health = 100;
let energy = 100;
let food = 10;
let medicine = 5;
let ammo = 20;
let materials = 15;

const dayCounter = document.getElementById("dayCounter");
const healthBar = document.querySelector(".health-bar");
const energyBar = document.querySelector(".energy-bar");
const foodElement = document.getElementById("food");
const medicineElement = document.getElementById("medicine");
const ammoElement = document.getElementById("ammo");
const materialsElement = document.getElementById("materials");

function updateUI() {
    dayCounter.textContent = days;
    healthBar.style.width = `${health}%`;
    energyBar.style.width = `${energy}%`;
    foodElement.textContent = `Nahrung: ${food}`;
    medicineElement.textContent = `Medizin: ${medicine}`;
    ammoElement.textContent = `Munition: ${ammo}`;
    materialsElement.textContent = `Baumaterial: ${materials}`;
}

function increaseDays() {
    days++;
    updateUI();
}

function performAction(action) {
    increaseDays();

    if (action === "action1") {
        // Beispiel Aktion: Nahrung verwenden
        if (food > 0) {
            food--;
            health = Math.min(100, health + 10); // Gesundheit erhöhen
        }
    } else if (action === "action2") {
        // Beispiel Aktion: Munition benutzen
        if (ammo > 0) {
            ammo--;
            energy = Math.max(0, energy - 10); // Energie verringern
        }
    } else if (action === "action3") {
        // Beispiel Aktion: Baumaterial sammeln
        materials++;
        energy = Math.max(0, energy - 5); // Energie verringern
    } else if (action === "action4") {
        // Beispiel Aktion: Medizin verwenden
        if (medicine > 0) {
            medicine--;
            health = Math.min(100, health + 20); // Gesundheit erhöhen
        }
    }

    updateUI();
}

// Button Events
document.getElementById("action1").addEventListener("click", () => performAction("action1"));
document.getElementById("action2").addEventListener("click", () => performAction("action2"));
document.getElementById("action3").addEventListener("click", () => performAction("action3"));
document.getElementById("action4").addEventListener("click", () => performAction("action4"));
