// Admin Dashboard Book Management Logic
// Handles add, edit, delete, and display of books for admin

document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('admin-book-form');
    const booksTableBody = document.querySelector('#admin-books-table tbody');
    let books = JSON.parse(localStorage.getItem('books')) || [];
    let editIndex = null;

    function renderBooks() {
        booksTableBody.innerHTML = '';
        books.forEach((book, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${book.tags}</td>
                <td>${book.status}</td>
                <td>
                    <button class="edit-btn" data-idx="${idx}">Edit</button>
                    <button class="delete-btn" data-idx="${idx}">Delete</button>
                </td>
            `;
            booksTableBody.appendChild(tr);
        });
    }

    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const book = {
            isbn: document.getElementById('isbn').value,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            category: document.getElementById('category').value,
            tags: document.getElementById('tags').value,
            status: document.getElementById('status').value
        };
        if (editIndex !== null) {
            books[editIndex] = book;
            editIndex = null;
            bookForm.querySelector('button[type="submit"]').textContent = 'Add Book';
        } else {
            books.push(book);
        }
        localStorage.setItem('books', JSON.stringify(books));
        bookForm.reset();
        renderBooks();
    });

    booksTableBody.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-btn')) {
            editIndex = e.target.dataset.idx;
            const book = books[editIndex];
            document.getElementById('isbn').value = book.isbn;
            document.getElementById('title').value = book.title;
            document.getElementById('author').value = book.author;
            document.getElementById('category').value = book.category;
            document.getElementById('tags').value = book.tags;
            document.getElementById('status').value = book.status;
            bookForm.querySelector('button[type="submit"]').textContent = 'Update Book';
        } else if (e.target.classList.contains('delete-btn')) {
            const idx = e.target.dataset.idx;
            books.splice(idx, 1);
            localStorage.setItem('books', JSON.stringify(books));
            renderBooks();
        }
    });

    renderBooks();
});
