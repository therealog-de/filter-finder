
async function search() {
  const input = document.getElementById('searchInput').value.trim().toUpperCase();
  const results = document.getElementById('results');
  results.innerHTML = '<p>Loading...</p>';

  const res = await fetch('products.json');
  const data = await res.json();

  const match = data.find(p =>
    (p.Brand + ' ' + p['Product Number']).toUpperCase() === input
  );

  if (!match) {
    results.innerHTML = '<p>No exact match found. Try another model.</p>';
    return;
  }

  let html = '<h2>Your Product</h2><table border="1"><tr><th>Field</th><th>Value</th></tr>';
  for (const [key, value] of Object.entries(match)) {
    if (value && !['Matching to', 'Alternate Match'].includes(key)) {
      html += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
  }
  html += '</table>';

  const matchId = match["Matching to"];
  const altId = match["Alternate Match"];
  const related = data.filter(p =>
    p["Product Number"] === matchId || p["Product Number"] === altId
  );

  if (related.length) {
    html += '<h2>Matching Products</h2><table border="1"><tr>';
    html += '<th>Brand</th><th>Product</th><th>Flow</th><th>Rejection</th></tr>';
    related.forEach(p => {
      html += `<tr><td>${p.Brand}</td><td>${p["Product Number"]}</td><td>${p["flow gpd"]}</td><td>${p["Avg. rejection"]}</td></tr>`;
    });
    html += '</table>';
  }

  results.innerHTML = html;
}
