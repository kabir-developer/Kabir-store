const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 299,
    image: "https://via.placeholder.com/200x150?text=Phone"
  },
  {
    id: 2,
    name: "Headphones",
    price: 49,
    image: "https://via.placeholder.com/200x150?text=Headphones"
  },
  {
    id: 3,
    name: "Backpack",
    price: 79,
    image: "https://via.placeholder.com/200x150?text=Backpack"
  }
];

const cart = [];

function showHome() {
  showSection('home');
}

function showProducts() {
  showSection('products');
  displayProducts();
}

function showCart() {
  showSection('cart');
  displayCart();
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function displayProducts() {
  const container = document.getElementById('productsList');
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cartCount').textContent = cart.length;
  alert(`${product.name} added to cart!`);
}

function displayCart() {
  const cartDiv = document.getElementById('cart-items');
  cartDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - $${item.price}`;
    cartDiv.appendChild(div);
    total += item.price;
  });
  document.getElementById('total').textContent = total;
}