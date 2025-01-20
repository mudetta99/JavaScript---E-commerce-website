// document.addEventListener('DOMContentLoaded', () => {
//     // let userId = localStorage.getItem('userId');
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {

//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json())
//     ])
//         .then(([cart, products]) => {
//             let cartContainer = document.getElementById('cartContainer');
//             let userCart = cart.filter(item => item.userId === userId);

//             if (userCart.length === 0) {
//                 cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//                 return;
//             }

//             userCart.forEach(cartItem => {
//                 let product = products.find(p => p.id === cartItem.productId);

//                 if (product) {
//                     let cartDiv = document.createElement('div');
//                     cartDiv.classList.add('cart-item');
//                     let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                     cartDiv.innerHTML = `
//                         <h2>${product.name}</h2>
//                         <p><strong>Description:</strong> ${product.description}</p>
//                         <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                         <img src="${imageSrc}" alt="${product.name}" width="250px">
//                         <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     `;

//                     cartContainer.appendChild(cartDiv);
//                 }
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching cart data:', error);
//             document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//         });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     // let userId = localStorage.getItem('userId');
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json())
//     ])
//     .then(([cart, products]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="order-now" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Order Now</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         // Add event listeners for the "Order Now" buttons
//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 // Create an order in the "orders" table
//                 fetch('http://localhost:3000/orders', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Ordered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order created:', orderData);

//                     // Update the cart item status to "Ordered"
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Ordered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been placed!');
//                     location.reload(); // Reload to reflect the updated cart
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });

        

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/canceld', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Canceld',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order Canceld:', orderData);

//                     // Update the cart item status to "Ordered"
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Canceld'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been cenceld!');
//                     location.reload(); // Reload to reflect the updated cart
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json())
//     ])
//     .then(([cart, products, shippedOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 // Check if the product is already in Shipped and update button accordingly
//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         // Event listeners for the "Order Now" and "Just Shipped" buttons
//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 // Create an order in the "orders" table
//                 fetch('http://localhost:3000/orders', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Ordered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order created:', orderData);

//                     // Update the cart item status to "Ordered"
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Ordered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been placed!');
//                     location.reload(); // Reload to reflect the updated cart
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');

//                 // Mark the order as "Delivered"
//                 fetch(`http://localhost:3000/Shipped`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(() => {
//                     alert('Your order has been marked as Delivered!');
//                     location.reload(); // Reload to reflect the updated cart
//                 })
//                 .catch(error => {
//                     console.error('Error marking order as delivered:', error);
//                     alert('There was an error updating your order status.');
//                 });
//             });
//         });

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/canceld', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Canceled',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order Canceled:', orderData);

//                     // Update the cart item status to "Canceled"
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Canceled'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been canceled!');
//                     location.reload(); // Reload to reflect the updated cart
//                 })
//                 .catch(error => {
//                     console.error('Error canceling order:', error);
//                     alert('There was an error canceling your order. Please try again.');
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json())
//     ])
//     .then(([cart, products, shippedOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 // Check if the product is already in Shipped and update button accordingly
//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/orders', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Ordered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order created:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Ordered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been placed!');
//                     location.reload(); 
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');
        
//                 fetch('http://localhost:3000/Delivered', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order delivered:', orderData);
        
//                     return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Delivered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'DELETE'
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been Shipped .. we will deleiver it !');
//                     location.reload();
//                 })
//                 .catch(error => {
//                     console.error('Error processing order:', error);
//                     alert('There was an error processing your order.');
//                 });
//             });
//         });
        

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/canceld', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Canceled',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order Canceled:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Canceled'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     alert('Your order has been canceled!');
//                     location.reload(); 
//                 })
//                 .catch(error => {
//                     console.error('Error canceling order:', error);
//                     alert('There was an error canceling your order. Please try again.');
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json())
//     ])
//     .then(([cart, products, shippedOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 // Check if the product is already in Shipped and update button accordingly
//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/orders', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Ordered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order created:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Ordered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order is being processed!',
//                         text: 'Thank you for your order!',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 1500 // 1.5 seconds
//                     }).then(() => {
//                         location.reload(); // Reload the page after alert disappears
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/Delivered', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order delivered:', orderData);

