// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//         .then(([products, users]) => {
//             let productsContainer = document.getElementById('productsContainer');
//             let userRole = localStorage.getItem('userRole');
//             let userId = sessionStorage.getItem('userId');

//             productsContainer.innerHTML = '';

//             if (products.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             products.forEach(product => {
//                 let productCard = document.createElement('div');
//                 productCard.classList.add('product-card');

//                 let seller = users.find(user => user.id === product.userId);
//                 let sellerName = seller ? seller.name : 'Unknown';

//                 let actionButtons = '';
//                 if (userRole === 'Admin' || userRole === 'Super Admin') {
//                     actionButtons = `
//                         <button class="btnEdit" onclick="editProduct('${product.id}')">Edit</button>
//                         <button class="btnDelete" onclick="deleteProduct('${product.id}')">Delete</button>
//                     `;
//                 }

//                 let addToCartButton = '';
//                 if (localStorage.getItem('isLoggedIn') === 'true') {
//                     addToCartButton = `
//                         <button class="btnAddToCart" onclick="addToCart('${product.id}')">Add to Cart</button>
//                     `;
//                 }

//                 productCard.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}">
//                     <p>${product.description}</p>
//                     <div class="buttons">
//                         ${actionButtons}
//                         ${addToCartButton}
//                         <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                     </div>
//                 `;

//                 productsContainer.appendChild(productCard);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//         });
// });


Promise.all([
    fetch('http://localhost:3000/products').then(res => res.json()),
    fetch('http://localhost:3000/users').then(res => res.json())
])
    .then(([products, users]) => {
        let productsContainer = document.getElementById('productsContainer');
        let userRole = localStorage.getItem('userRole');
        let userId = sessionStorage.getItem('userId');

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.classList.add('product');

            let seller = users.find(user => user.id === product.userId);
            let sellerName = seller ? seller.name : 'Unknown';

            let actionButtons = '';
            if (userRole === 'Admin' || userRole === 'Super Admin') {
                actionButtons = `
                    <button class="btnEdit" onclick="editProduct('${product.id}')">Edit</button>
                    <button class="btnDelete" onclick="deleteProduct('${product.id}')">Delete</button>
                `;
            }

            let addToCartButton = '';
            if (localStorage.getItem('isLoggedIn') === 'true') {
                addToCartButton = `
                    <button class="btnAddToCart" onclick="addToCart('${product.id}')">Add to Cart</button>
                `;
            }

            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p id="productDescription"><strong>Description:</strong> ${product.description}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Seller:</strong> ${sellerName}</p>
                <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
                <button onclick="viewProductDetails('${product.id}')">View Details</button>
                <div class="buttons">${actionButtons} ${addToCartButton}</div>
            `;

            productsContainer.appendChild(productDiv);
        });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
    });

function editProduct(productId) {
    window.location.href = `editProduct.html?id=${productId}`;
}

function deleteProduct(productId) {
    fetch(`http://localhost:3000/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            if (!product.id) {
                Swal.fire('Error', 'Product not found.', 'error');
                return;
            }

            Swal.fire({
                title: 'Are you sure?',
                text: `Do you want to delete the product: ${product.name}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel'
            }).then(result => {
                if (result.isConfirmed) {
                    let deletedProduct = {
                        id: product.id,
                        productId: product.id,
                        sellerId: product.userId,
                        deleted_at: new Date().toISOString()
                    };

                    fetch('http://localhost:3000/soft_delete', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(deletedProduct),
                    })
                    .then(response => {
                        if (response.ok) {
                            fetch(`http://localhost:3000/products/${productId}`, {
                                method: 'DELETE',
                            })
                            .then(response => {
                                if (response.ok) {
                                    Swal.fire('Deleted!', `Product "${product.name}" has been deleted.`, 'success');
                                    location.reload();
                                } else {
                                    Swal.fire('Error!', 'Failed to delete the product.', 'error');
                                }
                            })
                            .catch(error => {
                                console.error('Error deleting product:', error);
                                Swal.fire('Error!', 'Failed to delete the product.', 'error');
                            });
                        } else {
                            Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Error adding to soft delete:', error);
                        Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching product:', error);
            Swal.fire('Error!', 'Failed to fetch product details.', 'error');
        });
}

function addToCart(productId) {
    let userId = sessionStorage.getItem('userId');
    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, userId }),
    })
        .then(response => {
            if (response.ok) {
                Swal.fire('Success', 'Product added to the cart successfully!', 'success');
            } else {
                Swal.fire('Error', 'Failed to add product to the cart.', 'error');
            }
        })
        .catch(error => {
            console.error('Error adding product to the cart:', error);
            Swal.fire('Error', 'Failed to add product to the cart.', 'error');
        });
}

function viewProductDetails(productId) {
    sessionStorage.setItem('selectedProductId', productId);
    window.location.href = 'productDetails.html';
}
