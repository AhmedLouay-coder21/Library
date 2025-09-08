const myLibrary = [];
const Books = document.getElementById("Books");
function Book(title, author, numberOfPages, isRead) {
  // the constructor...
  if(!new.target)
  {
    throw error("You must use the 'new' operator to use the constructor!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}
function addBookToLibrary(title, author, numberOfPages, isRead) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, numberOfPages, isRead);
  myLibrary.push(book);
}

addBookToLibrary("Oliver Twist","Charles Dickens","608", "Yes");
addBookToLibrary("Test","Me","0", "No");
console.log(myLibrary[0]);
function displayBookInfo(i)
{
    const newLine = document.createElement("tr");
    Books.appendChild(newLine);
    const title = document.createElement("td");
    const author = document.createElement("td");
    const numberOfPages = document.createElement("td");
    const isRead = document.createElement("td");
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    numberOfPages.textContent = myLibrary[i].numberOfPages;
    isRead.textContent = myLibrary[i].isRead;
    newLine.appendChild(title);
    newLine.appendChild(author);
    newLine.appendChild(numberOfPages);
    newLine.appendChild(isRead);
}
for(let i = 0; i < myLibrary.length; i++)
{
  displayBookInfo(i);
}