let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');

        div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        `;

        cartItems.appendChild(div);
    });

    totalPrice.innerText = total;
    cartCount.innerText = cart.length;
}

function checkout() {
    if(cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Order placed successfully! Thank you for shopping at லெட்சுமி Flour Mill');

    cart = [];
    total = 0;

    updateCart();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}
function searchProducts() {

    let input = document.getElementById('searchInput').value.toLowerCase();

    let products = document.querySelectorAll('.product-card');

    products.forEach(product => {

        let productName = product.querySelector('h3').innerText.toLowerCase();

        if(productName.includes(input)) {
            product.style.display = 'block';
        }
        else {
            product.style.display = 'none';
        }

    });
}