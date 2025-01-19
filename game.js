function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden')); // Alle Menüs ausblenden

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden'); // Das gewünschte Menü anzeigen
    }

    // Ladebalken im Menü 141 starten
    if (menuId === 'menu-141') {
        const loadingBar = document.getElementById('sleeping-bar');
        loadingBar.style.width = '0%'; // Ladebalken zurücksetzen
        setTimeout(() => {
            loadingBar.style.width = '100%'; // Starte die Animation
        }, 100);

        // Hintergrundbild auf IMG_9645.jpeg ändern
        document.body.style.backgroundImage = "url('IMG_9645.jpeg')";

        // Nach 3 Sekunden zum Hauptmenü zurückkehren und Tageszähler erhöhen
        setTimeout(() => {
            increaseDayCounter(); // Tageszähler erhöhen
            loadingBar.style.width = '0%'; // Ladebalken zurücksetzen für das nächste Mal
            openMenu('menu-1');
        }, 3000);
    }

    // Wenn auf Menü 1 gewechselt wird, Hintergrundbild auf Tag.jpg setzen
    if (menuId === 'menu-1') {
        document.body.style.backgroundImage = "url('Tag.jpg')";
    }
}

// Funktion zum Erhöhen des Tageszählers
function increaseDayCounter() {
    const dayCounter = document.getElementById('days');
    let currentDay = parseInt(dayCounter.textContent, 10); // Aktuellen Wert auslesen
    dayCounter.textContent = currentDay + 1; // Tageszähler um 1 erhöhen
}
