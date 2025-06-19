// This file contains the JavaScript code for the library management system.
// It handles user interactions, manages the library data, and updates the HTML dynamically.

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');
    const loginForm = document.getElementById('login-form');
    let currentUser = null;
    let books = [];

    // User and Book Data (in-memory for demo)
    const users = [
        { username: 'admin', password: 'admin123', role: 'admin' },
        { username: 'user', password: 'user123', role: 'user' }
    ];

    addBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;

        if (title && author) {
            const book = { title, author };
            books.push(book);
            displayBooks();
            addBookForm.reset();
        }
    });

    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                books.splice(index, 1);
                displayBooks();
            });
            li.appendChild(removeButton);
            bookList.appendChild(li);
        });
    }

    // Authentication
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            const user = users.find(u => u.username === username && u.password === password && u.role === role);
            if (user) {
                currentUser = user;
                if (role === 'admin') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'user-dashboard.html';
                }
            } else {
                alert('Invalid credentials!');
            }
        });
    }
});