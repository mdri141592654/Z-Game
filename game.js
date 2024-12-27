// Sicherstellen, dass alle bisherigen Elemente beibehalten werden

// Menü 1 - Startmenü
const menu1 = document.createElement('div');
menu1.id = 'menu1';
menu1.style.display = 'flex';
menu1.style.flexWrap = 'wrap';
menu1.style.width = '500px';
menu1.style.height = '200px';

// Flächen für Menü 1
const area1 = document.createElement('div');
area1.style.width = '45%';
area1.style.height = '45%';
area1.style.margin = '2%';
area1.innerText = 'Plündern';
area1.onclick = () => showMenu('menu1.1');
menu1.appendChild(area1);

const area2 = document.createElement('div');
area2.style.width = '45%';
area2.style.height = '45%';
area2.style.margin = '2%';
area2.innerText = 'Gezieltes Plündern';
area2.onclick = () => showMenu('menu1.2');
menu1.appendChild(area2);

// Menü 1.1 - Untermenü für Plündern
const menu1_1 = document.createElement('div');
menu1_1.id = 'menu1.1';
menu1_1.style.display = 'none';  // Standardmäßig versteckt
menu1_1.style.flexWrap = 'wrap';
menu1_1.style.width = '500px';
menu1_1.style.height = '200px';

// Flächen für Menü 1.1
for (let i = 0; i < 6; i++) {
    const area = document.createElement('div');
    area.style.width = '30%';
    area.style.height = '30%';
    area.style.margin = '2%';
    area.innerText = `Option ${i + 1}`;
    menu1_1.appendChild(area);
}

// Menü 1.2 - Untermenü für Gezieltes Plündern
const menu1_2 = document.createElement('div');
menu1_2.id = 'menu1.2';
menu1_2.style.display = 'none';  // Standardmäßig versteckt
menu1_2.style.flexWrap = 'wrap';
menu1_2.style.width = '500px';
menu1_2.style.height = '200px';

// Flächen für Menü 1.2 (gleich wie Menü 1.1)
for (let i = 0; i < 6; i++) {
    const area = document.createElement('div');
    area.style.width = '30%';
    area.style.height = '30%';
    area.style.margin = '2%';
    area.innerText = `Gezielte Option ${i + 1}`;
    menu1_2.appendChild(area);
}

// Funktion, um ein Menü anzuzeigen
function showMenu(menuId) {
    document.querySelectorAll('div[id^="menu"]').forEach(menu => {
        menu.style.display = 'none';
    });
    document.getElementById(menuId).style.display = 'flex';
}

// Startmenü zum Body hinzufügen
document.body.appendChild(menu1);

// Menü 1.1 und Menü 1.2 ebenfalls zum Body hinzufügen, aber standardmäßig versteckt
document.body.appendChild(menu1_1);
document.body.appendChild(menu1_2);
