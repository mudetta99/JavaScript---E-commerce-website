window.addEventListener('DOMContentLoaded', function () {
    // let userId = localStorage.getItem('userId');
    let userId = sessionStorage.getItem('userId');

    let userRole = localStorage.getItem('userRole');

    if (!userId || userRole === 'Consumer') {
        document.getElementById('MyproductsBtn').style.display = 'none';
        document.getElementById('addProductsBtn').style.display = 'none';
        return;
    }

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            let userProducts = products.filter(product => product.userId === userId);
            let productsContainer = document.getElementById('productsContainer');

            if (userProducts.length === 0) {
                productsContainer.innerHTML = '<p>No products added yet.</p>';
            } else {
                userProducts.forEach(product => {
                    let productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    
                    let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;
                    
                    productDiv.innerHTML = `
                        <h2>${product.name}</h2>
                        <p><strong>Description:</strong> ${product.description}</p>
                        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                        <img src="${imageSrc}" alt="${product.name}" width="350px">
                        <div class="buttons">
                            <button class="btn edit_btn" onclick="editProduct('${product.id}')">Edit</button>
                            <button class="btn delete_btn" onclick="deleteProduct('${product.id}')">Delete</button>
                        </div>
                    `;
                    productsContainer.appendChild(productDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            document.getElementById('productsContainer').innerHTML = '<p>Failed to load products.</p>';
        });
});

function editProduct(productId) {
    window.location.href = `editProduct.html?id=${productId}`;
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        fetch(`http://localhost:3000/products/${productId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('Product deleted successfully!');
                location.reload();
            } else {
                alert('Failed to delete the product.');
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            alert('Failed to delete the product.');
        });
    }
}
