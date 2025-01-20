// window.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('productForm').addEventListener('submit', function (event) {
//         event.preventDefault();

//         let userId = localStorage.getItem('userId');
//         let userRole = localStorage.getItem('userRole');

//         if (!userId || userRole === 'Consumer') {
//             document.getElementById('addProductsBtn').style.display = 'none';
//             return;
//         }

//         let productData = {
//             name: document.getElementById('name').value,
//             description: document.getElementById('description').value,
//             price: parseFloat(document.getElementById('price').value),
//             image: document.getElementById('image').value, 
//             userId: userId,
//             status: 
//         };

//         fetch('http://localhost:3000/products', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(productData)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Product added successfully!', data);
//             alert('Product added successfully!');
//             window.location.href = '../index.html'; 
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             alert('Failed to add product!');
//         });
//     });
// });



// // window.addEventListener('DOMContentLoaded', function () {
// //     document.getElementById('productForm').addEventListener('submit', function (event) {
// //         event.preventDefault();

// //         let userId = sessionStorage.getItem('userId');
// //         // let userId = localStorage.getItem('userId');
// //         let userRole = localStorage.getItem('userRole');

// //         if (!userId || userRole === 'Consumer') {
// //             document.getElementById('addProductsBtn').style.display = 'none';
// //             return;
// //         }

// //         let imageInput = document.getElementById('image');
// //         let file = imageInput.files[0]; 
// //         if (!file) {
// //             alert('Please select an image!');
// //             return;
// //         }

// //         let reader = new FileReader();
// //         reader.onload = function (e) {
// //             let base64Image = e.target.result;

// //             let productData = {
// //                 name: document.getElementById('name').value,
// //                 description: document.getElementById('description').value,
// //                 price: parseFloat(document.getElementById('price').value),
// //                 image: base64Image,
// //                 userId: userId,
// //                 status: 'pending'
// //             };

// //             fetch('http://localhost:3000/products', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(productData)
// //             })
// //                 .then(response => {
// //                     if (!response.ok) {
// //                         throw new Error(`Error: ${response.status}`);
// //                     }
// //                     return response.json();
// //                 })
// //                 .then(data => {
// //                     console.log('Product added successfully!', data);
// //                     alert('Product added successfully!');
// //                     window.location.href = '../index.html';
// //                 })
// //                 .catch((error) => {
// //                     console.error('Error:', error);
// //                     alert('Failed to add product!');
// //                 });
// //         };

// //         reader.onerror = function () {
// //             alert('Failed to read the image file.');
// //         };

// //         reader.readAsDataURL(file); 
// //     });
// // });





// window.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('productForm').addEventListener('submit', function (event) {
//         event.preventDefault();

//         let userId = sessionStorage.getItem('userId');
//         // let userId = localStorage.getItem('userId');
//         let userRole = localStorage.getItem('userRole');

//         if (!userId || userRole === 'Consumer') {
//             document.getElementById('addProductsBtn').style.display = 'none';
//             return;
//         }

//         const imageInput = document.getElementById('image');
//         const file = imageInput.files[0]; 
//         if (!file) {
//             alert('Please select an image!');
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const base64Image = e.target.result;

//             const productData = {
//                 name: document.getElementById('name').value,
//                 description: document.getElementById('description').value,
//                 price: parseFloat(document.getElementById('price').value),
//                 image: base64Image,
//                 userId: userId
//             };

//             fetch('http://localhost:3000/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(productData)
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`Error: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log('Product added successfully!', data);
//                     alert('Product added successfully!');
//                     window.location.href = '../index.html';
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     alert('Failed to add product!');
//                 });
//         };

//         reader.onerror = function () {
//             alert('Failed to read the image file.');
//         };

//         reader.readAsDataURL(file); 
//     });
// });



// Edit After create pending_products





// window.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('productForm').addEventListener('submit', function (event) {
//         event.preventDefault();

//         let userId = sessionStorage.getItem('userId');
//         // let userId = localStorage.getItem('userId');
//         let userRole = localStorage.getItem('userRole');

//         if (!userId || userRole === 'Consumer') {
//             document.getElementById('addProductsBtn').style.display = 'none';
//             return;
//         }

//         const imageInput = document.getElementById('image');
//         const file = imageInput.files[0]; 
//         if (!file) {
//             alert('Please select an image!');
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const base64Image = e.target.result;

//             const productData = {
//                 name: document.getElementById('name').value,
//                 description: document.getElementById('description').value,
//                 price: parseFloat(document.getElementById('price').value),
//                 image: base64Image,
//                 userId: userId,
//                 date: new Date().toISOString()
//             };

//             fetch('http://localhost:3000/pending_products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(productData)
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`Error: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log('Product added successfully!', data);
//                     alert('Product added successfully!');
//                     window.location.href = '../index.html';
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     alert('Failed to add product!');
//                 });
//         };

//         reader.onerror = function () {
//             alert('Failed to read the image file.');
//         };

//         reader.readAsDataURL(file); 
//     });
// });







// window.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('productForm').addEventListener('submit', function (event) {
//         event.preventDefault();

//         let userId = sessionStorage.getItem('userId');
//         let userRole = localStorage.getItem('userRole');

//         if (!userId || userRole === 'Consumer') {
//             document.getElementById('addProductsBtn').style.display = 'none';
//             return;
//         }

//         const imageInput = document.getElementById('image');
//         const file = imageInput.files[0];
//         if (!file) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Please select an image!',
//             });
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = function (e) {
//             const base64Image = e.target.result;

//             const productData = {
//                 name: document.getElementById('name').value,
//                 description: document.getElementById('description').value,
//                 price: parseFloat(document.getElementById('price').value),
//                 image: base64Image,
//                 userId: userId,
//                 date: new Date().toISOString()
//             };

//             fetch('http://localhost:3000/pending_products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(productData)
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`Error: ${response.status}`);
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     console.log('Product added successfully!', data);
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Product Added!',
//                         text: 'Your product has been added successfully.',
//                         showConfirmButton: true,
//                     }).then(() => {
//                         window.location.href = '../index.html';
//                     });
//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Failed to Add Product',
//                         text: 'Something went wrong. Please try again later.',
//                     });
//                 });
//         };

//         reader.onerror = function () {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Failed to read the image file.',
//             });
//         };

//         reader.readAsDataURL(file);
//     });
// });


window.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/categories') 
        .then(response => response.json())
        .then(data => {
            const categorySelect = document.getElementById('category');

            categorySelect.innerHTML = '<option value="">Select Category</option>';

            data.forEach(category => {
                const option = document.createElement("option");
                option.value = category.id;
                option.textContent = category.category;
                categorySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });

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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select an image!',
            });
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
                userId: userId,
                status: 'Pending',
                date: new Date().toISOString()
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
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Added!',
                        text: 'Your product has been added successfully.',
                        showConfirmButton: true,
                    }).then(() => {
                        window.location.href = '../index.html';
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Add Product',
                        text: 'Something went wrong. Please try again later.',
                    });
                });
        };

        reader.onerror = function () {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to read the image file.',
            });
        };

        reader.readAsDataURL(file);
    });
});
