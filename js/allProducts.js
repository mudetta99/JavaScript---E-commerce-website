// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//     .then(([products, users]) => {
//         let productsContainer = document.getElementById('productsContainer');
//         let userRole = localStorage.getItem('userRole');
//         let userId = sessionStorage.getItem('userId');

//         productsContainer.innerHTML = ''; // افراغ الحاوية قبل إضافة المنتجات

//         if (products.length === 0) {
//             productsContainer.innerHTML = '<p>No products found.</p>';
//             return;
//         }

//         products.forEach(product => {
//             let productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             let seller = users.find(user => user.id === product.userId);
//             let sellerName = seller ? seller.name : 'Unknown';

//             let actionButtons = '';
//             if (userRole === 'Admin' || userRole === 'Super Admin') {
//                 actionButtons = `
//                     <button class="btnEdit" onclick="editProduct('${product.id}')">Edit</button>
//                     <button class="btnDelete" onclick="deleteProduct('${product.id}')">Delete</button>
//                 `;
//             }

//             let addToCartButton = '';
//             if (localStorage.getItem('isLoggedIn') === 'true') {
//                 addToCartButton = `
//                     <button class="btnAddToCart" onclick="addToCart('${product.id}')">Add to Cart</button>
//                 `;
//             }

//             productCard.innerHTML = `
//                 <h2>${product.name}</h2>
//                 <p>${product.description}</p>
//                 <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                 <p><strong>Seller:</strong> ${sellerName}</p>
//                 <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
//                 <div class="buttons">
//                     ${actionButtons}
//                     ${addToCartButton}
//                     <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                 </div>
//             `;

//             productsContainer.appendChild(productCard);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function editProduct(productId) {
//     window.location.href = `editProduct.html?id=${productId}`;
// }

// function deleteProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => response.json())
//         .then(product => {
//             if (!product.id) {
//                 Swal.fire('Error', 'Product not found.', 'error');
//                 return;
//             }

//             Swal.fire({
//                 title: 'Are you sure?',
//                 text: `Do you want to delete the product: ${product.name}?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, delete it!',
//                 cancelButtonText: 'No, cancel'
//             }).then(result => {
//                 if (result.isConfirmed) {
//                     let deletedProduct = {
//                         id: product.id,
//                         productId: product.id,
//                         sellerId: product.userId,
//                         deleted_at: new Date().toISOString()
//                     };

//                     fetch('http://localhost:3000/soft_delete', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(deletedProduct),
//                     })
//                     .then(response => {
//                         if (response.ok) {
//                             fetch(`http://localhost:3000/products/${productId}`, {
//                                 method: 'DELETE',
//                             })
//                             .then(response => {
//                                 if (response.ok) {
//                                     Swal.fire('Deleted!', `Product "${product.name}" has been deleted.`, 'success');
//                                     location.reload();
//                                 } else {
//                                     Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                                 }
//                             })
//                             .catch(error => {
//                                 console.error('Error deleting product:', error);
//                                 Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                             });
//                         } else {
//                             Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                         }
//                     })
//                     .catch(error => {
//                         console.error('Error adding to soft delete:', error);
//                         Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                     });
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product:', error);
//             Swal.fire('Error!', 'Failed to fetch product details.', 'error');
//         });
// }

// function addToCart(productId) {
//     let userId = sessionStorage.getItem('userId');
//     fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ productId, userId }),
//     })
//     .then(response => {
//         if (response.ok) {
//             Swal.fire('Success', 'Product added to the cart successfully!', 'success');
//         } else {
//             Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//         }
//     })
//     .catch(error => {
//         console.error('Error adding product to the cart:', error);
//         Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//     });
// }

// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }


// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//     .then(([products, users]) => {
//         let productsContainer = document.getElementById('productsContainer');
//         let userRole = localStorage.getItem('userRole');
//         let userId = sessionStorage.getItem('userId');

//         productsContainer.innerHTML = ''; 

