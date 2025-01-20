// let productId = sessionStorage.getItem('selectedProductId');

// if (!productId) {
//     document.getElementById('productDetailsContainer').innerHTML = '<p>Product not found.</p>';
// } else {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(product => {
//             fetch(`http://localhost:3000/users/${product.userId}`)
//                 .then(userResponse => {
//                     if (!userResponse.ok) {
//                         throw new Error(`Error fetching seller: ${userResponse.status}`);
//                     }
//                     return userResponse.json();
//                 })
//                 .then(user => {
//                     let productDetailsContainer = document.getElementById('productDetailsContainer');

//                     productDetailsContainer.innerHTML = `
//                         <h1>${product.name}</h1>
//                         <p><strong>Description:</strong> ${product.description}</p>
//                         <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                         <p><strong>Seller:</strong> ${user.name}</p>
//                         <img src="${product.image}" alt="${product.name}" class="product-image" width="250px">
//                         <button onclick="goBack()">Back</button>
//                     `;
//                 })
//                 .catch(userError => {
//                     console.error('Error fetching seller details:', userError);
//                     document.getElementById('productDetailsContainer').innerHTML = `
//                         <h1>${product.name}</h1>
//                         <p><strong>Description:</strong> ${product.description}</p>
//                         <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                         <p><strong>Seller:</strong> Unknown</p>
//                         <img src="${product.image}" alt="${product.name}" class="product-image">
//                         <button onclick="goBack()">Back</button>
//                     `;
//                 });
//         })
//         .catch(error => {
//             console.error('Error fetching product details:', error);
//             document.getElementById('productDetailsContainer').innerHTML = '<p>Failed to load product details.</p>';
//         });
// }

// function goBack() {
//     window.history.back();
// }



// let productId = sessionStorage.getItem('selectedProductId');

// if (!productId) {
//     document.getElementById('productDetailsContainer').innerHTML = '<p>Product not found.</p>';
// } else {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(product => {
//             fetch(`http://localhost:3000/users/${product.userId}`)
//                 .then(userResponse => {
//                     if (!userResponse.ok) {
//                         throw new Error(`Error fetching seller: ${userResponse.status}`);
//                     }
//                     return userResponse.json();
//                 })
//                 .then(user => {
//                     let productDetailsContainer = document.getElementById('productDetailsContainer');

//                     productDetailsContainer.innerHTML = `
//                         <img src="${product.image}" alt="${product.name}" class="product-image">
//                         <div class="product-details">
//                             <h1>${product.name}</h1>
//                             <p><strong>Description:</strong> ${product.description}</p>
//                             <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                             <p><strong>Seller:</strong> ${user.name}</p>
//                             <button onclick="goBack()">Back</button>
//                         </div>
//                     `;
//                 })
//                 .catch(userError => {
//                     console.error('Error fetching seller details:', userError);
//                     document.getElementById('productDetailsContainer').innerHTML = `
//                         <img src="${product.image}" alt="${product.name}" class="product-image">
//                         <div class="product-details">
//                             <h1>${product.name}</h1>
//                             <p><strong>Description:</strong> ${product.description}</p>
//                             <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                             <p><strong>Seller:</strong> Unknown</p>
//                             <button onclick="goBack()">Back</button>
//                         </div>
//                     `;
//                 });
//         })
//         .catch(error => {
//             console.error('Error fetching product details:', error);
//             document.getElementById('productDetailsContainer').innerHTML = '<p>Failed to load product details.</p>';
//         });
// }

// function goBack() {
//     window.history.back();
// }


// let productId = sessionStorage.getItem('selectedProductId');

// if (!productId) {
//     document.getElementById('productDetailsContainer').innerHTML = '<p>Product not found.</p>';
// } else {
//     fetch(`http://localhost:3000/products/${productId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(product => {
//             fetch(`http://localhost:3000/users/${product.userId}`)
//                 .then(userResponse => {
//                     if (!userResponse.ok) {
//                         throw new Error(`Error fetching seller: ${userResponse.status}`);
//                     }
//                     return userResponse.json();
//                 })
//                 .then(user => {
//                     let productDetailsContainer = document.getElementById('productDetailsContainer');

