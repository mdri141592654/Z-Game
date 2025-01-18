// Funktion zum Wechseln zwischen Menüs
function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden');
    }

    // Wenn das "Jetzt schlafen" Button gedrückt wird, Menü 141 anzeigen und Ladebalken starten
    if (menuId === 'menu-141') {
        const loadingBar = document.getElementById('sleeping-bar');
        loadingBar.style.width = '100%';
    }
}

// Menü 141 nach dem Schlafen wieder verbergen und Menü 1 wieder anzeigen
document.querySelector("#menu-141 .menu-button").addEventListener("transitionend", () => {
    document.getElementById("menu-141").classList.add("hidden");
    openMenu("menu-1");
});
