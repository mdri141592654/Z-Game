function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden')); // Alle Menüs ausblenden

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden'); // Das gewünschte Menü anzeigen
    }

    const background = document.getElementById('background');

    // Überblenden nur bei Zurückgehen aus Menü 141
    if (menuId === 'menu-141') {
        const loadingBar = document.getElementById('sleeping-bar');
        loadingBar.style.width = '0%'; // Ladebalken zurücksetzen
        setTimeout(() => {
            loadingBar.style.width = '100%'; // Starte die Animation
        }, 100);

        // Zuerst das Bild ausblenden
        background.classList.add('fade-out');

        // Nach x Sekunde (Übergangszeit), das Bild ändern und zurückblenden
        setTimeout(() => {
            background.style.backgroundImage = "url('IMG_9645.jpeg')";
            background.classList.remove('fade-out'); // Bild wieder einblenden
        }, 500); // xms warten, um den Übergang zu beenden

    // Grundwert für die Balken festlegen
    const baseBar = document.getElementById('base-bar');
    const healthBar = document.getElementById('health-bar');
    const hungerBar = document.getElementById('hunger-bar');
    const energyBar = document.getElementById('energy-bar');

    // Setze anfängliche Werte (Beispielwerte, du kannst sie nach Bedarf anpassen)
    baseBar.style.width = '100%'; // Der Basistwert (100%)
    healthBar.style.width = '100%'; // Der Gesundheitswert (100%)
    hungerBar.style.width = '75%'; // Der Hungerwert (75%)
    energyBar.style.width = '80%'; // Der Energielevel (80%)
});
        
        // Nach 3 Sekunden zum Hauptmenü zurückkehren und Tageszähler erhöhen
        setTimeout(() => {
            increaseDayCounter(); // Tageszähler erhöhen
            loadingBar.style.width = '0%'; // Ladebalken zurücksetzen für das nächste Mal
            openMenu('menu-1');
        }, 3000);
    } else if (menuId === 'menu-1') {
        // Für alle anderen Menü-Wechsel (außer Menü 141), Hintergrund ohne Überblenden wechseln
        background.style.backgroundImage = "url('Tag.jpg')";
    }

    // Munition aus dem Inventar auslesen
    const inventory = document.getElementById('inventory');
    const munitionParagraph = Array.from(inventory.querySelectorAll('p')).find(p => p.textContent.startsWith('Munition'));

    if (munitionParagraph) {
        const munition = parseInt(munitionParagraph.textContent.split(': ')[1], 10);

        // Menü 111, 112 und 113: Überprüfen, ob genug Munition vorhanden ist und Buttons entsprechend anpassen
        const munitionButtons = document.querySelectorAll('#menu-111 .menu-button, #menu-112 .menu-button, #menu-113 .menu-button');

        munitionButtons.forEach(button => {
            if (button.textContent.includes('10 Schuss') || button.textContent.includes('20 Schuss')) {
                const schussanzahl = parseInt(button.textContent.split(' ')[0]);

                // Wenn nicht genug Munition vorhanden ist, Button durchstreichen und deaktivieren
                if (munition < schussanzahl) {
                    button.style.textDecoration = 'line-through';
                    button.disabled = true;
                    button.style.cursor = 'not-allowed'; // Optional: Cursor ändern, um Unklickbarkeit anzuzeigen
                } else {
                    button.style.textDecoration = 'none';
                    button.disabled = false;
                    button.style.cursor = 'pointer';
                }
            }
        });
    }
}

// Funktion zum Erhöhen des Tageszählers
function increaseDayCounter() {
    const dayCounter = document.getElementById('days');
    let currentDay = parseInt(dayCounter.textContent, 10); // Aktuellen Wert auslesen
    dayCounter.textContent = currentDay + 1; // Tageszähler um 1 erhöhen
}

// Grundstock für Inventar beim Spielstart setzen
document.addEventListener('DOMContentLoaded', () => {
    const inventoryItems = {
        Nahrung: 21,
        Medizin: 9,
        Munition: 9,
        Baumaterial: 8
    };

    const inventory = document.getElementById('inventory');
    const inventoryParagraphs = inventory.querySelectorAll('p');

    inventoryParagraphs.forEach(paragraph => {
        const itemName = paragraph.textContent.split(': ')[0];
        if (inventoryItems[itemName] !== undefined) {
            paragraph.textContent = `${itemName}: ${inventoryItems[itemName]}`;
        }
    });
});

// Funktion zum Anpassen des Inventars
function updateInventory(item, amount) {
    const inventory = document.getElementById('inventory');
    const paragraph = Array.from(inventory.querySelectorAll('p')).find(p => p.textContent.startsWith(item));

    if (paragraph) {
        const currentAmount = parseInt(paragraph.textContent.split(': ')[1], 10);
        const newAmount = currentAmount + amount;
        paragraph.textContent = `${item}: ${Math.max(newAmount, 0)}`; // Keine negativen Werte zulassen
    }
}

// Funktion für Verbrauchsaktionen
function consumeMunition(amount) {
    const inventory = document.getElementById('inventory');
    const paragraph = Array.from(inventory.querySelectorAll('p')).find(p => p.textContent.startsWith('Munition'));

    if (paragraph) {
        const currentAmount = parseInt(paragraph.textContent.split(': ')[1], 10);

        if (currentAmount >= amount) {
            updateInventory('Munition', -amount); // Munition verringern
            return true; // Aktion erfolgreich
        } else {
            return false; // Nicht genug Munition
        }
    }
}