//         if (products.length === 0) {
//             productsContainer.innerHTML = '<p>No products found.</p>';
//             return;
//         }

//         products.forEach(product => {
//             let productCard = document.createElement('div');
//             productCard.classList.add('product-card');

//             let seller = users.find(user => user.id === product.userId);
//             let sellerName = seller ? seller.name : 'Unknown';

//             let actionButtons = '';
//             if (userRole === 'Admin' || userRole === 'Super Admin') {
//                 actionButtons = `
//                     <button class="btnEdit" onclick="editProduct('${product.id}')">Edit</button>
//                     <button class="btnDelete" onclick="deleteProduct('${product.id}')">Delete</button>
//                 `;
//             }

//             let addToCartButton = '';
//             if (localStorage.getItem('isLoggedIn') === 'true') {
//                 addToCartButton = `
//                     <button class="btnAddToCart" onclick="addToCart('${product.id}')">Add to Cart</button>
//                 `;
//             }

//             productCard.innerHTML = `
//                 <h2 title="${product.name}">${product.name}</h2>
//                 <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">

//                 <p title="${product.description}">${product.description}</p>
//                 <p style="display:inline-block" id="p_price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                 <p style="display:inline-block" ><strong>Seller:</strong> ${sellerName}</p>
//                 <div class="buttons">
//                     ${actionButtons}
//                     ${addToCartButton}
//                     <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                 </div>
//             `;

//             productsContainer.appendChild(productCard);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function editProduct(productId) {
//     window.location.href = `editProduct.html?id=${productId}`;
// }

// function deleteProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => response.json())
//         .then(product => {

//             if (!product.id) {
//                 Swal.fire('Error', 'Product not found.', 'error');
//                 return;
//             }
            
//             Swal.fire({

//                 title: 'Attention !!',
//                 text: `Do you want to delete the product: ${product.name}?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, delete it!',
//                 cancelButtonText: 'No, cancel'

//             }).then(result => {
//                 if (result.isConfirmed) {
//                     let deletedProduct = {
//                         id: product.id,
//                         productId: product.id,
//                         sellerId: product.userId,
//                         deleted_at: new Date().toISOString()
//                     };

//                     fetch('http://localhost:3000/soft_delete', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(deletedProduct),
//                     })
//                     .then(response => {
//                         if (response.ok) {
//                             fetch(`http://localhost:3000/products/${productId}`, {
//                                 method: 'DELETE',
//                             })
//                             .then(response => {
//                                 if (response.ok) {
//                                     Swal.fire('Deleted!', `Product "${product.name}" has been deleted.`, 'success');
//                                     location.reload();
//                                 } else {
//                                     Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                                 }
//                             })
//                             .catch(error => {
//                                 console.error('Error deleting product:', error);
//                                 Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                             });
//                         } else {
//                             Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                         }
//                     })
//                     .catch(error => {
//                         console.error('Error adding to soft delete:', error);
//                         Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                     });
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product:', error);
//             Swal.fire('Error!', 'Failed to fetch product details.', 'error');
//         });
// }

// function addToCart(productId) {
//     let userId = sessionStorage.getItem('userId');

//     let cartDetails = {
//         productId,
//         userId,
//         status: 'Added to the cart',
//         date: new Date().toISOString()
//     }
//     fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(cartDetails),
//     })
//     .then(response => {
//         if (response.ok) {
//             fetch(`http://localhost:3000/products/${productId}`)
//             .then(response => response.json())
//             .then(product => {
//                 // Swal.fire('Success', `${product.name} added to the cart successfully!`, 'success', 'timer:2000');
//                 Swal.fire({
//                     title: 'Success',
//                     text: `${product.name} added to the cart successfully!`,
//                     icon: 'success',
//                     timer: 2000, 
//                     showConfirmButton: false 
//                 });
//             })
//         } else {
//             Swal.fire('Error', 'Failed to add product to the cart.', 'error', 'time:2000');
//         }
//     })
//     .catch(error => {
//         console.error('Error adding product to the cart:', error);
//         Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//     });
// }



// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }



// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//     .then(([products, users]) => {
//         let productsContainer = document.getElementById('productsContainer');
//         let userRole = localStorage.getItem('userRole');
//         let userId = sessionStorage.getItem('userId');

//         function displayProducts(filteredProducts) {
//             productsContainer.innerHTML = ''; 

//             if (filteredProducts.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             filteredProducts.forEach(product => {
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
//                     <h2 title="${product.name}">${product.name}</h2>
//                     <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
//                     <p title="${product.description}">${product.description}</p>
//                     <p style="display:inline-block" id="p_price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
//                     <div class="buttons">
//                         ${actionButtons}
//                         ${addToCartButton}
//                         <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                     </div>
//                 `;

//                 productsContainer.appendChild(productCard);
//             });se
//         }

//         displayProducts(products);

//         document.getElementById('searchInput').addEventListener('input', function (e) {
//             let searchQuery = e.target.value.toLowerCase();
//             let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
//             displayProducts(filteredProducts);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function editProduct(productId) {
//     window.location.href = `editProduct.html?id=${productId}`;
// }

// function deleteProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => response.json())
//         .then(product => {
//             if (!product.id) {
//                 Swal.fire('Error', 'Product not found.', 'error');
//                 return;
//             }
            
//             Swal.fire({
//                 title: 'Attention !!',
//                 text: `Do you want to delete the product: ${product.name}?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, delete it!',
//                 cancelButtonText: 'No, cancel'
//             }).then(result => {
//                 if (result.isConfirmed) {
//                     let deletedProduct = {
//                         id: product.id,
//                         productId: product.id,
//                         sellerId: product.userId,
//                         deleted_at: new Date().toISOString()
//                     };

//                     fetch('http://localhost:3000/soft_delete', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(deletedProduct),
//                     })
//                     .then(response => {
//                         if (response.ok) {
//                             fetch(`http://localhost:3000/products/${productId}`, {
//                                 method: 'DELETE',
//                             })
//                             .then(response => {
//                                 if (response.ok) {
//                                     Swal.fire('Deleted!', `Product "${product.name}" has been deleted.`, 'success');
//                                     location.reload();
//                                 } else {
//                                     Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                                 }
//                             })
//                             .catch(error => {
//                                 console.error('Error deleting product:', error);
//                                 Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                             });
//                         } else {
//                             Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                         }
//                     })
//                     .catch(error => {
//                         console.error('Error adding to soft delete:', error);
//                         Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                     });
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product:', error);
//             Swal.fire('Error!', 'Failed to fetch product details.', 'error');
//         });
// }

// function addToCart(productId) {
//     let userId = sessionStorage.getItem('userId');

//     let cartDetails = {
//         productId,
//         userId,
//         status: 'Added to the cart',
//         date: new Date().toISOString()
//     }
//     fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(cartDetails),
//     })
//     .then(response => {
//         if (response.ok) {
//             fetch(`http://localhost:3000/products/${productId}`)
//             .then(response => response.json())
//             .then(product => {
//                 Swal.fire({
//                     title: 'Success',
//                     text: `${product.name} added to the cart successfully!`,
//                     icon: 'success',
//                     timer: 2000, 
//                     showConfirmButton: false 
//                 });
//             })
//         } else {
//             Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//         }
//     })
//     .catch(error => {
//         console.error('Error adding product to the cart:', error);
//         Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//     });
// }

// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }


// Edit works
// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//     .then(([products, users]) => {
//         let productsContainer = document.getElementById('productsContainer');
//         let userRole = localStorage.getItem('userRole');
//         let userId = sessionStorage.getItem('userId');

//         function displayProducts(filteredProducts) {
//             productsContainer.innerHTML = ''; 

//             if (filteredProducts.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             filteredProducts.forEach(product => {
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
//                     <h2 title="${product.name}">${product.name}</h2>
//                     <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
//                     <p title="${product.description}">${product.description}</p>
//                     <p style="display:inline-block" id="p_price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
//                     <div class="buttons">
//                         ${actionButtons}
//                         ${addToCartButton}
//                         <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                     </div>
//                 `;

