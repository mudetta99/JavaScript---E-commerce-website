window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('productForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let userId = sessionStorage.getItem('userId');
        let userRole = localStorage.getItem('userRole');

        if (!userId || userRole === 'Consumer') {
            document.getElementById('addProductsBtn').style.display = 'none';
            return;
        }

        const imageInput = document.getElementById('image');
        const file = imageInput.files[0]; 
        if (!file) {
            alert('Please select an image!');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const base64Image = e.target.result;

            const productData = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                price: parseFloat(document.getElementById('price').value),
                image: base64Image,
                userId: userId
            };

            fetch('http://localhost:3000/pending_products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Product added successfully!', data);
                    alert('Product added successfully!');
                    window.location.href = '../index.html';
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Failed to add product!');
                });
        };

        reader.onerror = function () {
            alert('Failed to read the image file.');
        };

        reader.readAsDataURL(file); 
    });
});