//                     return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Delivered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'DELETE'
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order has been shipped!',
//                         text: 'We will deliver it soon.',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 1500 // 1.5 seconds
//                     }).then(() => {
//                         location.reload(); // Reload the page after alert disappears
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error processing order:', error);
//                     alert('There was an error processing your order.');
//                 });
//             });
//         });

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/canceld', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Canceled',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order Canceled:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Canceled'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order has been canceled!',
//                         text: 'We hope to serve you again.',
//                         icon: 'error',
//                         showConfirmButton: false,
//                         timer: 1500 // 1.5 seconds
//                     }).then(() => {
//                         location.reload(); // Reload the page after alert disappears
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error canceling order:', error);
//                     alert('There was an error canceling your order. Please try again.');
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json())
//     ])
//     .then(([cart, products, shippedOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/orders', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Ordered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order created:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Ordered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order is being processed!',
//                         text: 'Thank you for your order!',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 5000 // Changed to 2 seconds
//                     }).then(() => {
//                         location.reload();
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error placing order:', error);
//                     alert('There was an error placing your order. Please try again.');
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/Delivered', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order delivered:', orderData);

//                     return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Delivered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'DELETE'
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order has been shipped!',
//                         text: 'We will deliver it soon.',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 5000 // Changed to 2 seconds
//                     }).then(() => {
//                         location.reload();
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error processing order:', error);
//                     alert('There was an error processing your order.');
//                 });
//             });
//         });

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/canceld', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Canceled',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order Canceled:', orderData);

//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Canceled'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Your order has been canceled!',
//                         text: 'We hope to serve you again.',
//                         icon: 'error',
//                         showConfirmButton: false,
//                         timer: 5000 // Changed to 2 seconds
//                     }).then(() => {
//                         location.reload();
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error canceling order:', error);
//                     alert('There was an error canceling your order. Please try again.');
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json())
//     ])
//     .then(([cart, products, shippedOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 // Show confirmation dialog first
//                 Swal.fire({
//                     title: 'Confirm Order',
//                     text: 'Are you sure you want to place this order?',
//                     icon: 'question',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, Place Order',
//                     cancelButtonText: 'Cancel',
//                     confirmButtonColor: '#3085d6',
//                     cancelButtonColor: '#d33'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         // If user confirms, proceed with order
//                         fetch('http://localhost:3000/orders', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify({
//                                 productId: productId,
//                                 userId: userId,
//                                 status: 'Ordered',
//                                 date: new Date().toISOString()
//                             })
//                         })
//                         .then(response => response.json())
//                         .then(orderData => {
//                             console.log('Order created:', orderData);

//                             return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                                 method: 'PATCH',
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 },
//                                 body: JSON.stringify({
//                                     status: 'Ordered'
//                                 })
//                             });
//                         })
//                         .then(() => {
//                             Swal.fire({
//                                 title: 'Order Placed Successfully!',
//                                 text: 'Thank you for your order!',
//                                 icon: 'success',
//                                 showConfirmButton: false,
//                                 timer: 2000
//                             }).then(() => {
//                                 location.reload();
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error placing order:', error);
//                             Swal.fire({
//                                 title: 'Error!',
//                                 text: 'There was an error placing your order. Please try again.',
//                                 icon: 'error',
//                                 confirmButtonText: 'OK'
//                             });
//                         });
//                     }
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/Delivered', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order delivered:', orderData);

//                     return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Delivered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'DELETE'
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Order Shipped!',
//                         text: 'We will deliver it soon.',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 2000
//                     }).then(() => {
//                         location.reload();
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error processing order:', error);
//                     alert('There was an error processing your order.');
//                 });
//             });
//         });

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 // Show confirmation dialog first
//                 Swal.fire({
//                     title: 'Cancel Order',
//                     text: 'Are you sure you want to cancel this order?',
//                     icon: 'warning',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, Cancel Order',
//                     cancelButtonText: 'No, Keep Order',
//                     confirmButtonColor: '#d33',
//                     cancelButtonColor: '#3085d6'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         fetch('http://localhost:3000/canceld', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify({
//                                 productId: productId,
//                                 userId: userId,
//                                 status: 'Canceled',
//                                 date: new Date().toISOString()
//                             })
//                         })
//                         .then(response => response.json())
//                         .then(orderData => {
//                             console.log('Order Canceled:', orderData);