//                 productsContainer.appendChild(productCard);
//             });
//         }

//         displayProducts(products);

//         document.getElementById('searchInput').addEventListener('input', function (e) {
//             let searchQuery = e.target.value.toLowerCase();
//             let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
//             displayProducts(filteredProducts);
//         });
//     })
//     .catch(error => {
//         // console.error('Error fetching data:', error);
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function editProduct(productId) {
//     window.location.href = `editProduct.html?id=${productId}`;
// }

// function deleteProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => response.json())
//         .then(product => {
//             if (!product.id) {
//                 Swal.fire('Error', 'Product not found.', 'error');
//                 return;
//             }
            
//             Swal.fire({
//                 title: 'Attention !!',
//                 text: `Do you want to delete the product: ${product.name}?`,
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, delete it!',
//                 cancelButtonText: 'No, cancel'
//             }).then(result => {
//                 if (result.isConfirmed) {
//                     let deletedProduct = {
//                         id: product.id,
//                         productId: product.id,
//                         sellerId: product.userId,
//                         deleted_at: new Date().toISOString()
//                     };

//                     fetch('http://localhost:3000/soft_delete', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify(deletedProduct),
//                     })
//                     .then(response => {
//                         if (response.ok) {
//                             fetch(`http://localhost:3000/products/${productId}`, {
//                                 method: 'DELETE',
//                             })
//                             .then(response => {
//                                 if (response.ok) {
//                                     Swal.fire('Deleted!', `Product "${product.name}" has been deleted.`, 'success');
//                                     location.reload();
//                                 } else {
//                                     Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                                 }
//                             })
//                             .catch(error => {
//                                 console.error('Error deleting product:', error);
//                                 Swal.fire('Error!', 'Failed to delete the product.', 'error');
//                             });
//                         } else {
//                             Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                         }
//                     })
//                     .catch(error => {
//                         console.error('Error adding to soft delete:', error);
//                         Swal.fire('Error!', 'Failed to store the product in soft delete.', 'error');
//                     });
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product:', error);
//             Swal.fire('Error!', 'Failed to fetch product details.', 'error');
//         });
// }

// function addToCart(productId) {
//     let userId = sessionStorage.getItem('userId');

//     let cartDetails = {
//         productId,
//         userId,
//         status: 'Added to the cart',
//         date: new Date().toISOString()
//     }
//     fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(cartDetails),
//     })
//     .then(response => {
//         if (response.ok) {
//             fetch(`http://localhost:3000/products/${productId}`)
//             .then(response => response.json())
//             .then(product => {
//                 Swal.fire({
//                     title: 'Success',
//                     text: `${product.name} added to the cart successfully!`,
//                     icon: 'success',
//                     timer: 2000, 
//                     showConfirmButton: false 
//                 });
//             })
//         } else {
//             Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//         }
//     })
//     .catch(error => {
//         console.error('Error adding product to the cart:', error);
//         Swal.fire('Error', 'Failed to add product to the cart.', 'error');
//     });
// }

// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }



// document.addEventListener('DOMContentLoaded', function () {
//     Promise.all([  
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/users').then(res => res.json())
//     ])
//     .then(([products, users]) => {
//         let productsContainer = document.getElementById('productsContainer');
//         let userRole = localStorage.getItem('userRole');
//         let userId = sessionStorage.getItem('userId');

//         function displayProducts(filteredProducts) {
//             productsContainer.innerHTML = ''; 

//             if (filteredProducts.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             filteredProducts.forEach(product => {
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

//                 // إضافة زر لإضافة المنتج إلى قائمة الرغبات
//                 let addToWishlistButton = '';
//                 if (localStorage.getItem('isLoggedIn') === 'true') {
//                     addToWishlistButton = `
//                         <button class="btnAddToWishlist" onclick="addToWishlist('${product.id}')">Add to Wishlist</button>
//                     `;
//                 }

//                 productCard.innerHTML = `
//                     <h2 title="${product.name}">${product.name}</h2>
//                     <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" alt="${product.name}" width="200px" class="pro_img">
//                     <p title="${product.description}">${product.description}</p>
//                     <p style="display:inline-block" id="p_price"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
//                     <div class="buttons">
//                         ${actionButtons}
//                         ${addToCartButton}
//                         ${addToWishlistButton} <!-- إضافة الزر هنا -->
//                         <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
//                     </div>
//                 `;

//                 productsContainer.appendChild(productCard);
//             });
//         }

//         displayProducts(products);

//         document.getElementById('searchInput').addEventListener('input', function (e) {
//             let searchQuery = e.target.value.toLowerCase();
//             let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
//             displayProducts(filteredProducts);
//         });
//     })
//     .catch(error => {
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function addToWishlist(productId) {
//     let userId = sessionStorage.getItem('userId');
//     let sellerId = ''; // يمكننا الحصول عليها من المنتج أو الـ API

//     // نبحث عن البائع الذي يبيع هذا المنتج
//     fetch(`http://localhost:3000/products/${productId}`)
//     .then(response => response.json())
//     .then(product => {
//         sellerId = product.userId;

//         // بيانات المنتج الذي سيتم إضافته إلى قائمة الرغبات
//         let wishlistDetails = {
//             productId,
//             sellerID: sellerId,
//             userID: userId,
//             date: new Date().toISOString()
//         }

//         fetch('http://localhost:3000/wishlist', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(wishlistDetails),
//         })
//         .then(response => {
//             if (response.ok) {
//                 Swal.fire({
//                     title: 'Success',
//                     text: 'Product added to Wishlist!',
//                     icon: 'success',
//                     timer: 2000,
//                     showConfirmButton: false
//                 });
//             } else {
//                 Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
//             }
//         })
//         .catch(error => {
//             console.error('Error adding product to wishlist:', error);
//             Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching product details:', error);
//         Swal.fire('Error', 'Failed to fetch product details.', 'error');
//     });
// }

// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }



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
                        <button class="btnEdit" onclick="editProduct('${product.id}')">Edit</button>
                        <button class="btnDelete" onclick="confirmDeleteProduct('${product.id}')">Delete</button>
                    `;
                }

                let addToCartButton = '';
                if (localStorage.getItem('isLoggedIn') === 'true') {
                    addToCartButton = `
                        <button class="btnAddToCart" onclick="addToCart('${product.id}')">Add to Cart</button>
                    `;
                }

                let addToWishlistButton = '';
                if (localStorage.getItem('isLoggedIn') === 'true') {
                    addToWishlistButton = `
                        <button class="btnAddToWishlist" onclick="addToWishlist('${product.id}')">Add to Wishlist</button>
                    `;
                }

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
                        <button class="btnDetails" onclick="viewProductDetails('${product.id}')">View Details</button>
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
    window.location.href = `../html/editProduct.html?productId=${productId}`;
}

function confirmDeleteProduct(productId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this product!',
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
}









// document.addEventListener('DOMContentLoaded', function () {
//     const productsContainer = document.getElementById('productsContainer');
    
//     if (!productsContainer) {
//         console.error('Products container not found!');
//         return;
//     }

//     // Show loading state
//     productsContainer.innerHTML = '<p>Loading products...</p>';

//     Promise.all([  
//         fetch('http://localhost:3000/products')
//             .then(res => {
//                 if (!res.ok) throw new Error('Failed to fetch products');
//                 return res.json();
//             }),
//         fetch('http://localhost:3000/users')
//             .then(res => {
//                 if (!res.ok) throw new Error('Failed to fetch users');
//                 return res.json();
//             })
//     ])
//     .then(([products, users]) => {
//         console.log('Loaded products:', products.length);
//         console.log('Loaded users:', users.length);

//         function displayProducts(filteredProducts) {
//             if (!Array.isArray(filteredProducts)) {
//                 console.error('Expected array of products, got:', filteredProducts);
//                 productsContainer.innerHTML = '<p>Error: Invalid product data</p>';
//                 return;
//             }

//             productsContainer.innerHTML = ''; 

//             if (filteredProducts.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             filteredProducts.forEach(product => {
//                 try {
//                     let productCard = document.createElement('div');
//                     productCard.classList.add('product-card');

//                     let seller = users.find(user => user.id === product.userId);
//                     let sellerName = seller ? seller.name : 'Unknown';

//                     const userRole = localStorage.getItem('userRole');
//                     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//                     const actionButtons = (userRole === 'Admin' || userRole === 'Super Admin') 
//                         ? `<button title="Edit" class="btnEdit" onclick="editProduct('${product.id}')">
//                                <i class="fas fa-edit"></i>
//                            </button>
//                            <button title="Delete" class="btnDelete" onclick="confirmDeleteProduct('${product.id}')">
//                                <i class="fas fa-trash"></i>
//                            </button>`
//                         : '';

//                     const addToCartButton = isLoggedIn 
//                         ? `<button title="Add To Cart" class="btnAddToCart" onclick="addToCart('${product.id}')">
//                                <i class="fas fa-cart-plus"></i>
//                            </button>`
//                         : '';

//                     const addToWishlistButton = isLoggedIn
//                         ? `<button title="Add To Wishlist" class="btnAddToWishlist" onclick="addToWishlist('${product.id}')">
//                                <i class="fas fa-heart"></i>
//                            </button>`
//                         : '';

//                     productCard.innerHTML = `
//                         <h2 title="${product.name}">${product.name}</h2>
//                         <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" 
//                              alt="${product.name}" 
//                              width="200px" 
//                              class="pro_img"
//                              onerror="this.src='../placeholder-image.jpg'">
//                         <p title="${product.description}">${product.description}</p>
//                         <p style="display:inline-block" id="p_price">
//                             <strong>Price:</strong> $${Number(product.price).toFixed(2)}
//                         </p>
//                         <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
//                         <div class="buttons">
//                             ${actionButtons}
//                             ${addToCartButton}
//                             ${addToWishlistButton}
//                             <button title="View Details" class="btnDetails" onclick="viewProductDetails('${product.id}')">
//                                 <i class="fas fa-eye"></i>
//                             </button>
//                         </div>
//                     `;

//                     productsContainer.appendChild(productCard);
//                 } catch (err) {
//                     console.error('Error creating product card:', err, product);
//                 }
//             });
//         }

//         displayProducts(products);

//         document.getElementById('searchInput').addEventListener('input', function (e) {
//             let searchQuery = e.target.value.toLowerCase();
//             let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
//             displayProducts(filteredProducts);
//         });
//     })
//     .catch(error => {
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });

