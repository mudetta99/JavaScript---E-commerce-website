// document.addEventListener('DOMContentLoaded', () => {
//     let userDetailsBtn = document.getElementById('userDetailsBtn');
//     let superAdminBtn = document.getElementById('superAdminBtn');

//     let userRole = localStorage.getItem("userRole");

//     // if (superAdminLocalStorage !== "Super Admin") {
//     //     superAdminBtn.style.display = "none"; 
//     // }

//     if (role === "Super Admin") {
//         superAdminBtn.style.display = "block"; 
//     } else {
//         superAdminBtn.style.display = "none"; 
        
//     }

//     // console.log(superAdminLocalStorage);
    
//     if (userDetailsBtn) {
//         let userName = localStorage.getItem("userName");
//         if (userName) {
//             userDetailsBtn.textContent = userName;
//         } else {
//             userDetailsBtn.textContent = "User Name"; 
//         }
//     }
// });




// document.addEventListener('DOMContentLoaded', () => {
//     let userDetailsBtn = document.getElementById('userDetailsBtn');
//     let superAdminBtn = document.getElementById('superAdminBtn');

//     let userName = localStorage.getItem("userName");
//     let userRole = localStorage.getItem("userRole");

//     userDetailsBtn.textContent = userName;

//     if (userRole === "Super Admin") {
//         superAdminBtn.style.display = "block"; 
//     } else {
//         superAdminBtn.style.display = "none"; 
        
//     }


// });


document.addEventListener('DOMContentLoaded', () => {
    let userDetailsBtn = document.getElementById('userDetailsBtn');
    let superAdminBtn = document.getElementById('superAdminBtn');
    let sellerBtn = document.getElementById('sellerBtn'); 

    let userName = localStorage.getItem("userName");
    let userRole = localStorage.getItem("userRole");

    userDetailsBtn.textContent = userName;

    if (userRole === "Super Admin") {
        superAdminBtn.style.display = "block"; 
    } else {
        superAdminBtn.style.display = "none"; 
    }

    if (userRole === "Seller") {
        sellerBtn.style.display = "block";
    } else {
        sellerBtn.style.display = "none";
    }
});