//                     productDetailsContainer.innerHTML = `
//                         <img src="${product.image}" alt="${product.name}" class="product-image">
//                         <div class="product-details">
//                             <h1>${product.name}</h1>
//                             <p><strong>Description:</strong> ${product.description}</p>
//                             <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                             <p><strong>Seller:</strong> ${user.name}</p>
//                             <button onclick="goBack()">Back</button>
//                         </div>
//                     `;
//                 })
//                 .catch(userError => {
//                     console.error('Error fetching seller details:', userError);
//                     document.getElementById('productDetailsContainer').innerHTML = `
//                         <img src="${product.image}" alt="${product.name}" class="product-image">
//                         <div class="product-details">
//                             <h1>${product.name}</h1>
//                             <p><strong>Description:</strong> ${product.description}</p>
//                             <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//                             <p><strong>Seller:</strong> Unknown</p>
//                             <button onclick="goBack()">Back</button>
//                         </div>
//                     `;
//                 });
//         })
//         .catch(error => {
//             console.error('Error fetching product details:', error);
//             document.getElementById('productDetailsContainer').innerHTML = '<p>Failed to load product details.</p>';
//         });
// }

// function goBack() {
//     window.history.back();
// }

// // Handle Review Submission
// let reviewForm = document.getElementById('reviewForm');
// let reviewText = document.getElementById('reviewText');

// reviewForm.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent the form from submitting the usual way

//     // Get the current date and time for the review
//     let date = new Date().toISOString();
    
//     // Get the userID (this could be fetched from sessionStorage, a cookie, or another source)
//     let userId = sessionStorage.getItem('userId'); // Assume userID is stored in sessionStorage

//     // Get product name (already retrieved from the product API)
//     let productName = document.querySelector('h1').innerText; // Product name displayed on the page

//     let reviewData = {
//         productId: productId,
//         userId: userId,
//         productName: productName, // Adding product name to the review data
//         review: reviewText.value,
//         date: date
//     };

//     // Send the review data to the reviews endpoint
//     fetch('http://localhost:3000/reviews', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(reviewData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Review submitted successfully:', data);
//         alert('Your review has been submitted!');
        
//         // Optionally, reset the form and display new reviews
//         reviewText.value = '';
//     })
//     .catch(error => {
//         console.error('Error submitting review:', error);
//         alert('Failed to submit review. Please try again.');
//     });
// });


let productId = sessionStorage.getItem('selectedProductId');