// function addToWishlist(productId) {
//     let userId = sessionStorage.getItem('userId');
//     let sellerId = '';

//     fetch(`http://localhost:3000/products/${productId}`)
//     .then(response => response.json())
//     .then(product => {
//         sellerId = product.userId;

//         let wishlistDetails = {
//             productId,
//             sellerID: sellerId,
//             userID: userId,
//             date: new Date().toISOString()
//         }

//         fetch('http://localhost:3000/wishlist', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(wishlistDetails),
//         })
//         .then(response => {
//             if (response.ok) {
//                 Swal.fire({
//                     title: 'Success',
//                     text: 'Product added to Wishlist!',
//                     icon: 'success',
//                     timer: 2000,
//                     showConfirmButton: false
//                 });
//             } else {
//                 Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
//             }
//         })
//         .catch(error => {
//             console.error('Error adding product to wishlist:', error);
//             Swal.fire('Error', 'Failed to add product to Wishlist.', 'error');
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching product details:', error);
//         Swal.fire('Error', 'Failed to fetch product details.', 'error');
//     });
// }

// function viewProductDetails(productId) {
//     sessionStorage.setItem('selectedProductId', productId);
//     window.location.href = 'productDetails.html';
// }

// function editProduct(productId) {
//     window.location.href = `editProduct.html?id=${productId}`;
// }

