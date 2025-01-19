document.addEventListener("DOMContentLoaded", () => {
    let pendingProductsList = document.getElementById('pendingProductsList');

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
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.userId}</td>
                    <td><button onclick="approveProduct('${product.id}')">Approve</button></td>
                `;
                pendingProductsList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching pending products:', error);
        });
});

function approveProduct(productId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to approve this product?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, approve it!',
        cancelButtonText: 'No, cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/pending_products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    fetch('http://localhost:3000/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                    .then(() => {
                        return fetch(`http://localhost:3000/pending_products/${productId}`, {
                            method: 'DELETE'
                        });
                    })
                    .then(() => {
                        Swal.fire({
                            title: 'Approved!',
                            text: 'Product approved and moved to products list!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            location.reload();
                        });
                    })
                    .catch(error => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'There was an error approving the product.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                        console.error('Error approving product:', error);
                    });
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error fetching product details.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                    console.error('Error fetching product details:', error);
                });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: 'Cancelled',
                text: 'The product was not approved.',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
}
