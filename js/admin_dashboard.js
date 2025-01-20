// document.addEventListener("DOMContentLoaded", () => {
//     let superAdminId = "1";
//     let usersList = document.getElementById('usersList');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");
            
//             pendingUsers.forEach(user => {
//                 let listItem = document.createElement('li');
//                 listItem.innerHTML = `
//                     ${user.name} (${user.email})
//                     <button onclick="approveUser('${user.id}')">Approve</button>
//                 `;
//                 usersList.appendChild(listItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }


// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('li');
//                 noPendingMessage.innerText = 'No pending users.';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let listItem = document.createElement('li');
//                 listItem.innerHTML = `
//                     ${user.name} (${user.email})
//                     <button onclick="approveUser('${user.id}')">Approve</button>
//                 `;
//                 usersList.appendChild(listItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }



// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }



// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');

//     // Fetch Pending Users
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch Ordered Products
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let orderedOrders = products.filter(product => product.status === "Ordered");

//             if (orderedOrders.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             orderedOrders.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td><button onclick="shipProduct('${product.id}')">Mark as Shipped</button></td>
//                 `;
//                 productsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });
// });

// // Approve User
// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//         .then(response => response.json())
//         .then(() => {
//             alert('User approved!');
//             location.reload();
//         })
//         .catch(error => {
//             console.error('Error approving user:', error);
//         });
// }

// // Ship Product
// function shipProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//         .then(response => response.json())
//         .then(() => {
//             alert('Product marked as shipped!');
//             location.reload();
//         })
//         .catch(error => {
//             console.error('Error marking product as shipped:', error);
//         });
// }



// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let orderedOrders = products.filter(product => product.status === "Ordered");

//             if (orderedOrders.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             orderedOrders.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td><button onclick="shipProduct('${product.id}')">Mark as Shipped</button></td>
//                 `;
//                 productsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let canceledProducts = products.filter(product => product.status === "Canceled");
//             canceledCount.textContent = `Canceled Products: ${canceledProducts.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled products:', error);
//             canceledCount.textContent = 'Failed to load canceled products count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }



// function shipProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Product marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking product as shipped:', error);
//     });
// }


// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = ` 
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let orderedOrders = products.filter(product => product.status === "Ordered");

//             if (orderedOrders.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             orderedOrders.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td><button onclick="shipProduct('${product.id}')">Mark as Shipped</button></td>
//                 `;
//                 productsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let canceledProducts = products.filter(product => product.status === "Canceled");
//             canceledCount.textContent = `Canceled Products: ${canceledProducts.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled products:', error);
//             canceledCount.textContent = 'Failed to load canceled products count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function shipProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Product marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking product as shipped:', error);
//     });
// }


// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch products with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedOrders = orders.filter(product => product.status === "Ordered");

//             if (orderedOrders.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             orderedOrders.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td><button onclick="shipProduct('${product.id}')">Mark as Shipped</button></td>
//                 `;
//                 productsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let canceledProducts = products.filter(product => product.status === "Canceled");
//             canceledCount.textContent = `Canceled Products: ${canceledProducts.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled products:', error);
//             canceledCount.textContent = 'Failed to load canceled products count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function shipProduct(productId) {
//     fetch(`http://localhost:3000/products/${productId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Product marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking product as shipped:', error);
//     });
// }


// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch orders with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedProducts = orders.filter(order => order.status === "Ordered");

//             if (orderedProducts.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             orderedProducts.forEach(order => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${order.productName}</td>
//                     <td>${order.price}</td>
//                     <td><button onclick="shipOrder('${order.id}')">Mark as Shipped</button></td>
//                 `;
//                 productsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let canceledOrders = orders.filter(order => order.status === "Canceled");
//             canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled orders:', error);
//             canceledCount.textContent = 'Failed to load canceled orders count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function shipOrder(orderId) {
//     fetch(`http://localhost:3000/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Order marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking order as shipped:', error);
//     });
// }



// ===================================

// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch orders with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedProducts = orders.filter(order => order.status === "Ordered");