// function confirmDeleteProduct(productId) {
//     Swal.fire({
//         title: 'Attention !!',
//         text: 'Are you sure that u want to delete this product ?!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#d33',
//         cancelButtonColor: '#3085d6',
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'Cancel'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             deleteProduct(productId);
//         }
//     });
// }

// function deleteProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`, {
//         method: 'DELETE',
//     })
//     .then(response => {
//         if (response.ok) {
//             Swal.fire({
//                 title: 'Success',
//                 text: 'Product deleted successfully!',
//                 icon: 'success',
//                 timer: 2000,
//                 showConfirmButton: false
//             });
//             location.reload();
//         } else {
//             Swal.fire('Error', 'Failed to delete product.', 'error');
//         }
//     })
//     .catch(error => {
//         console.error('Error deleting product:', error);
//         Swal.fire('Error', 'Failed to delete product.', 'error');
//     });
// }

// function addToCart(productId) {
//     let userId = sessionStorage.getItem('userId');

//     // Check if product exists in "canceld" and remove it if it does
//     fetch(`http://localhost:3000/canceld?productId=${productId}&userId=${userId}`)
//     .then(response => response.json())
//     .then(canceledProducts => {
//         canceledProducts.forEach(product => {
//             // Delete product from canceled if it exists
//             fetch(`http://localhost:3000/canceld/${product.id}`, {
//                 method: 'DELETE',
//             })
//             .then(response => {
//                 if (response.ok) {
//                     console.log(`Product with id ${product.id} removed from canceled list`);
//                 } else {
//                     console.error('Failed to remove product from canceled list');
//                 }
//             })
//             .catch(error => console.error('Error removing product from canceled:', error));
//         });

