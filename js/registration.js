// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         role: document.getElementById('role').value,
//         password: document.getElementById('password').value
//     };


//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Registration success:', data);
//         alert('Registration successful!');
//         // localStorage.setItem('userRole', user.role);
        
//         window.location.href = '../index.html';
// 0
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Registration failed!');
//     });
// });


// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         role: document.getElementById('role').value,
//         password: document.getElementById('password').value
//     };

//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Registration success:', data);
//         alert('Registration successful!');

//         localStorage.setItem('isLoggedIn', 'true');
//         localStorage.setItem('userName', formData.name);
//         localStorage.setItem('userId', data.id);
//         localStorage.setItem('userRole', data.role);

//         window.location.href = '../index.html';
//     })
//     // .catch((error) => {
//     //     console.error('Error:', error);
//     //     alert('Registration failed!');
//     // });
// });



// document.getElementById('registrationForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         role: document.getElementById('role').value,
//         password: document.getElementById('password').value,
//         status: 'Pending'
//     };

//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Registration success:', data);
//         alert('Registration successful! Awaiting approval from Super Admin.');

//         localStorage.setItem('isLoggedIn', 'true');
//         localStorage.setItem('userName', formData.name);
//         // localStorage.setItem('userId', data.id);
//         sessionStorage.setItem('userId', data.id);
//         localStorage.setItem('userRole', data.role);
//         localStorage.setItem('userStatus', data.status);

//         window.location.href = 'html/pending.html';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Registration failed!');
//     });
// });



document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            let user = users.find(u => u.email === email);

            if (user) {
                Swal.fire({
                    title: 'Email Already Registered',
                    text: 'This email is already in use. Please use a different one.',
                    icon: 'warning',
                    confirmButtonText: 'Try Again'
                });
            } else {
                const newUser = {
                    email: email,
                    password: password,
                    name: 'New User',
                    role: 'Customer',
                    status: 'Active' 
                };

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(response => response.json())
                    .then(data => {
                        Swal.fire({
                            title: 'Registration Successful',
                            text: 'You have been successfully registered!',
                            icon: 'success',
                            confirmButtonText: 'Proceed'
                        }).then(() => {
                            window.location.href = '../index.html';
                        });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            title: 'Registration Failed',
                            text: 'An error occurred while processing your registration. Please try again later.',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        });
                    });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error',
                text: 'An error occurred while checking the user data. Please try again.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        });
});