//             if (orderedProducts.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             // Iterate over each order to fetch product details
//             orderedProducts.forEach(order => {
//                 // Fetch the product details using productId from the order
//                 fetch(`http://localhost:3000/products/${order.productId}`)
//                     .then(response => response.json())
//                     .then(product => {
//                         let row = document.createElement('tr');
//                         row.innerHTML = `
//                             <td>${product.name}</td>
//                             <td>${product.price}</td>
//                             <td><button onclick="shipOrder('${order.id}')">Mark as Shipped</button></td>
//                         `;
//                         productsList.appendChild(row);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching product details:', error);
//                     });
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let canceledOrders = orders.filter(order => order.status === "Canceled");
//             canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled orders:', error);
//             canceledCount.textContent = 'Failed to load canceled orders count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function shipOrder(orderId) {
//     fetch(`http://localhost:3000/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Order marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking order as shipped:', error);
//     });
// }
// ===================================



// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let pendingProductsList = document.getElementById('pendingProductsList');
//     let orderedProductsList = document.getElementById('orderedProductsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch products with status "Pending"
//     fetch('http://localhost:3000/products')
//         .then(response => response.json())
//         .then(products => {
//             let pendingProducts = products.filter(product => product.status === "pending");

//             if (pendingProducts.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="4">No pending products.</td>';
//                 pendingProductsList.appendChild(noPendingMessage);
//             }

//             pendingProducts.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td>${product.userId || 'N/A'}</td>
//                     <td><button onclick="approveProduct('${product.id}')">Approve</button></td>
//                 `;
//                 pendingProductsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });

//     // Fetch orders with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedProducts = orders.filter(order => order.status === "Ordered");

//             if (orderedProducts.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 orderedProductsList.appendChild(noOrderedMessage);
//             }

//             orderedProducts.forEach(order => {
//                 fetch(`http://localhost:3000/products/${order.productId}`)
//                     .then(response => response.json())
//                     .then(product => {
//                         let row = document.createElement('tr');
//                         row.innerHTML = `
//                             <td>${product.name}</td>
//                             <td>${product.price}</td>
//                             <td><button onclick="shipOrder('${order.id}')">Mark as Shipped</button></td>
//                         `;
//                         orderedProductsList.appendChild(row);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching product details:', error);
//                     });
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let canceledOrders = orders.filter(order => order.status === "Canceled");
//             canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled orders:', error);
//             canceledCount.textContent = 'Failed to load canceled orders count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }


// function approveProduct(productId) {
//     fetch(`http://localhost:3000/pending_products/${productId}`)
//         .then(response => response.json())
//         .then(product => {
//             fetch('http://localhost:3000/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//             .then(() => {
//                 return fetch(`http://localhost:3000/pending_products/${productId}`, {
//                     method: 'DELETE'
//                 });
//             })
//             .then(() => {
//                 alert('Product approved and moved to products list!');
//                 location.reload(); 
//             })
//             .catch(error => {
//                 console.error('Error approving product:', error);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product details:', error);
//         });
//     }
// function shipOrder(orderId) {
//     fetch(`http://localhost:3000/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Order marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking order as shipped:', error);
//     });
// }

// ===================================

// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let pendingProductsList = document.getElementById('pendingProductsList');
//     let orderedProductsList = document.getElementById('orderedProductsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch products with status "Pending"
//     fetch('http://localhost:3000/pending_products')
//         .then(response => response.json())
//         .then(products => {
//             if (products.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="4">No pending products.</td>';
//                 pendingProductsList.appendChild(noPendingMessage);
//             }

//             products.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.setAttribute('data-id', product.id); // Add data-id for easier manipulation
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td>${product.userId || 'N/A'}</td>
//                     <td><button onclick="approveProduct('${product.id}')">Approve</button></td>
//                 `;
//                 pendingProductsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });

//     // Fetch orders with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedProducts = orders.filter(order => order.status === "Ordered");

//             if (orderedProducts.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 orderedProductsList.appendChild(noOrderedMessage);
//             }

//             orderedProducts.forEach(order => {
//                 fetch(`http://localhost:3000/products/${order.productId}`)
//                     .then(response => response.json())
//                     .then(product => {
//                         let row = document.createElement('tr');
//                         row.innerHTML = `
//                             <td>${product.name}</td>
//                             <td>${product.price}</td>
//                             <td><button onclick="shipOrder('${order.id}')">Mark as Shipped</button></td>
//                         `;
//                         orderedProductsList.appendChild(row);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching product details:', error);
//                     });
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let canceledOrders = orders.filter(order => order.status === "Canceled");
//             canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled orders:', error);
//             canceledCount.textContent = 'Failed to load canceled orders count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function approveProduct(productId) {
//     fetch(`http://localhost:3000/pending_products/${productId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Product not found in pending_products.');
//             }
//             return response.json();
//         })
//         .then(product => {
//             // Add status as "approved" before moving to products
//             product.status = "approved";
//             return fetch('http://localhost:3000/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//             .then(() => fetch(`http://localhost:3000/pending_products/${productId}`, { method: 'DELETE' }));
//         })
//         .then(() => {
//             alert('Product approved and moved to products list!');
//             document.querySelector(`tr[data-id="${productId}"]`).remove();
//         })
//         .catch(error => {
//             console.error('Error approving product:', error);
//         });
// }

