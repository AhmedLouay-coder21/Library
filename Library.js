const myLibrary = [];

function Book(title,author) {
  // the constructor...
  if(!new.target)
  {
    throw error("You must use the 'new' operator to use the constructor!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
}
function addBookToLibrary(title,author) {
  // take params, create a book then store it in the array
  const book = new Book(title, author);
  myLibrary.push(book);
}