document.addEventListener('DOMContentLoaded', () => {
    let userId = sessionStorage.getItem('userId');

    if (!userId) {
        document.getElementById('wishlistContainer').innerHTML = '<p>You must log in to view your wishlist.</p>';
        return;
    }

    let wishlistContainer = document.getElementById('wishlistContainer');
    wishlistContainer.innerHTML = '<p>Loading your wishlist...</p>';

    fetch(`http://localhost:3000/wishlist`)
        .then(res => res.json())
        .then(wishlist => {
            let userWishlist = wishlist.filter(item => item.userID === userId);

            if (userWishlist.length === 0) {
                wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
                return;
            }

            wishlistContainer.innerHTML = ''; 

            userWishlist.forEach(item => {
                fetch(`http://localhost:3000/products/${item.productId}`)
                    .then(res => res.json())
                    .then(product => {
                        let wishlistDiv = document.createElement('div');
                        wishlistDiv.classList.add('wishlist-item');
                        let imageSrc = product.image.startsWith('data:image') ? product.image : `../${product.image}`;

                        wishlistDiv.innerHTML = `
                            <h2>${product.name}</h2>
                            <p><strong>Description:</strong> ${product.description}</p>
                            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                            <img src="${imageSrc}" alt="${product.name}" width="250px">
                            <a href="productDetails.html?id=${product.id}" class="btn-details">View Details</a>
                            <button class="remove-wishlist" data-product-id="${product.id}" data-wishlist-id="${item.id}">Remove from Wishlist</button>
                        `;

                        wishlistContainer.appendChild(wishlistDiv);
                    })
                    .catch(error => {
                        console.error('Error fetching product data:', error);
                        wishlistContainer.innerHTML = '<p>Error loading products.</p>';
                    });
            });

            setTimeout(() => {
                document.querySelectorAll('.remove-wishlist').forEach(button => {
                    button.addEventListener('click', (event) => {
                        let productId = event.target.getAttribute('data-product-id');
                        let wishlistItemId = event.target.getAttribute('data-wishlist-id');

                        console.log("Product ID:", productId);
                        console.log("Wishlist Item ID:", wishlistItemId);

                        Swal.fire({
                            title: 'Remove from Wishlist',
                            text: 'Are you sure you want to remove this product from your wishlist?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, Remove',
                            cancelButtonText: 'Cancel',
                            confirmButtonColor: '#d33',
                            cancelButtonColor: '#3085d6'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                fetch(`http://localhost:3000/wishlist/${wishlistItemId}`, {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                .then(() => {
                                    Swal.fire({
                                        title: 'Removed from Wishlist!',
                                        text: 'The product has been removed from your wishlist.',
                                        icon: 'success',
                                        showConfirmButton: false,
                                        timer: 2000
                                    }).then(() => {
                                        location.reload();
                                    });
                                })
                                .catch(error => {
                                    console.error('Error removing from wishlist:', error);
                                    Swal.fire({
                                        title: 'Error!',
                                        text: 'There was an error removing the product from your wishlist. Please try again.',
                                        icon: 'error',
                                        confirmButtonText: 'OK'
                                    });
                                });
                            }
                        });
                    });
                });
            }, 500); 

        })
        .catch(error => {
            console.error('Error fetching wishlist data:', error);
            wishlistContainer.innerHTML = '<p>Failed to load your wishlist.</p>';
        });
});
