// Sample product data (replace with actual product data)
const products = [
    { id: 1, name: "Harper Lee, 'To Kill A Mockingbird'", price: 500 },
    { id: 2, name: "F. Scott Fitzgerald, 'The Great Gatsby'", price: 650 },
    { id: 3, name: "Emily Brontë, 'Wuthering Heights'", price: 1525 },
   { id: 4, name: "Margaret Atwood, 'The Handmaid's Tale'", price: 1240}, { id: 5, name: "Chinua Achebe, 'Things Fall Apart'", price: 560}, { id: 6, name: "George Orwell, '1984'", price: 440 }, { id: 7, name: "Jane Austen, 'Pride and Prejudice'", price: 990 }, { id: 8, name: "Toni Morrison, 'Beloved'", price: 575 }, { id: 9, name: "J.D. Salinger, 'The Catcher in the Rye'", price: 298 }, { id: 10, name: "Charles Dickens, 'Great Expectations'", price: 5600 }, { id: 11, name: "Pride and Prejudice by Jane Austen (1813)", price: 785}, { id: 12, name: "The Red and the Black by Stendhal (1830)", price: 770}
];

// Initialize cart and total variables
let cart = [];
let total = 0;

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update cart display and total
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    total = 0;

    // Clear existing cart items
    cartItems.innerHTML = '';

    // Populate cart items and calculate total
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    // Update total price
    totalElement.textContent = total.toFixed(2);
}

// Call the function to display products
displayProducts();
