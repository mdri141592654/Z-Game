let currentMenu = 1;
let dayCount = 1;
let sleepProgress = 0;
let energy = 100;
let health = 100;
let inventoryItems = 0;

const energyBar = document.getElementById('energy-bar');
const healthBar = document.getElementById('health-bar');
const dayCounter = document.getElementById('day-counter');
const inventory = document.getElementById('inventory');
const sleepBar = document.getElementById('sleep-bar');
const sleepProgressSpan = document.getElementById('sleep-progress');

// Funktion um zum nächsten Menü zu springen
function goToMenu(menuNumber) {
    document.getElementById(`menu-${currentMenu}`).classList.add("hidden");
    currentMenu = menuNumber;
    document.getElementById(`menu-${currentMenu}`).classList.remove("hidden");

    // Schlafen Logik in Menü 141
    if (menuNumber === 141) {
        startSleepProgress();
    }
}

// Zurück-Funktion
function goBack() {
    document.getElementById(`menu-${currentMenu}`).classList.add("hidden");
    currentMenu = 1;
    document.getElementById(`menu-${currentMenu}`).classList.remove("hidden");
}

// Funktion für den Schlafbalken in Menü 141
function startSleepProgress() {
    sleepProgress = 0;
    let progressInterval = setInterval(function() {
        sleepProgress += 1;
        sleepBar.style.width = sleepProgress + "%";
        sleepProgressSpan.textContent = "Schlafen… " + sleepProgress + "%";

        if (sleepProgress >= 100) {
            clearInterval(progressInterval);
            goBack(); // Zurück zu Menü 1 nach 3 Sekunden
            dayCount++; // Tag erhöhen
            updateDayCounter();
            regenerateStatusBars();
        }
    }, 30); // 3 Sekunden für den Balken
}

// Funktion um die Tagesanzeige zu aktualisieren
function updateDayCounter() {
    dayCounter.innerHTML = `<h2>Tag: ${dayCount}</h2>`;
}

// Funktion um Energie und Gesundheit nach dem Schlaf zu regenerieren
function regenerateStatusBars() {
    energy = Math.min(100, energy + 20);  // Maximale Energie ist 100
    health = Math.min(100, health + 15);  // Maximale Gesundheit ist 100
    updateStatusBars();
}

// Funktion um die Balken anzuzeigen
function updateStatusBars() {
    energyBar.style.width = energy + '%';
    healthBar.style.width = health + '%';
    document.querySelector('#energy-bar span').textContent = 'Energie: ' + energy + '%';
    document.querySelector('#health-bar span').textContent = 'Gesundheit: ' + health + '%';
}

// Inventar hinzufügen
function addItemToInventory() {
    inventoryItems++;
    inventory.innerHTML = `<h2>Inventar</h2><p>Items: ${inventoryItems}</p>`;
}

// Start Menü anzeigen
goToMenu(1);
updateStatusBars();
