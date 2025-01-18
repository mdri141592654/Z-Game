// Funktion zum Wechseln zwischen Menüs
function openMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));

    const activeMenu = document.getElementById(menuId);
    if (activeMenu) {
        activeMenu.classList.remove('hidden');
    }

    // Wenn das "Jetzt schlafen" Button gedrückt wird, Menü 141 anzeigen
    if (menuId === '
