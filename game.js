// Funktion zum Wechseln zwischen Menüs
function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden');
    }

    // Wenn das "Jetzt schlafen" Button gedrückt wird, Menü 141 anzeigen
    if (menuId === 'menu-141') {
        const sleepButton = document.querySelector('#menu-14 .menu-button');
        sleepButton.disabled = true; // Button wird deaktiviert, wenn der Schlafvorgang läuft
        const loadingBar = document.querySelector('#menu-141 .menu-button');
        loadingBar.style.background = 'linear-gradient(to right, green 0%, transparent 0%)';
        setTimeout(() => {
            loadingBar.style.background = 'linear-gradient(to right, green 100%, transparent 0%)';
        }, 100);
    }
}

// Menü 141 nach dem Schlafen wieder verbergen
document.querySelector("#menu-141 .menu-button").addEventListener("transitionend", () => {
    document.getElementById("menu-141").classList.add("hidden");
    openMenu("menu-1");
});
