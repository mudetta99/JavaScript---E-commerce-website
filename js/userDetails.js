document.addEventListener("DOMContentLoaded", () => {
    // let userId = localStorage.getItem("userId");
    let userId = sessionStorage.getItem('userId');

    let userName = localStorage.getItem("userName");

    if (!userId) {

        let userDetailsBtn = document.getElementsByClassName("dropdown");
        userDetailsBtn.style.display = 'none';

        // alert("User is not logged in!");
        // window.location.href = "../html/login.html";
        return;
    }

    fetch(`http://localhost:3000/users/${userId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch user details");
            }
            return response.json();
        })
        .then((user) => {
            document.getElementById("userName").textContent = user.name;
            document.getElementById("userEmail").textContent = user.email;
            document.getElementById("userRole").textContent = user.role;

            let userDetailsBtn = document.getElementById("userDetailsBtn");
            userDetailsBtn.textContent = userName || "User";
        })
        .catch((error) => {
            // console.error("Error fetching user details:", error);
            // alert("Failed to load user details.");
        });
});


export { }; 