//         // Add product to the cart
//         let cartDetails = {
//             productId,
//             userId,
//             quantity: 1,
//         };

//         fetch('http://localhost:3000/cart', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(cartDetails),
//         })
//         .then(response => {
//             if (response.ok) {
//                 Swal.fire({
//                     title: 'Success',
//                     text: 'Product added to Cart!',
//                     icon: 'success',
//                     timer: 2000,
//                     showConfirmButton: false
//                 });
//             } else {
//                 Swal.fire('Error', 'Failed to add product to Cart.', 'error');
//             }
//         })
//         .catch(error => {
//             console.error('Error adding product to cart:', error);
//             Swal.fire('Error', 'Failed to add product to Cart.', 'error');
//         });
//     })
//     .catch(error => {
//         console.error('Error checking canceled products:', error);
//     });
// }



// document.addEventListener('DOMContentLoaded', function () {
//     const productsContainer = document.getElementById('productsContainer');
    
//     if (!productsContainer) {
//         console.error('Products container not found!');
//         return;
//     }

//     productsContainer.innerHTML = '<p>Loading products...</p>';

//     Promise.all([  
//         fetch('http://localhost:3000/products')
//             .then(res => {
//                 if (!res.ok) throw new Error('Failed to fetch products');
//                 return res.json();
//             }),
//         fetch('http://localhost:3000/users')
//             .then(res => {
//                 if (!res.ok) throw new Error('Failed to fetch users');
//                 return res.json();
//             }),
//         fetch('http://localhost:3000/categories') 
//             .then(res => {
//                 if (!res.ok) throw new Error('Failed to fetch categories');
//                 return res.json();
//             })
//     ])
//     .then(([products, users, categories]) => {
//         console.log('Loaded products:', products.length);
//         console.log('Loaded users:', users.length);
//         console.log('Loaded categories:', categories.length);

//         function displayProducts(filteredProducts) {
//             if (!Array.isArray(filteredProducts)) {
//                 console.error('Expected array of products, got:', filteredProducts);
//                 productsContainer.innerHTML = '<p>Error: Invalid product data</p>';
//                 return;
//             }

