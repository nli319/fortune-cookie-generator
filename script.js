async function loadCSV() {
  // fetch the csv file
  const res = await fetch('data.csv');
  const text = await res.text();

  // split by newline to get rows
  // filter(Boolean) removes empty lines
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);

  // if you only have 1 column per row, you can just return lines
  return lines;
}

async function pickRandomRow() {
  const rows = await loadCSV();

  // pick random index
  const randomIndex = Math.floor(Math.random() * rows.length);
  const randomRow = rows[randomIndex];

  // show it
  document.getElementById('fortuneMessage').innerText = randomRow;
}

document.getElementById('openCookie').addEventListener('click', pickRandomRow);