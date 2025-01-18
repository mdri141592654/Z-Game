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
