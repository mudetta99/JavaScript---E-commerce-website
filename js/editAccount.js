document.getElementById('editAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userId = sessionStorage.getItem('userId'); 
    const userRole = localStorage.getItem('userRole');
    const userStatus = localStorage.getItem('userStatus'); 
    const userPassword = localStorage.getItem('userPassword'); 

    const updatedData = {
        name: document.getElementById('name').value || '',
        email: document.getElementById('email').value || '',
        password: document.getElementById('password').value || userPassword,
        role: userRole, 
        status: userStatus 
    };

    if (!updatedData.name || !updatedData.email || !updatedData.password) {
        alert('All fields are required!');
        return;
    }

    fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            alert('Account updated successfully!');
            window.location.href = '../html/pending.html';  
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update account. Please try again later.');
    });
});
