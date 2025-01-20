document.addEventListener('DOMContentLoaded', () => {
    let userId = sessionStorage.getItem('userId');
  
    if (!userId) {
      document.getElementById('sellerProductsList').innerHTML = '<p>You must log in to view your products.</p>';
      return;
    }

    Promise.all([
      fetch('http://localhost:3000/products').then(res => res.json()),
      fetch('http://localhost:3000/orders').then(res => res.json()),
      fetch(`http://localhost:3000/users/${userId}`).then(res => res.json()) 
    ])
    .then(([products, orders, user]) => {
      let sellerProductsList = document.getElementById('sellerProductsList');
      
      document.querySelector('h1').innerText = `Welcome, ${user.name}!`; 
  
      let sellerProducts = products.filter(product => product.userId === userId);
  
      if (sellerProducts.length === 0) {
        sellerProductsList.innerHTML = '<p>You have no products.</p>';
        return;
      }
  
      sellerProducts.forEach(product => {
        let soldCount = orders.filter(order => order.productId === product.id).length;
  
        let productRow = document.createElement('tr');
        productRow.innerHTML = `
          <td>${product.name}</td>
          <td>$${product.price.toFixed(2)}</td>
          <td>${soldCount}</td>
        `;
        sellerProductsList.appendChild(productRow);
      });
    })
    .catch(error => {
      console.error('Error fetching products or orders:', error);
      document.getElementById('sellerProductsList').innerHTML = '<p>Failed to load your products.</p>';
    });
  });
