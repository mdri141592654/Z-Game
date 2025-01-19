function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden')); // Alle Menüs ausblenden

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden'); // Das gewünschte Menü anzeigen
    }

    // Ladebalken im Menü 141 starten
        // Überblenden nur bei Zurückgehen aus Menü 141
    if (menuId === 'menu-141') {
        const loadingBar = document.getElementById('sleeping-bar');
        loadingBar.style.width = '0%'; // Ladebalken zurücksetzen
        setTimeout(() => {
            loadingBar.style.width = '100%'; // Starte die Animation
        }, 100);

        // Zuerst das Bild ausblenden
        background.classList.add('fade-out');

        // Nach 1 Sekunde (Übergangszeit), das Bild ändern und zurückblenden
        setTimeout(() => {
            background.style.backgroundImage = "url('IMG_9645.jpeg')";
            background.classList.remove('fade-out'); // Bild wieder einblenden
        }, 1000); // 1000ms warten, um den Übergang zu beenden

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
}

// Funktion zum Erhöhen des Tageszählers
function increaseDayCounter() {
    const dayCounter = document.getElementById('days');
    let currentDay = parseInt(dayCounter.textContent, 10); // Aktuellen Wert auslesen
    dayCounter.textContent = currentDay + 1; // Tageszähler um 1 erhöhen
}
