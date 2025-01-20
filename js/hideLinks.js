document.addEventListener('DOMContentLoaded', () => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        document.getElementById('MyproductsBtn').style.display = 'none';
        document.getElementById('addProductsBtn').style.display = 'none';
        document.getElementById('myCartBtn').style.display = 'none';
        document.getElementById('myWishlistBtn').style.display = 'none';
        document.querySelector('.dropdown').style.display = 'none';

    }
});