//                             return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                                 method: 'PATCH',
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 },
//                                 body: JSON.stringify({
//                                     status: 'Canceled'
//                                 })
//                             });
//                         })
//                         .then(() => {
//                             Swal.fire({
//                                 title: 'Order Cancelled!',
//                                 text: 'We hope to serve you again soon.',
//                                 icon: 'error',
//                                 showConfirmButton: false,
//                                 timer: 2000
//                             }).then(() => {
//                                 location.reload();
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error canceling order:', error);
//                             Swal.fire({
//                                 title: 'Error!',
//                                 text: 'There was an error canceling your order. Please try again.',
//                                 icon: 'error',
//                                 confirmButtonText: 'OK'
//                             });
//                         });
//                     }
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });








// document.addEventListener('DOMContentLoaded', () => {
//     let userId = sessionStorage.getItem('userId');

//     if (!userId) {
//         document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
//         return;
//     }

//     Promise.all([
//         fetch('http://localhost:3000/cart').then(res => res.json()),
//         fetch('http://localhost:3000/products').then(res => res.json()),
//         fetch('http://localhost:3000/Shipped').then(res => res.json()),
//         fetch('http://localhost:3000/canceld').then(res => res.json()) 
//     ])
//     .then(([cart, products, shippedOrders, canceledOrders]) => {
//         let cartContainer = document.getElementById('cartContainer');
//         let userCart = cart.filter(item => item.userId === userId);

//         if (userCart.length === 0) {
//             cartContainer.innerHTML = '<p>Your cart is empty.</p>';
//             return;
//         }

//         userCart.forEach(cartItem => {
//             let product = products.find(p => p.id === cartItem.productId);

//             if (product) {
//                 let cartDiv = document.createElement('div');
//                 cartDiv.classList.add('cart-item');
//                 let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

//                 let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
//                 let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
//                 let buttonClass = isShipped ? 'just-shipped' : 'order-now';
                

//                 let isCanceled = canceledOrders.some(order => order.productId === product.id && order.userId === userId);
//                 if (isCanceled) {
//                     return;
//                 }

//                 cartDiv.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p><strong>Description:</strong> ${product.description}</p>
//                     <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                     <img src="${imageSrc}" alt="${product.name}" width="250px">
//                     <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
//                     <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
//                     <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
//                 `;

//                 cartContainer.appendChild(cartDiv);
//             }
//         });

//         document.querySelectorAll('.order-now').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 // Show confirmation dialog first
//                 Swal.fire({
//                     title: 'Confirm Order',
//                     text: 'Are you sure you want to place this order?',
//                     icon: 'question',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, Place Order',
//                     cancelButtonText: 'Cancel',
//                     confirmButtonColor: '#3085d6',
//                     cancelButtonColor: '#d33'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         // If user confirms, proceed with order
//                         fetch('http://localhost:3000/orders', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify({
//                                 productId: productId,
//                                 userId: userId,
//                                 status: 'Ordered',
//                                 date: new Date().toISOString()
//                             })
//                         })
//                         .then(response => response.json())
//                         .then(orderData => {
//                             console.log('Order created:', orderData);

//                             return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                                 method: 'PATCH',
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 },
//                                 body: JSON.stringify({
//                                     status: 'Ordered'
//                                 })
//                             });
//                         })
//                         .then(() => {
//                             Swal.fire({
//                                 title: 'Order Placed Successfully!',
//                                 text: 'Thank you for your order!',
//                                 icon: 'success',
//                                 showConfirmButton: false,
//                                 timer: 2000
//                             }).then(() => {
//                                 location.reload();
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error placing order:', error);
//                             Swal.fire({
//                                 title: 'Error!',
//                                 text: 'There was an error placing your order. Please try again.',
//                                 icon: 'error',
//                                 confirmButtonText: 'OK'
//                             });
//                         });
//                     }
//                 });
//             });
//         });

//         document.querySelectorAll('.just-shipped').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');

