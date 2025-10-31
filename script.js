async function loadCSV() {
  const res = await fetch('data.csv');
  const text = await res.text();

  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  return lines;
}

async function pickRandomRow() {
  const rows = await loadCSV();

  const randomIndex = Math.floor(Math.random() * rows.length);
  const randomRow = rows[randomIndex];

  document.getElementById('fortuneMessage').innerText = randomRow;
}

document.getElementById('openCookie').addEventListener('click', pickRandomRow);