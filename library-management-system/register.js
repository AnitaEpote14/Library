// register.js - Registration form logic

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const email = document.getElementById('regEmail');
    const password = document.getElementById('regPassword');
    const confirmPassword = document.getElementById('regConfirmPassword');
    const name = document.getElementById('regFullname');
    const emailError = document.getElementById('regEmailError');
    const passwordError = document.getElementById('regPasswordError');
    const confirmError = document.getElementById('regConfirmError');
    const nameError = document.getElementById('regNameError');

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

    password.addEventListener('input', () => {
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
        } else {
            passwordError.textContent = '';
        }
        if (confirmPassword.value && password.value !== confirmPassword.value) {
            confirmError.textContent = 'Passwords do not match.';
        } else {
            confirmError.textContent = '';
        }
    });

    confirmPassword.addEventListener('input', () => {
        if (password.value !== confirmPassword.value) {
            confirmError.textContent = 'Passwords do not match.';
        } else {
            confirmError.textContent = '';
        }
    });

    name.addEventListener('input', () => {
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Please enter your full name.';
        } else {
            nameError.textContent = '';
        }
    });

    form.addEventListener('submit', function(e) {
        let valid = true;
        if (!validateEmail(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        }
        if (password.value !== confirmPassword.value) {
            confirmError.textContent = 'Passwords do not match.';
            valid = false;
        }
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Please enter your full name.';
            valid = false;
        }
        if (!valid) e.preventDefault();
    });
});