if (!productId) {
    document.getElementById('productDetailsContainer').innerHTML = '<p>Product not found.</p>';
} else {
    fetch(`http://localhost:3000/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(product => {
            fetch(`http://localhost:3000/users/${product.userId}`)
                .then(userResponse => {
                    if (!userResponse.ok) {
                        throw new Error(`Error fetching seller: ${userResponse.status}`);
                    }
                    return userResponse.json();
                })
                .then(user => {
                    let productDetailsContainer = document.getElementById('productDetailsContainer');

                    productDetailsContainer.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-details">
                            <h1>${product.name}</h1>
                            <p><strong>Description:</strong> ${product.description}</p>
                            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                            <p><strong>Seller:</strong> ${user.name}</p>
                            <button title="Back To Previous Page" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                        </div>
                    `;

                    fetch(`http://localhost:3000/reviews?productId=${productId}`)
                        .then(reviewResponse => reviewResponse.json())
                        .then(reviews => {
                            let reviewsList = document.getElementById('reviewsList');
                            if (reviews.length === 0) {
                                reviewsList.innerHTML = '<p>No reviews yet.</p>';
                            } else {
                                reviewsList.innerHTML = '';
                                reviews.forEach(review => {
                                    fetch(`http://localhost:3000/users/${review.userId}`)
                                        .then(userResponse => userResponse.json())
                                        .then(user => {
                                            let reviewElement = document.createElement('div');
                                            reviewElement.classList.add('review');
                                            reviewElement.style.textAlign = 'left';
                                            reviewElement.innerHTML = `
                                                 
                                                <p><i class="fas fa-user"></i> User: <strong>${user.name}</strong></p>
                                                <p><i class="fas fa-heading"></i> Review: <strong>${review.review}</strong></p>
                                                
                                                <small><i class="fas fa-clock"></i> </i>${review.date}</small>

                                            `;
                                            reviewsList.appendChild(reviewElement);
                                        })
                                        .catch(userError => {
                                            console.error('Error fetching user details for review:', userError);
                                            let reviewElement = document.createElement('div');
                                            reviewElement.classList.add('review');
                                            reviewElement.innerHTML = `
                                                <p><strong>Unknown</strong> on ${review.date}</p>
                                                <p>${review.review}</p>
                                            `;
                                            reviewsList.appendChild(reviewElement);
                                        });
                                });
                            }
                        })
                        .catch(reviewError => {
                            console.error('Error fetching reviews:', reviewError);
                        });

                })
                .catch(userError => {
                    console.error('Error fetching seller details:', userError);
                    document.getElementById('productDetailsContainer').innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-details">
                            <h1>${product.name}</h1>
                            <p><strong>Description:</strong> ${product.description}</p>
                            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                            <p><strong>Seller:</strong> Unknown</p>
                            <button title="Back To Previous Page" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
                        </div>
                    `;
                });
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
            document.getElementById('productDetailsContainer').innerHTML = '<p>Failed to load product details.</p>';
        });
}

{/* <button class="btnBack" onclick="goBack()">
    <i class="fas fa-arrow-left"></i> Back
</button> */}

function goBack() {
    window.history.back();
}

let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

let reviewForm = document.getElementById('reviewForm');
let reviewText = document.getElementById('reviewText');
let h2 = document.querySelector("h2");


if (!isLoggedIn) {
    reviewForm.style.display = 'none';
    h2.style.display = 'none';
}

reviewForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    let userId = sessionStorage.getItem('userId'); 

    let productName = document.querySelector('h1').innerText; 

    let reviewData = {
        productId: productId,
        userId: userId,
        productName: productName, 
        review: reviewText.value,
        date: new Date().toISOString()
    };

    fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Review Submitted!',
            text: 'Your review has been submitted successfully.',
            timer: 2000
        });
        
        
        reviewText.value = '';
        
        loadReviews();
    })
    .catch(error => {
        console.error('Error submitting review:', error);
        Swal.fire({
            icon: 'error',
            title: 'Failed to Submit Review',
            text: 'Please try again.',
            timer: 2000,
            showConfirmButton: false
        });
    });
});


function loadReviews() {
    let productId = sessionStorage.getItem('selectedProductId');
    if (productId) {
        fetch(`http://localhost:3000/reviews?productId=${productId}`)
            .then(response => response.json())
            .then(reviews => {
                let reviewsList = document.getElementById('reviewsList');
                if (reviews.length === 0) {
                    reviewsList.innerHTML = '<p>No reviews yet.</p>';
                } else {
                    reviewsList.innerHTML = '';
                    reviews.forEach(review => {
                        fetch(`http://localhost:3000/users/${review.userId}`)
                            .then(userResponse => userResponse.json())
                            .then(user => {
                                let reviewElement = document.createElement('div');
                                reviewElement.classList.add('review');
                                reviewElement.innerHTML = `
                                    <strong>${user.name}</strong>
                                    <p>${review.review}</p>
                                    <span>${review.date}</span>
                                `;
                                reviewsList.appendChild(reviewElement);
                            })
                            .catch(userError => {
                                console.error('Error fetching user details for review:', userError);
                                let reviewElement = document.createElement('div');
                                reviewElement.classList.add('review');
                                reviewElement.innerHTML = `
                                    <p><strong>Unknown</strong></p>
                                    <p>${review.review}</p>
                                    <span>${review.date}</span>
                                `;
                                reviewsList.appendChild(reviewElement);
                            });
                    });
                }
            })
            .catch(error => {
                console.error('Error loading reviews:', error);
            });
    }
}

document.addEventListener('DOMContentLoaded', loadReviews);
