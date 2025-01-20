// document.addEventListener("DOMContentLoaded", () => {
//     let userId = localStorage.getItem("userId");
//     let isLoggedIn = localStorage.getItem("isLoggedIn");




//     // Navbar HTML structure
//     let navBarHTML = `
//         <nav>
//             <div class="nav-links">
//                 <a href="html/register.html" id="registerBtn">Register</a>
//                 <a href="html/login.html" id="loginBtn">Login</a>
//                 <a href="index.html" id="logoutBtn">Logout</a>
//                 <a href="html/products.html" id="productsBtn">All Products</a>
//                 <a href="html/myproducts.html" id="MyproductsBtn">My Products</a>
//                 <a href="html/addProducts.html" id="addProductsBtn">Add Product</a>
//                 <a href="html/myCart.html" id="myCartBtn">My Cart</a>
//             </div>
//             <a href="html/userDetails.html" id="userDetailsBtn" >User Name</a>
//         </nav>
//     `;

    

//     // Insert navbar into the page
//     let navBarContainer = document.createElement("div");
//     navBarContainer.innerHTML = navBarHTML;
//     document.body.insertBefore(navBarContainer, document.body.firstChild);

    
//     if (!isLoggedIn) {
//         let userDetailsBtn = document.getElementById("userDetailsBtn");
//         userDetailsBtn.style.display = 'none';
        
//     }

//     let registerBtn = document.getElementById('registerBtn');
//     let loginBtn = document.getElementById('loginBtn');

//     if (registerBtn) {
//         registerBtn.style.display = 'none'; 
//     }

//     if (loginBtn) {
//         loginBtn.style.display = 'none'; 
//     }


//     // Update the user name dynamically
//     if (userId) {
//         fetch(`http://localhost:3000/users/${userId}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch user data");
//                 }
//                 return response.json();
//             })
//             .then((user) => {
//                 let userDetailsBtn = document.getElementById("userDetailsBtn");
//                 userDetailsBtn.textContent = user.name || "User";
//             })
//             .catch((error) => {
//                 console.error("Error fetching user details:", error);
//             });
//     }
// });


// export { };



// let navBarContainer = document.getElementById("navbar");

// if (navBarContainer) {
//     fetch("html/navBar.html")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Failed to load navigation bar");
//             }
//             return response.text();
//         })
//         .then(data => {
//             navBarContainer.innerHTML = data;
//         })
//         .catch(error => {
//             console.error("Error loading navigation bar:", error);
//         });
// }


export const loadNavBar = () => {
    let navBarContainer = document.getElementById("navbar");

    if (navBarContainer) {
        fetch("../html/navBar.html") 
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load navigation bar");
                }
                return response.text();
            })
            .then(data => {
                navBarContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading navigation bar:", error);
            });
    }
};

