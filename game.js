let days = 0;

// Funktion für den Zähler
function updateDays() {
    days++;
    document.getElementById('days').innerText = days;
}

// Beispiel für automatisches Hochzählen
setInterval(updateDays, 1000);
