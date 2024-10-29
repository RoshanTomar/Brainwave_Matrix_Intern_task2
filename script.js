alert
// script.js
let cart = [];
let totalPrice = 0;

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Sidebar toggle functionality
sidebarToggle.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px';
    } else {
        sidebar.style.left = '0px';
    }
});

// Add-to-cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;
        const productPrice = parseFloat(button.dataset.productPrice);

        addToCart(productId, productName, productPrice);
    });
});

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - ₹${item.price}</li>`).join('');
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElem.textContent = totalPrice.toFixed(2);
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Thank you for your purchase! Total: ₹${totalPrice.toFixed(2)}`);
        cart = [];
        updateCart();
    }
});