//                 fetch('http://localhost:3000/Delivered', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         productId: productId,
//                         userId: userId,
//                         status: 'Delivered',
//                         date: new Date().toISOString()
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(orderData => {
//                     console.log('Order delivered:', orderData);

//                     return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
//                         method: 'PATCH',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             status: 'Delivered'
//                         })
//                     });
//                 })
//                 .then(() => {
//                     return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                         method: 'DELETE'
//                     });
//                 })
//                 .then(() => {
//                     Swal.fire({
//                         title: 'Order Shipped!',
//                         text: 'We will deliver it soon.',
//                         icon: 'success',
//                         showConfirmButton: false,
//                         timer: 2000
//                     }).then(() => {
//                         location.reload();
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error processing order:', error);
//                     alert('There was an error processing your order.');
//                 });
//             });
//         });

//         document.querySelectorAll('.cancel_order').forEach(button => {
//             button.addEventListener('click', (event) => {
//                 let productId = event.target.getAttribute('data-product-id');
//                 let cartItemId = event.target.getAttribute('data-cart-id');
//                 let cartItemDiv = event.target.closest('.cart-item');

//                 Swal.fire({
//                     title: 'Cancel Order',
//                     text: 'Are you sure you want to cancel this order?',
//                     icon: 'warning',
//                     showCancelButton: true,
//                     confirmButtonText: 'Yes, Cancel Order',
//                     cancelButtonText: 'No, Keep Order',
//                     confirmButtonColor: '#d33',
//                     cancelButtonColor: '#3085d6'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         fetch('http://localhost:3000/canceld', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json'
//                             },
//                             body: JSON.stringify({
//                                 productId: productId,
//                                 userId: userId,
//                                 status: 'Canceld',
//                                 date: new Date().toISOString()
//                             })
//                         })
//                         .then(response => response.json())
//                         .then(orderData => {
//                             console.log('Order Canceled:', orderData);

//                             return fetch(`http://localhost:3000/cart/${cartItemId}`, {
//                                 method: 'PATCH',
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 },
//                                 body: JSON.stringify({
//                                     status: 'Canceled'
//                                 })
//                             });
//                         })
//                         .then(() => {
//                             Swal.fire({
//                                 title: 'Order Cancelled!',
//                                 text: 'We hope to serve you again soon.',
//                                 icon: 'error',
//                                 showConfirmButton: false,
//                                 timer: 2000
//                             }).then(() => {
//                                 cartItemDiv.remove();
//                             });
//                         })
//                         .catch(error => {
//                             console.error('Error canceling order:', error);
//                             Swal.fire({
//                                 title: 'Error!',
//                                 text: 'There was an error canceling your order. Please try again.',
//                                 icon: 'error',
//                                 confirmButtonText: 'OK'
//                             });
//                         });
//                     }
//                 });
//             });
//         });

//     })
//     .catch(error => {
//         console.error('Error fetching cart data:', error);
//         document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    let userId = sessionStorage.getItem('userId');

    if (!userId) {
        document.getElementById('cartContainer').innerHTML = '<p>You must log in to view your cart.</p>';
        return;
    }

    Promise.all([
        fetch('http://localhost:3000/cart').then(res => res.json()),
        fetch('http://localhost:3000/products').then(res => res.json()),
        fetch('http://localhost:3000/Shipped').then(res => res.json()),
        fetch('http://localhost:3000/canceld').then(res => res.json())
    ])
    .then(([cart, products, shippedOrders, canceledOrders]) => {
        let cartContainer = document.getElementById('cartContainer');
        let userCart = cart.filter(item => item.userId === userId);

        if (userCart.length === 0) {
            cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let displayedProductIds = new Set(); 

        userCart.forEach(cartItem => {
            if (displayedProductIds.has(cartItem.productId)) {
                return;  
            }

            displayedProductIds.add(cartItem.productId);

            let product = products.find(p => p.id === cartItem.productId);

            if (product) {
                let cartDiv = document.createElement('div');
                cartDiv.classList.add('cart-item');
                let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

                let isShipped = shippedOrders.some(order => order.productId === product.id && order.userId === userId);
                let buttonText = isShipped ? 'Just Shipped' : 'Order Now';
                let buttonClass = isShipped ? 'just-shipped' : 'order-now';

                let isCanceled = canceledOrders.some(order => order.productId === product.id && order.userId === userId);
                if (isCanceled) {
                    return;
                }

                cartDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <img src="${imageSrc}" alt="${product.name}" width="250px">
                    <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
                    <button class="${buttonClass}" data-product-id="${product.id}" data-cart-id="${cartItem.id}">${buttonText}</button>
                    <button class="cancel_order" data-product-id="${product.id}" data-cart-id="${cartItem.id}">Cancel</button>
                `;

                cartContainer.appendChild(cartDiv);
            }
        });

        document.querySelectorAll('.order-now').forEach(button => {
            button.addEventListener('click', (event) => {
                let productId = event.target.getAttribute('data-product-id');
                let cartItemId = event.target.getAttribute('data-cart-id');

                Swal.fire({
                    title: 'Confirm Order',
                    text: 'Are you sure you want to place this order?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Place Order',
                    cancelButtonText: 'Cancel',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch('http://localhost:3000/orders', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                productId: productId,
                                userId: userId,
                                status: 'Ordered',
                                date: new Date().toISOString()
                            })
                        })
                        .then(response => response.json())
                        .then(orderData => {
                            console.log('Order created:', orderData);

                            return fetch(`http://localhost:3000/cart/${cartItemId}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    status: 'Ordered'
                                })
                            });
                        })
                        .then(() => {
                            Swal.fire({
                                title: 'Order Placed Successfully!',
                                text: 'Thank you for your order!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 2000
                            }).then(() => {
                                location.reload();
                            });
                        })
                        .catch(error => {
                            console.error('Error placing order:', error);
                            Swal.fire({
                                title: 'Error!',
                                text: 'There was an error placing your order. Please try again.',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        });
                    }
                });
            });
        });

        document.querySelectorAll('.just-shipped').forEach(button => {
            button.addEventListener('click', (event) => {
                let productId = event.target.getAttribute('data-product-id');
                let cartItemId = event.target.getAttribute('data-cart-id');

                fetch('http://localhost:3000/Delivered', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        productId: productId,
                        userId: userId,
                        status: 'Delivered',
                        date: new Date().toISOString()
                    })
                })
                .then(response => response.json())
                .then(orderData => {
                    console.log('Order delivered:', orderData);

                    return fetch(`http://localhost:3000/Shipped/${cartItemId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            status: 'Delivered'
                        })
                    });
                })
                .then(() => {
                    return fetch(`http://localhost:3000/cart/${cartItemId}`, {
                        method: 'DELETE'
                    });
                })
                .then(() => {
                    Swal.fire({
                        title: 'Order Shipped!',
                        text: 'We will deliver it soon.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        location.reload();
                    });
                })
                .catch(error => {
                    console.error('Error processing order:', error);
                    alert('There was an error processing your order.');
                });
            });
        });

        document.querySelectorAll('.cancel_order').forEach(button => {
            button.addEventListener('click', (event) => {
                let productId = event.target.getAttribute('data-product-id');
                let cartItemId = event.target.getAttribute('data-cart-id');
                let cartItemDiv = event.target.closest('.cart-item');

                Swal.fire({
                    title: 'Cancel Order',
                    text: 'Are you sure you want to cancel this order?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Cancel Order',
                    cancelButtonText: 'No, Keep Order',
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch('http://localhost:3000/canceld', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                productId: productId,
                                userId: userId,
                                status: 'Canceled',
                                date: new Date().toISOString()
                            })
                        })
                        .then(response => response.json())
                        .then(orderData => {
                            console.log('Order Canceled:', orderData);

                            return fetch(`http://localhost:3000/cart/${cartItemId}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    status: 'Canceled'
                                })
                            });
                        })
                        .then(() => {
                            Swal.fire({
                                title: 'Order Cancelled!',
                                text: 'We hope to serve you again soon.',
                                icon: 'error',
                                showConfirmButton: false,
                                timer: 2000
                            }).then(() => {
                                cartItemDiv.remove();
                            });
                        })
                        .catch(error => {
                            console.error('Error canceling order:', error);
                            Swal.fire({
                                title: 'Error!',
                                text: 'There was an error canceling your order. Please try again.',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            });
                        });
                    }
                });
            });
        });

    })
    .catch(error => {
        console.error('Error fetching cart data:', error);
        document.getElementById('cartContainer').innerHTML = '<p>Failed to load your cart.</p>';
    });
});
