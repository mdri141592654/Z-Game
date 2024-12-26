document.getElementById('language').addEventListener('change', (e) => {
  const lang = e.target.value;

  if (lang === 'de') {
    document.getElementById('scavenge').textContent = 'Plündern';
    document.getElementById('targeted-scavenge').textContent = 'Gezieltes Plündern';
    document.getElementById('use-materials').textContent = 'Materialien verwenden';
    document.getElementById('sleep').textContent = 'Schlafen';
    document.getElementById('day-counter').innerHTML = '08:00 am<br>Tag: 00';
  } else if (lang === 'en') {
    document.getElementById('scavenge').textContent = 'Scavenge';
    document.getElementById('targeted-scavenge').textContent = 'Targeted Scavenge';
    document.getElementById('use-materials').textContent = 'Use Materials';
    document.getElementById('sleep').textContent = 'Sleep';
    document.getElementById('day-counter').innerHTML = '08:00 am<br>Day: 00';
  }
});
