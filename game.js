// Funktion zum Wechseln zwischen Menüs
function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden');
    }
}

// Beim Start nur Menü 1 anzeigen
document.addEventListener('DOMContentLoaded', () => {
    openMenu('menu-1');
});

// Funktion zum Schlafen
function sleep() {
    openMenu('menu-141'); // Menü 141 öffnen
    let sleepBar = document.getElementById('sleep-bar');
    let sleepText = sleepBar.querySelector('span');
    
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                openMenu('menu-1'); // Zurück zu Menü 1
                increaseDayCounter(); // Zähler erhöhen
            }, 500);
        } else {
            width++;
            sleepBar.style.width = width + '%';
            sleepText.innerText = 'Schlafen... ' + width + '%';
        }
    }, 30); // Ladebalken dauert 3 Sekunden (100% / 30ms)
}

// Funktion zum Erhöhen des Tageszählers
function increaseDayCounter() {
    let dayCount = document.getElementById('days');
    dayCount.innerText = parseInt(dayCount.innerText) + 1;
}

// Eventlistener für den „Jetzt schlafen“-Button im Menü 14
document.querySelector('#menu-14 .menu-button:last-child').addEventListener('click', sleep);
