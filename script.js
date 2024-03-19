function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    // Check if the username and password match the admin credentials
    if (email === "admin@gmail.com" && password === "admin") {
        // If credentials match, redirect the user to the home page
        window.location.href = "home.html";
    } else {
        // If credentials do not match, display an error message
        alert("Invalid username or password. Please try again.");
    }

    // For simplicity, let's assume a valid login for any non-empty input
    if (email.trim() !== '' && password.trim() !== '') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function validateSignup() {
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;

    // Add your signup validation logic here
    // For simplicity, let's assume a valid signup for any non-empty input
    if (newEmail.trim() !== '' && newPassword.trim() !== '') {
        alert('Signup successful!');
    } else {
        alert('Invalid input. Please try again.');
    }
}

function loginWithFacebook() {
    // Add logic to handle login with Facebook
    alert('Login with Facebook clicked');
}

function loginWithGoogle() {
    // Add logic to handle login with Google
    alert('Login with Google clicked');
}
