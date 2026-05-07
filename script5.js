const API_URL = "https://fakestoreapi.com/products";

const productsContainer = document.getElementById("productsContainer");
const loading = document.getElementById("loading");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

let allProducts = [];

// Fetch API Data
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {

    loading.style.display = "none";

    allProducts = data;

    displayProducts(allProducts);

    loadCategories(allProducts);

  })
  .catch((error) => {

    loading.innerHTML = "Failed to load data";

    console.log(error);

  });


// Display Products Function
function displayProducts(data) {

  productsContainer.innerHTML = "";

  data.forEach((product) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img src="${product.image}" alt="${product.title}" />

      <h3>
        ${product.title.substring(0, 50)}
      </h3>

      <p>
        ${product.description.substring(0, 60)}...
      </p>

      <div class="price">
        $${product.price}
      </div>

      <div class="button-group">

        <button onclick="viewMore(${product.id})">
          View More
        </button>

        <button onclick="addToCart(${product.id})">
          Add To Cart
        </button>

      </div>

    `;

    productsContainer.appendChild(card);

  });

}


// View More Function
function viewMore(id) {

  const product = allProducts.find((item) => item.id === id);

  alert(
    `
Title: ${product.title}

Price: $${product.price}

Category: ${product.category}

Description:
${product.description}
    `
  );
}


// Search Functionality
searchInput.addEventListener("input", filterProducts);


// Category Filter
categoryFilter.addEventListener("change", filterProducts);


// Sort Feature
sortPrice.addEventListener("change", filterProducts);


// Filter Products Function
function filterProducts() {

  let filteredProducts = [...allProducts];

  // Search Filter
  const searchText = searchInput.value.toLowerCase();

  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  // Category Filter
  const selectedCategory = categoryFilter.value;

  if (selectedCategory !== "all") {

    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );

  }

  // Sort By Price
  const sortValue = sortPrice.value;

  if (sortValue === "low") {

    filteredProducts.sort((a, b) => a.price - b.price);

  }

  if (sortValue === "high") {

    filteredProducts.sort((a, b) => b.price - a.price);

  }

  displayProducts(filteredProducts);

}


// Load Categories
function loadCategories(products) {

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  categories.forEach((category) => {

    const option = document.createElement("option");

    option.value = category;

    option.textContent = category;

    categoryFilter.appendChild(option);

  });

}


// Add To Cart Function
function addToCart(id) {

  const product = allProducts.find((item) => item.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product Added To Cart");

}