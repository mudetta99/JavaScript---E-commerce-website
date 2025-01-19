window.addEventListener('DOMContentLoaded', function () {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    // if (!productId) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Error!',
    //         text: 'Undefind product !!',
    //         confirmButtonText: 'OK',
    //     }).then(() => {
    //         window.location.href = '../html/myProducts.html';
    //     });
    //     return;
    // }

    let product_name = document.getElementById("product_name");
    // let displayProductName = document.getElementById('name').value;
    

    let imageInput = document.getElementById('image');
    let currentImage = document.getElementById('currentImage');

    fetch(`http://localhost:3000/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('name').value = product.name;
            document.getElementById('description').value = product.description;
            document.getElementById('price').value = product.price;
            currentImage.src = product.image;
            product_name.textContent = product.name;
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
            Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Failed to load product details!',
                confirmButtonText: 'Retry',
            });
        });

    imageInput.addEventListener('change', function () {
        let file = imageInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                currentImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('editProductForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let file = imageInput.files[0];
        let updatedProduct = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            price: parseFloat(document.getElementById('price').value),
        };

        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                updatedProduct.image = e.target.result;
                saveProduct(updatedProduct);
            };
            reader.readAsDataURL(file);
        } else {
            saveProduct(updatedProduct); 
        }
    });

    function saveProduct(updatedProduct) {
        fetch(`http://localhost:3000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Product updated successfully .. !',
                confirmButtonText: 'Go Back',
            })
            window.location.href = '../html/myProducts.html';
        })
        .catch(err => {
            console.error('Error:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to update product .. !',
                confirmButtonText: 'Retry',
            });
        });
    }
});
