// Funktion zum Wechseln zwischen Menüs
function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden');
    }

    // Ladebalken im Menü 141 starten
    if (menuId === 'menu-141') {
        const loadingBar = document.getElementById('sleeping-bar');
        loadingBar.style.width = '0%'; // Setze Balken zurück
        setTimeout(() => {
            loadingBar.style.width = '100%'; // Starte Animation
        }, 100);

        // Nach 3 Sekunden zum Hauptmenü zurückkehren
        setTimeout(() => {
            openMenu('menu-1');
        }, 3000);
    }
}
