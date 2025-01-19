document.addEventListener('DOMContentLoaded', function () {
    Promise.all([  
        fetch('http://localhost:3000/products').then(res => res.json()),
        fetch('http://localhost:3000/users').then(res => res.json())
    ])
    .then(([products, users]) => {
        let productsContainer = document.getElementById('productsContainer');
        let userRole = localStorage.getItem('userRole');
        let userId = sessionStorage.getItem('userId');

        function displayProducts(filteredProducts) {
            productsContainer.innerHTML = ''; 

            if (filteredProducts.length === 0) {
                productsContainer.innerHTML = '<p>No products found.</p>';
                return;
            }

            filteredProducts.forEach(product => {
                let productCard = document.createElement('div');
                productCard.classList.add('product-card');

                let seller = users.find(user => user.id === product.userId);
                let sellerName = seller ? seller.name : 'Unknown';

                let actionButtons = '';
                if (userRole === 'Admin' || userRole === 'Super Admin') {
                    actionButtons = `
                        <button title="Edit" class="btnEdit" onclick="editProduct('${product.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button title="Delete" class="btnDelete" onclick="confirmDeleteProduct('${product.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                }

                let addToCartButton = '';
                if (localStorage.getItem('isLoggedIn') === 'true') {
                    addToCartButton = `
                        <button title="Add To Cart" class="btnAddToCart" onclick="addToCart('${product.id}')"><i class="fas fa-cart-plus"></i></button>
                    `;
                }

                let addToWishlistButton = '';
                if (localStorage.getItem('isLoggedIn') === 'true') {
                    addToWishlistButton = `
                        <button title="Add To Wishlist" class="btnAddToWishlist" onclick="addToWishlist('${product.id}')"><i class="fas fa-heart"></i></button>
                        
                    `;
                }

                document.getElementsByClassName("btnAddToWishlist").style = "hover:background-color:red";

                productCard.innerHTML = `
                    <h2 title="${product.name}">${product.name}</h2>
                    <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
                    <p title="${product.description}">${product.description}</p>
                    <p style="display:inline-block" id="p_price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
                    <div class="buttons">
                        ${actionButtons}
                        ${addToCartButton}
                        ${addToWishlistButton}
                        <button title="View Details" class="btnDetails" onclick="viewProductDetails('${product.id}')"><i class="fas fa-eye"></i></button>
                    </div>
                `;

                productsContainer.appendChild(productCard);
            });
        }

        displayProducts(products);

        document.getElementById('searchInput').addEventListener('input', function (e) {
            let searchQuery = e.target.value.toLowerCase();
            let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
            displayProducts(filteredProducts);
        });
    })
    .catch(error => {
        document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
    });
});

function addToWishlist(productId) {
    let userId = sessionStorage.getItem('userId');
    let sellerId = '';

    fetch(`http://localhost:3000/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        sellerId = product.userId;

        let wishlistDetails = {
            productId,
            sellerID: sellerId,
            userID: userId,
            date: new Date().toISOString()
        }

        fetch('http://localhost:3000/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wishlistDetails),
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: 'Success',
                    text: 'Product added to Wishlist!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
            }
        })
        .catch(error => {
            console.error('Error adding product to wishlist:', error);
            Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
        });
    })
    .catch(error => {
        console.error('Error fetching product details:', error);
        Swal.fire('Error', 'Failed to fetch product details.', 'error');
    });
}

function viewProductDetails(productId) {
    sessionStorage.setItem('selectedProductId', productId);
    window.location.href = 'productDetails.html';
}

function editProduct(productId) {
    window.location.href = `editProduct.html?id=${productId}`;
}

function confirmDeleteProduct(productId) {
    Swal.fire({
        title: 'Attention !!',
        text: 'Are you sure that u want to delete this product ?!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(productId);
        }
    });
}

function deleteProduct(productId) {
    fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                title: 'Success',
                text: 'Product deleted successfully!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
            location.reload();
        } else {
            Swal.fire('Error', 'Failed to delete product.', 'error');
        }
    })
    .catch(error => {
        console.error('Error deleting product:', error);
        Swal.fire('Error', 'Failed to delete product.', 'error');
    });
}

function addToCart(productId) {
    let userId = sessionStorage.getItem('userId');

    fetch(`http://localhost:3000/canceld?productId=${productId}&userId=${userId}`)
    .then(response => response.json())
    .then(canceledProducts => {
        canceledProducts.forEach(product => {
            
            fetch(`http://localhost:3000/canceld/${product.id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log(`Product with id ${product.id} removed from canceled list`);
                } else {
                    console.error('Failed to remove product from canceled list');
                }
            })
            .catch(error => console.error('Error removing product from canceled:', error));
        });

        // Add product to the cart
        let cartDetails = {
            productId,
            userId,
            quantity: 1,
        };

        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartDetails),
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: 'Success',
                    text: 'Product added to Cart!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire('Error', 'Failed to add product to Cart.', 'error');
            }
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
            Swal.fire('Error', 'Failed to add product to Cart.', 'error');
        });
    })
    .catch(error => {
        console.error('Error checking canceled products:', error);
    });
}