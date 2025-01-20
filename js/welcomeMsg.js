if (localStorage.getItem('isLoggedIn') === 'true') {
    
    document.getElementById('registerBtn').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'none';


    
    let userName = localStorage.getItem('userName');
    let hasShownWelcomeMsg = localStorage.getItem('hasShownWelcomeMsg');



    if (!hasShownWelcomeMsg) {

        document.getElementById('welcome_msg').innerHTML = `Welcome ${userName}`;
        localStorage.setItem('hasShownWelcomeMsg', 'true');

        setTimeout(() => {
            document.getElementById('welcome_msg').innerHTML = ' ';
    }, 5000);
 
        
    }

}