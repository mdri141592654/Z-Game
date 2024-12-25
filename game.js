let resources = {
    materials: 0,
    medicine: 0,
    food: 0,
    ammo: 0,
    health: 100,
    energy: 100,
};

// Update resource display
function updateDisplay() {
    document.getElementById('materials').textContent = resources.materials;
    document.getElementById('medicine').textContent = resources.medicine;
    document.getElementById('food').textContent = resources.food;
    document.getElementById('ammo').textContent = resources.ammo;
    document.getElementById('health-value').textContent = resources.health;
    document.getElementById('energy-value').textContent = resources.energy;
}

// Plündern
document.getElementById('scavenge-btn').addEventListener('click', () => {
    if (resources.energy > 10) {
        resources.materials += Math.floor(Math.random() * 5) + 1;
        resources.food += Math.floor(Math.random() * 3) + 1;
        resources.energy -= 10;
        updateDisplay();
    } else {
        alert("Nicht genug Energie zum Plündern!");
    }
});

// Gezieltes Plündern
document.getElementById('targeted-scavenge-btn').addEventListener('click', () => {
    if (resources.energy > 15) {
        resources.ammo += Math.floor(Math.random() * 4) + 2;
        resources.energy -= 15;
        updateDisplay();
    } else {
        alert("Nicht genug Energie für gezieltes Plündern!");
    }
});

// Ressourcen verwenden
document.getElementById('use-resources-btn').addEventListener('click', () => {
    if (resources.materials >= 2) {
        resources.materials -= 2;
        resources.health += 10;
        if (resources.health > 100) resources.health = 100;
        updateDisplay();
    } else {
        alert("Nicht genug Materialien zum Verwenden!");
    }
});

// Schlafen
document.getElementById('sleep-btn').addEventListener('click', () => {
    resources.energy += 20;
    resources.health += 10;
    if (resources.energy > 100) resources.energy = 100;
    if (resources.health > 100) resources.health = 100;
    updateDisplay();
});

// Initial display
updateDisplay();
