// Produkte von products.json laden
async function loadProducts() {
    const response = await fetch('products.json');
    return await response.json();
}

// Warenkorb aus localStorage lesen
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

// Warenkorb speichern
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Anzahl Artikel im Warenkorb (für Anzeige)
function getCartCount() {
    const cart = getCart();
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}