// Admin login functionality   
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // Plain text credentials
    const validUsername = 'YWRtaW4=';
    const validPassword = 'TCVAc3V0SyRjTldoUlE1WGdlQGJnY0t5a05KYUNjTzRLJkVxIzd0aE0wZU9MI2VkMnImVEpFRA';

    loginForm.addEventListener('login', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        if (username === atob(validUsername) && password === atob(validPassword)) {
            // Redirect to another page after successful login
            window.location.href = "https://dash.bobflix.uk/"; // Change to your desired page
        } else {
            loginError.textContent = 'Invalid username or password.';
        }
    });
});
