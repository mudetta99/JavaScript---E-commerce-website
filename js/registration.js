document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        password: document.getElementById('password').value,
        status: 'Pending'
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration success:', data);
        alert('Registration successful! Awaiting approval from Super Admin.');

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', formData.name);
        // localStorage.setItem('userId', data.id);
        sessionStorage.setItem('userId', data.id);
        localStorage.setItem('userRole', data.role);
        localStorage.setItem('userStatus', data.status);

        window.location.href = '../html/pending.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});

