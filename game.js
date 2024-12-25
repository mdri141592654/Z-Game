// Variablen für die Ressourcen
let nahrung = 0;
let medizin = 0;
let materialien = 0;
let munition = 0;

// Funktion zum Aktualisieren der Ressourcenanzeige
function updateResources() {
    document.getElementById('nahrung').textContent = 'Nahrung: ' + nahrung;
    document.getElementById('medizin').textContent = 'Medizin: ' + medizin;
    document.getElementById('materialien').textContent = 'Materialien: ' + materialien;
    document.getElementById('munition').textContent = 'Munition: ' + munition;
}

// Beispiel für eine Funktion, die beim Plündern Ressourcen ändert
function plundern() {
    nahrung += Math.floor(Math.random() * 10);
    medizin += Math.floor(Math.random() * 5);
    materialien += Math.floor(Math.random() * 8);
    munition += Math.floor(Math.random() * 3);

    updateResources();
}

// Starten des Spiels mit einer Plünderung
plundern();
