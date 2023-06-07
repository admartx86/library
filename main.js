let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
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

