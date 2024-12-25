let spieler = {
    energie: 100,
    gesundheit: 100,
    schuesse: 14,
    waffe: false,
    risiko: 100
};

function aktionen(aktion) {
    if (aktion === 'pluendern') {
        weiterwahl('Schwierigkeitsgrad wählen: Leicht, Mittel, Schwer');
    } else if (aktion === 'gepluendern') {
        weiterwahl('Gezielte Plünderung: Medikamente, Munition');
    } else if (aktion === 'ressourcen') {
        weiterwahl('Ressourcen verwenden: Essen, Base verstärken');
    } else if (aktion === 'schlafen') {
        schlafen();
    }
}

function weiterwahl(message) {
    let weiterwahlDiv = document.getElementById("weiterwahl");
    weiterwahlDiv.innerHTML = `<p>${message}</p>
        <button onclick="waffeAusruesten(0)">Zurück</button>
        <button onclick="waffeAusruesten(5)">5 Schüsse</button>
        <button onclick="waffeAusruesten(10)">10 Schüsse</button>
        <button onclick="waffeAusruesten(15)">15 Schüsse</button>
        <button onclick="waffeAusruesten(20)">20 Schüsse</button>`;
    weiterwahlDiv.classList.remove('hidden');
}

function waffeAusruesten(anzahlSchuesse) {
    if (anzahlSchuesse <= spieler.schuesse) {
        spieler.waffe = true;
        spieler.schuesse -= anzahlSchuesse;
        updateStatus();
    } else {
        alert("Nicht genug Schüsse im Inventar!");
    }
}

function schlafen() {
    spieler.energie += 10;  // Beispiel: Energie regeneriert sich um 10
    if (spieler.energie > 100) spieler.energie = 100;  // Maximalwert
    updateStatus();
}

function updateStatus() {
    document.getElementById("energie").textContent = "Energie: " + spieler.energie;
    document.getElementById("gesundheit").textContent = "Gesundheit: " + spieler.gesundheit + "%";
    document.getElementById("schuesse").textContent = "Schüsse: " + spieler.schuesse;
}
