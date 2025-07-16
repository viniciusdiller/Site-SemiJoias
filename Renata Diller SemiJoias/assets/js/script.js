// Products data com URLs de imagens
const products = [
  // Anéis
  {
    id: 1,
    name: "Colar Dourado com Pingente Cravejado",
    price: 89.9,
    category: "aneis",
    image: "assets/images/anel.png",
  },
  // Pulseiras
  {
    id: 2,
    name: "Pulseira Coração",
    price: 48.0,
    category: "pulseiras",
    image: "assets/images/Pulseira-Coração.png",
  },
  // Conjuntos
  {
    id: 3,
    name: "Conjunto de bracelete e brinco cravejado",
    price: 116.0,
    category: "conjunto",
    image: "assets/images/Conjunto.png",
  },

  // Brincos
  {
    id: 4,
    name: "Argola Dulpa Orgânica",
    price: 44.0,
    category: "brincos",
    image: "assets/images/Argola-Dupla-Orgânica.png",
  },
  // Colares
  {
    id: 5,
    name: "Colar",
    price: 150.0,
    category: "colares",
    image: "assets/images/colar.png",
  },
];

let cart = [];
let currentProduct = null;

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  updateCartCount();
});

// Display products
function displayProducts(productsToShow) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.onclick = () => openProductModal(product);

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">R$ ${product.price
                  .toFixed(2)
                  .replace(".", ",")}</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); quickAddToCart(${
                  product.id
                })">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;

    grid.appendChild(productCard);
  });
}

// Filter products by category
function filterProducts(category) {
  // Update active button
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Filter and display products
  const filteredProducts =
    category === "todos"
      ? products
      : products.filter((product) => product.category === category);

  displayProducts(filteredProducts);
}

// Open product modal
function openProductModal(product) {
  currentProduct = product;
  document.getElementById(
    "modalProductImage"
  ).innerHTML = `<img src="${product.image}" alt="${product.name}">`;
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductPrice").textContent = `R$ ${product.price
    .toFixed(2)
    .replace(".", ",")}`;
  document.getElementById("quantityInput").value = 1;
  document.getElementById("productModal").style.display = "block";
}

// Close modal
function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Change quantity
function changeQuantity(change) {
  const input = document.getElementById("quantityInput");
  const newValue = parseInt(input.value) + change;
  if (newValue >= 1) {
    input.value = newValue;
  }
}

// Add to cart from modal
function addToCart() {
  const quantity = parseInt(document.getElementById("quantityInput").value);
  addProductToCart(currentProduct, quantity);
  closeModal();
}

// Quick add to cart
function quickAddToCart(productId) {
  const product = products.find((p) => p.id === productId);
  addProductToCart(product, 1);
}

// Add product to cart
function addProductToCart(product, quantity) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity,
    });
  }

  updateCartCount();
  showNotification(`${product.name} adicionado ao carrinho!`);
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

// Open cart
function openCart() {
  displayCartItems();
  document.getElementById("cartModal").style.display = "block";
}

// Close cart
function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// Display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Seu carrinho está vazio</p>";
    cartTotal.textContent = "Total: R$ 0,00";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                R$ ${item.price.toFixed(2).replace(".", ",")} x ${item.quantity}
            </div>
            <div>
                <strong>R$ ${itemTotal.toFixed(2).replace(".", ",")}</strong>
                <button onclick="removeFromCart(${
                  item.id
                })" style="margin-left: 10px; background: #d8c8b8; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Remover</button>
            </div>
        `;
    cartItemsContainer.appendChild(cartItem);
  });

  cartTotal.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  displayCartItems();
}

// Checkout - Send to WhatsApp
function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let message = "*Pedido - Renata Diller Semijoias*\n\n";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `• ${item.name}\n`;
    message += `  Quantidade: ${item.quantity}\n`;
    message += `  Preço unitário: R$ ${item.price
      .toFixed(2)
      .replace(".", ",")}\n`;
    message += `  Subtotal: R$ ${itemTotal.toFixed(2).replace(".", ",")}\n\n`;
  });

  message += `*Total do Pedido: R$ ${total.toFixed(2).replace(".", ",")}*\n\n`;
  message += "Gostaria de finalizar este pedido!";

  const whatsappUrl = `https://wa.me/${5522999584945}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove após animação (dura 2s)
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

// Close modals when clicking outside
window.onclick = function (event) {
  const productModal = document.getElementById("productModal");
  const cartModal = document.getElementById("cartModal");

  if (event.target === productModal) {
    productModal.style.display = "none";
  }
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
};
