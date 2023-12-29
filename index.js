
// Get the file input element
const fileInput = document.getElementById('fileToUpload');

// Add an event listener for the 'change' event on the file input element
fileInput.addEventListener('change', () => {
  // Get the selected file
  const file = fileInput.files[0];

  // Create a new FileReader object
  const reader = new FileReader();

  // Add an event listener for the 'load' event on the FileReader object
  reader.onload = (event) => {
    // Get the data from the FileReader object
    const data = event.target.result;

    // Parse the data as JSON
    const jsonData = JSON.parse(data);

    // Extract the products object from the JSON
    const products = jsonData.products;

    // Sort the products by popularity in descending order
    const sortedProducts = Object.values(products).sort((a, b) => b.popularity - a.popularity);

    // Display the sorted products in the HTML table
    displayProducts(sortedProducts);
  };

  // Read the file as text
  reader.readAsText(file);
});

// Function to display the products in the HTML table
function displayProducts(products) {
  // Get the table element
  const table = document.getElementById('data');

  // Create a header row for the table
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>Title</th>
    <th>Price</th>
    <th>Popularity</th>
  `;
  table.appendChild(headerRow);

  // Add the sorted products to the table
  for (const product of products) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>${product.popularity}</td>
    `;
    table.appendChild(row);
  }
}
