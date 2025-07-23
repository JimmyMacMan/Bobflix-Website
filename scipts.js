// ac-status check
const url = "https://ac.bobflix.uk";
fetch("https://ac.bobflix.uk")
    .then(response => response.text())
    .then(text => {
        if (text.includes("Bad gateway")) {
            document.getElementById('ac-status').textContent = 'Offline';
            document.getElementById('ac-status').style.color = '#ff4444';
        } else {
            document.getElementById('ac-status').textContent = 'Online';
            document.getElementById('ac-status').style.color = '#00e676';
        }
    })
    .catch(() => {
        document.getElementById('ac-status').textContent = 'Offline';
        document.getElementById('ac-status').style.color = '#ff4444';
    });

 // Admin login functionality   
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // Plain text credentials
    const validUsername = 'YWRtaW4=';
    const validPassword = 'V2luZG93czk=';

    loginForm.addEventListener('submit', function(e) {
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
