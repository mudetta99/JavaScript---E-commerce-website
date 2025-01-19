// document.getElementById('logoutBtn').addEventListener('click', function () {
//     if (confirm('Are you sure you want to logout?')) {
//         localStorage.removeItem('isLoggedIn'); 
//         localStorage.removeItem('userName'); 
//         // localStorage.removeItem('userId'); 
//         sessionStorage.removeItem('userId'); 
//         alert('You have been logged out successfully!');
//         window.location.href = '../index.html'; 
//     }
// });

// let dropdown = document.getElementsByClassName("dropdown")[0];

// if (!localStorage.getItem('isLoggedIn')) {
//     document.getElementById('logoutBtn').style.display = 'none'; 
//     if (dropdown) {
//         dropdown.style.display = 'none'; 
//     }
// }

// export { };

// First, make sure to import SweetAlert in your HTML:
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

// document.getElementById('logoutBtn').addEventListener('click', function () {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You will be logged out of your account",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, logout!',
//         cancelButtonText: 'Cancel'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             localStorage.removeItem('isLoggedIn');
//             localStorage.removeItem('userName');
//             sessionStorage.removeItem('userId');
            
//             Swal.fire({
//                 title: 'Logged Out!',
//                 text: 'You have been logged out successfully!',
//                 icon: 'success',
//                 timer: 1500
//             }).then(() => {
//                 window.location.href = '../index.html';
//             });
//         }
//     });
// });

// let dropdown = document.getElementsByClassName("dropdown")[0];

// if (!localStorage.getItem('isLoggedIn')) {
//     document.getElementById('logoutBtn').style.display = 'none';
//     if (dropdown) {
//         dropdown.style.display = 'none';
//     }
// }

// export { };


document.getElementById('logoutBtn').addEventListener('click', function () {
    Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout',
        cancelButtonText: 'No, stay logged in'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('isLoggedIn'); 
            localStorage.removeItem('userName'); 
            sessionStorage.removeItem('userId'); 
            
            Swal.fire(
                'Logged out!',
                'You have been logged out successfully.',
                'success'
            );
            
            window.location.href = '../index.html'; 
        }
    });
});

let dropdown = document.getElementsByClassName("dropdown")[0];

if (!localStorage.getItem('isLoggedIn')) {
    document.getElementById('logoutBtn').style.display = 'none'; 
    if (dropdown) {
        dropdown.style.display = 'none'; 
    }
}

export { };
