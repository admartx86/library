let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary();
    document.getElementById('book-form').reset();
    document.getElementById('book-form').style.display = 'none';
});

let addBookButton = document.getElementById('add-book');
addBookButton.addEventListener('click', function() {
    let BookForm = document.getElementById('book-form');
    BookForm.style.display = 'block';
});

function displayBooks() {
    let bookshelf = document.getElementById('bookshelf');
    bookshelf.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card');
        let readChecked = book.read ? 'checked' : '';
        bookCard.innerHTML = 
        `
        <p>${book.title}<p>
        <p>${book.author}<p>
        <p>${book.pages}<p>
        <p>Read <input type="checkbox" ${readChecked} name="read" onclick="toggleRead(${i})"></radio><p>
        <p><button class="remove-book" onclick="removeCard(${i})">Remove</button><p>
        `
        ;
        bookshelf.appendChild(bookCard);
    }
}

function removeCard(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}