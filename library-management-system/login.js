// login.js - Login form logic

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');
    const togglePasswordBtn = document.getElementById('togglePassword');

    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (password.type === 'password') {
            password.type = 'text';
            togglePasswordBtn.textContent = '🙈';
        } else {
            password.type = 'password';
            togglePasswordBtn.textContent = '👁️';
        }
    });

    // Simple email validation
    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    email.addEventListener('input', () => {
        if (!validateEmail(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    loginForm.addEventListener('submit', function(e) {
        let valid = true;
        if (!validateEmail(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        } else {
            passwordError.textContent = '';
        }
        if (!valid) {
            e.preventDefault();
            return;
        }
        // Simulate login and redirect based on user role (for demo)
        e.preventDefault();
        // Example: Replace with real AJAX/fetch to login.php and handle response
        // For demonstration, use hardcoded roles
        const demoEmail = email.value.trim().toLowerCase();
        if (demoEmail === 'admin@library.com') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'user-dashboard.html';
        }
    });
});
