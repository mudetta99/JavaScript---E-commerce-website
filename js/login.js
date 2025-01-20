// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     // let userDetailsBtn = document.getElementById('userDetailsBtn');

//     fetch('http://localhost:3000/users')
//         .then(response => response.json())
//         .then(users => {
//             let user = users.find(u => u.email === email && u.password === password);

//             if (user) {
//                 alert('Login successful!');
                
//                 // console.log('Logged in user:', user);
//                 sessionStorage.setItem('userId', user.id);

//                 localStorage.setItem('isLoggedIn', 'true'); 
//                 localStorage.setItem('userName', user.name);
//                 // localStorage.setItem('userId', user.id);
//                 localStorage.setItem('userRole', user.role);
//                 localStorage.setItem('userStatus', user.status);

//                 // let userName = localStorage.getItem("userName");
//                 // userDetailsBtn.textContent = userName;

//                 let userStatus = localStorage.getItem('userStatus');
//                 if (userStatus === 'Pending') {
//                     window.location.href = "pending.html";
//                 } else {
//                     window.location.href = '../index.html'; 
//                 }
//             } else {
//                 alert('Invalid email or password.');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Login failed!');
//         });
// });




document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                Swal.fire({
                    title: 'Login Successful',
                    text: 'Welcome back, ' + user.name + '!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000, 
                    timerProgressBar: true 
                }).then(() => {
                    sessionStorage.setItem('userId', user.id);
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('userName', user.name);
                    localStorage.setItem('userRole', user.role);
                    localStorage.setItem('userStatus', user.status);

                    let userStatus = localStorage.getItem('userStatus');
                    if (userStatus === 'Pending') {
                        window.location.href = "pending.html";
                    } else {
                        window.location.href = '../index.html';
                    }
                });
            } else {
                Swal.fire({
                    title: 'Invalid Credentials',
                    text: 'Please check your email and password.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Login Failed',
                text: 'There was an issue with the login request. Please try again.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        });
});