//             productsContainer.innerHTML = ''; 

//             if (filteredProducts.length === 0) {
//                 productsContainer.innerHTML = '<p>No products found.</p>';
//                 return;
//             }

//             filteredProducts.forEach(product => {
//                 try {
//                     let productCard = document.createElement('div');
//                     productCard.classList.add('product-card');

//                     let seller = users.find(user => user.id === product.userId);
//                     let sellerName = seller ? seller.name : 'Unknown';

//                     let category = categories.find(cat => cat.id === product.categoryId);
//                     let categoryName = category ? category.category : 'Sorry,category undefined';

//                     const userRole = localStorage.getItem('userRole');
//                     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//                     const actionButtons = (userRole === 'Admin' || userRole === 'Super Admin') 
//                         ? `<button title="Edit" class="btnEdit" onclick="editProduct('${product.id}')">
//                                <i class="fas fa-edit"></i>
//                            </button>
//                            <button title="Delete" class="btnDelete" onclick="confirmDeleteProduct('${product.id}')">
//                                <i class="fas fa-trash"></i>
//                            </button>`
//                         : '';

//                     const addToCartButton = isLoggedIn 
//                         ? `<button title="Add To Cart" class="btnAddToCart" onclick="addToCart('${product.id}')">
//                                <i class="fas fa-cart-plus"></i>
//                            </button>`
//                         : '';

//                     const addToWishlistButton = isLoggedIn
//                         ? `<button title="Add To Wishlist" class="btnAddToWishlist" onclick="addToWishlist('${product.id}')">
//                                <i class="fas fa-heart"></i>
//                            </button>`
//                         : '';

//                     productCard.innerHTML = `
//                         <h2 title="${product.name}">${product.name}</h2>
//                         <img src="${product.image.startsWith('data:image') ? product.image : `../${product.image}`}" 
//                              alt="${product.name}" 
//                              width="200px" 
//                              class="pro_img"
//                              onerror="this.src='../placeholder-image.jpg'">
//                         <p title="${product.description}">${product.description}</p>
//                         <p style="display:inline-block" id="p_price">
//                             <strong>Price:</strong> $${Number(product.price).toFixed(2)}
//                         </p>
//                         <p style="display:inline-block"><strong>Seller:</strong> ${sellerName}</p>
//                         <p style="display:inline-block"><strong>Category:</strong> ${categoryName}</p> <!-- إضافة اسم الكاتيجوري هنا -->
//                         <div class="buttons">
//                             ${actionButtons}
//                             ${addToCartButton}
//                             ${addToWishlistButton}
//                             <button title="View Details" class="btnDetails" onclick="viewProductDetails('${product.id}')">
//                                 <i class="fas fa-eye"></i>
//                             </button>
//                         </div>
//                     `;

//                     productsContainer.appendChild(productCard);
//                 } catch (err) {
//                     console.error('Error creating product card:', err, product);
//                 }
//             });
//         }

//         displayProducts(products);

//         document.getElementById('searchInput').addEventListener('input', function (e) {
//             let searchQuery = e.target.value.toLowerCase();
//             let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
//             displayProducts(filteredProducts);
//         });
//     })
//     .catch(error => {
//         document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
//     });
// });







document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
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
                            <button title="Add To Cart" class="btnAddToCart" onclick="addToCart('${product.id}')">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        `;
                    }

                    let addToWishlistButton = '';
                    if (localStorage.getItem('isLoggedIn') === 'true') {
                        addToWishlistButton = `
                            <button title="Add To Wishlist" class="btnAddToWishlist" onclick="addToWishlist('${product.id}')">
                                <i class="fas fa-heart"></i>
                            </button>
                        `;
                    }

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
                            <button title="View Details" class="btnDetails" onclick="viewProductDetails('${product.id}')">
                                <i class="fas fa-eye"></i>
                            </button>
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
        };

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
        text: 'Are you sure that you want to delete this product?!',
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