// function shipOrder(orderId) {
//     fetch(`http://localhost:3000/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('Order marked as shipped!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error marking order as shipped:', error);
//     });
// }


document.addEventListener("DOMContentLoaded", () => {
    let usersList = document.getElementById('usersList');
    let pendingProductsList = document.getElementById('pendingProductsList');
    let orderedProductsList = document.getElementById('orderedProductsList');
    let canceledCount = document.getElementById('canceledCount');

    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);  
        let pendingUsers = users.filter(user => user.status === "Pending");
        console.log(pendingUsers);  
        if (pendingUsers.length === 0) {
            let noPendingMessage = document.createElement('tr');
            noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
            usersList.appendChild(noPendingMessage);
        }
        pendingUsers.forEach(user => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><button onclick="approveUser('${user.id}')">Approve</button></td>
            `;
            usersList.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });


    // Fetch products with status "Pending"
    fetch('http://localhost:3000/pending_products')
        .then(response => response.json())
        .then(products => {
            if (products.length === 0) {
                let noPendingMessage = document.createElement('tr');
                noPendingMessage.innerHTML = '<td colspan="4">No pending products.</td>';
                pendingProductsList.appendChild(noPendingMessage);
            }

            products.forEach(product => {
                let row = document.createElement('tr');
                row.setAttribute('data-id', product.id); // Add data-id for easier manipulation
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.userId || 'N/A'}</td>
                    <td><button onclick="approveProduct('${product.id}')">Approve</button></td>
                `;
                pendingProductsList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    // Fetch orders with status "Ordered"
    fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then(orders => {
            let orderedProducts = orders.filter(order => order.status === "Ordered");

            if (orderedProducts.length === 0) {
                let noOrderedMessage = document.createElement('tr');
                noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
                orderedProductsList.appendChild(noOrderedMessage);
            }

            orderedProducts.forEach(order => {
                fetch(`http://localhost:3000/products/${order.productId}`)
                    .then(response => response.json())
                    .then(product => {
                        let row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td><button onclick="shipOrder('${order.id}')">Mark as Shipped</button></td>
                        `;
                        orderedProductsList.appendChild(row);
                    })
                    .catch(error => {
                        console.error('Error fetching product details:', error);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
        });

    // Fetch canceled products count
    fetch('http://localhost:3000/orders')
        .then(response => response.json())
        .then(orders => {
            let canceledOrders = orders.filter(order => order.status === "Canceled");
            canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
        })
        .catch(error => {
            console.error('Error fetching canceled orders:', error);
            canceledCount.textContent = 'Failed to load canceled orders count.';
        });
});

function approveUser(userId) {
    fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: 'Approved'
        })
    })
    .then(response => response.json())
    .then(() => {
        alert('User approved!');
        location.reload();
    })
    .catch(error => {
        console.error('Error approving user:', error);
    });
}

function approveProduct(productId) {
    fetch(`http://localhost:3000/pending_products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Product not found in pending_products.');
            }
            return response.json();
        })
        .then(product => {
            // Add status as "approved" before moving to products
            product.status = "approved";
            return fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(() => fetch(`http://localhost:3000/pending_products/${productId}`, { method: 'DELETE' }));
        })
        .then(() => {
            alert('Product approved and moved to products list!');
            document.querySelector(`tr[data-id="${productId}"]`).remove();
        })
        .catch(error => {
            console.error('Error approving product:', error);
        });
}

function shipOrder(orderId) {
    fetch(`http://localhost:3000/orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: 'Shipped'
        })
    })
    .then(response => response.json())
    .then(() => {
        alert('Order marked as shipped!');
        location.reload();
    })
    .catch(error => {
        console.error('Error marking order as shipped:', error);
    });
}




// document.addEventListener("DOMContentLoaded", () => {
//     let usersList = document.getElementById('usersList');
//     let productsList = document.getElementById('productsList');
//     let canceledCount = document.getElementById('canceledCount');

//     // Fetch users with status "Pending"
//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let pendingUsers = users.filter(user => user.status === "Pending");

//             if (pendingUsers.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="3">No pending users.</td>';
//                 usersList.appendChild(noPendingMessage);
//             }

//             pendingUsers.forEach(user => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td><button onclick="approveUser('${user.id}')">Approve</button></td>
//                 `;
//                 usersList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });

//     // Fetch orders with status "Ordered"
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let orderedProducts = orders.filter(order => order.status === "Ordered");

//             if (orderedProducts.length === 0) {
//                 let noOrderedMessage = document.createElement('tr');
//                 noOrderedMessage.innerHTML = '<td colspan="3">No ordered products.</td>';
//                 productsList.appendChild(noOrderedMessage);
//             }

//             // Iterate over each order to fetch product details
//             orderedProducts.forEach(order => {
//                 // Fetch the product details using productId from the order
//                 fetch(`http://localhost:3000/products/${order.productId}`)
//                     .then(response => response.json())
//                     .then(product => {
//                         let row = document.createElement('tr');
//                         row.innerHTML = `
//                             <td>${product.name}</td>
//                             <td>${product.price}</td>
//                             <td><button onclick="shipOrder('${order.id}', '${product.id}', '${order.userId}')">Mark as Shipped</button></td>
//                         `;
//                         productsList.appendChild(row);
//                     })
//                     .catch(error => {
//                         console.error('Error fetching product details:', error);
//                     });
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching orders:', error);
//         });

//     // Fetch canceled products count
//     fetch('http://localhost:3000/orders')
//         .then(response => response.json())
//         .then(orders => {
//             let canceledOrders = orders.filter(order => order.status === "Canceled");
//             canceledCount.textContent = `Canceled Orders: ${canceledOrders.length}`;
//         })
//         .catch(error => {
//             console.error('Error fetching canceled orders:', error);
//             canceledCount.textContent = 'Failed to load canceled orders count.';
//         });
// });

// function approveUser(userId) {
//     fetch(`http://localhost:3000/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Approved'
//         })
//     })
//     .then(response => response.json())
//     .then(() => {
//         alert('User approved!');
//         location.reload();
//     })
//     .catch(error => {
//         console.error('Error approving user:', error);
//     });
// }

// function shipOrder(orderId, productId, userId) {
//     // Get the current date
//     const date = new Date().toISOString();

//     // Update the order status to 'Shipped'
//     fetch(`http://localhost:3000/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             status: 'Shipped'
//         })
//     })
//     .then(() => {
//         // Add the shipped order details to the Shipped list
//         fetch('http://localhost:3000/Shipped', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: orderId,        // Order ID
//                 productId: productId, // Product ID
//                 userId: userId,     // User ID
//                 status: 'Shipped',   // Status of the order
//                 date: date          // Current date
//             })
//         })
//         .then(() => {
//             alert('Order marked as shipped!');
//             location.reload();  // Reload to reflect the changes
//         })
//         .catch(error => {
//             console.error('Error adding to shipped list:', error);
//         });
//     })
//     .catch(error => {
//         console.error('Error updating order status:', error);
//     });
// }



// ===================================







// document.addEventListener("DOMContentLoaded", () => {
//     let pendingProductsList = document.getElementById('pendingProductsList');

//     // Fetch pending products
//     fetch('http://localhost:3000/pending_products')
//         .then(response => response.json())
//         .then(products => {
//             if (products.length === 0) {
//                 let noPendingMessage = document.createElement('tr');
//                 noPendingMessage.innerHTML = '<td colspan="4">No pending products.</td>';
//                 pendingProductsList.appendChild(noPendingMessage);
//             }

//             products.forEach(product => {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${product.name}</td>
//                     <td>${product.price}</td>
//                     <td>${product.userId}</td>
//                     <td><button onclick="approveProduct('${product.id}')">Approve</button></td>
//                 `;
//                 pendingProductsList.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching pending products:', error);
//         });
// });

// // Approve product function
// function approveProduct(productId) {
//     // Fetch the product details
//     fetch(`http://localhost:3000/pending_products/${productId}`)
//         .then(response => response.json())
//         .then(product => {
//             // Add the product to the "products" list
//             fetch('http://localhost:3000/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             })
//             .then(() => {
//                 // Remove the product from "pending_products"
//                 return fetch(`http://localhost:3000/pending_products/${productId}`, {
//                     method: 'DELETE'
//                 });
//             })
//             .then(() => {
//                 alert('Product approved and moved to products list!');
//                 location.reload(); // Reload the page to update the UI
//             })
//             .catch(error => {
//                 console.error('Error approving product:', error);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching product details:', error);
//         });
// }
