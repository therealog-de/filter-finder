
function search() {
  const input = document.getElementById('searchInput').value.trim().toUpperCase();
  const results = document.getElementById('results');
  results.innerHTML = '';
  if (input.includes('CPA2-2540')) {
    results.innerHTML = `<h2>Your Product</h2>
    <table border="1"><tr><th>Brand</th><th>Model</th><th>Flow</th><th>Rejection</th></tr>
    <tr><td>Hydroponics</td><td>CPA2-2540</td><td>10200 GPD</td><td>99.5%</td></tr></table>
    <h2>Matching Products</h2>
    <table border="1"><tr><th>Brand</th><th>Model</th><th>Flow</th><th>Rejection</th></tr>
    <tr><td>Oltremare</td><td>BR2-2540</td><td>10200 GPD</td><td>99.5%</td></tr>
    <tr><td>Trisep</td><td>2540-ACM2-TSF</td><td>10200 GPD</td><td>99.5%</td></tr></table>`;
  } else {
    results.innerHTML = '<p>No match found. Try another model.</p>';
  }
}