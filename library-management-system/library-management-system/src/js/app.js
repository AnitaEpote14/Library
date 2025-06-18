// This file contains the JavaScript code for the library management system.
// It handles user interactions, manages the library data, and updates the HTML dynamically.

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');
    const books = [];

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
});