const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const resultBox = document.getElementById('result');
const nameField = document.getElementById('nameField');
const idField = document.getElementById('idField');

let debounceTimer;

searchInput.addEventListener('input', function () {
  const query = searchInput.value.trim();

  clearTimeout(debounceTimer);
  if (query.length < 2) {
    suggestions.innerHTML = '';
    return;
  }

  debounceTimer = setTimeout(() => {
    fetch(`https://v6.vbb.transport.rest/locations?query=${encodeURIComponent(query)}&results=10`)
      .then(res => res.json())
      .then(data => {
        suggestions.innerHTML = '';
        data.forEach(stop => {
          if (stop.type === 'station' || stop.type === 'stop') {
            const li = document.createElement('li');
            li.textContent = `${stop.name} (${stop.id})`;
            li.addEventListener('click', () => {
              showResult(stop);
              suggestions.innerHTML = '';
              searchInput.value = stop.name;
            });
            suggestions.appendChild(li);
          }
        });
      })
      .catch(console.error);
  }, 300);
});

function showResult(stop) {
  nameField.textContent = stop.name;
  idField.textContent = stop.id;
  resultBox.style.display = 'block';
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Erfolgreich in die Zwischenablage kopiert: ' + text);
  }).catch(err => {
    console.error('Kopieren fehlgeschlagen:', err);
  });
}