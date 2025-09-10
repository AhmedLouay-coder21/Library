const myLibrary = [];
const Books = document.getElementById("Books");
const newBookButton = document.getElementById("newBook");
const form = document.getElementById("formContent");

newBookButton.addEventListener("click", () => {
  form.classList.add("visible");

});
form.addEventListener("submit", function(event) {
  //prevent from reloading the page on submit
  event.preventDefault();
  // getting the data the user submitted from the form.
  formTitle = document.getElementById("title").value;
  formAuthor = document.getElementById("author").value;
  formPages = document.getElementById("Pages#").value;
  formIsRead = document.getElementById("isRead").value;
  //getting the last index in the array to add the last book
  const lastBookNumber = myLibrary.length;
  //add the book info to the books array
  addBookToLibrary(formTitle,formAuthor,formPages,formIsRead);
  //display the new book info
  displayBookInfo(lastBookNumber);
});
function Book(title, author, numberOfPages, isRead) {
  // the constructor...
  if(!new.target)
  {
    throw new error("You must use the 'new' operator to use the constructor!");
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
const editIcon = document.createElement('img');
editIcon.src = "data:image/png;base64,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";
editIcon.alt = "edit icon";
editIcon.style.alignContent = "end";
// display books info in a table
function displayBookInfo(i)
{
    const editIcon = document.createElement('img');
    const newLine = document.createElement("tr");
    editIcon.src = "data:image/png;base64,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";
    editIcon.alt = "edit icon";
    editIcon.style.cursor = "pointer";
    editIcon.style.height = "15px";
    editIcon.addEventListener("click", () => {
    myLibrary[i].isRead = prompt("Please enter the new status", "Yes/No/Intend To/in 1 week");
      isRead.textContent = myLibrary[i].isRead;
      newLine.appendChild(isRead);
      isRead.appendChild(editIcon);
    });
    const deleteIcon = document.createElement('img');
    deleteIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////g4ODGxsaGhobx8fH4+PgtLS1JSUm2trYYGBgiIiLPz8/c3Nw9PT1DQ0N6eno1NTXW1taSkpK/v7+tra1zc3NYWFjn5+egoKCYmJgQEBCnp6dSUlJlZWWAgIDj3+fQAAADY0lEQVR4nO2ca5uyIBCGVzxiWmmeKtP//y/X2nYdfDPABmz3nedbXDDc4chJmI+P5Yrr/nAsy7K4yv1SwYuCl0evC18w/IJOeeDMi/GtdaLw+AToLre2y1QxOZPjBK1FpFihmb6U76xBuapMQ2NZ8qw4UWcaqOw4lkY7XeXbYDroMTlOcjbOVPu6UM7BOFSuzeQ4sWGmy7TCwP9X056+NAxViES82m0mOc5xWJ/EZ+yb7a0iobZktrKMW/QqT2B69lqVMGdqFAq6+fOHcha6M6NQ0IWPz7MKr0RnkCmETj718KngaHQyCFWDenJZZuh/3CBUBeqRzpXgPygMQvU6r/nFEhR8Ip4scxTYgdoDqL0sc4YL1fGENQ/GNGFQezToiZJlbljq9qpLMXF8MyyWKTFxuSVMNSptFenP4l5TrwDVy83gKlGAUl7TYalRgCrlZnClstyx7OdqUFY7hF8N9WaPr3OLouCNbaiAX3cC5+axntyAOc11DKtCsRko63051Nzsei8vak5zg81bQlXyogR1U7cmlPuOUHNLi1pe1D7ULk+SPGUpGwSy+wxXwPT151BhPlSssoUFRkDkHZMMrAHUVjI/AiUrXKgtMK257UhQBEVQBEVQC6DAMAP2ETdNcx/AGgYMtt+prHHH3aaY/2RugI3t8mFmBmpMDaIxGaxfGYACu/tg13YFqJSgCIqgCIqgCIqgCIqgCOpPQYFvvCtDgf02ZKgdONygeT7cDpTstBNBERRBERRBERRBEdSfgAIGCWotKM3pcGoFSvOWD0ERFEER1C+CAoeICIqgCIqgkKGiMVUXCtxYfUsocN8TG0qPiaAIyiQUuNGCAQUv3f4XUM5lTAbXt+BJs8d9HQ4UvJq9HQXiEoRjKvxYlo3JYNOgRodCEA4UcgSN7h2hcFoKOawATkshX5avUKDmrtks1B4FCjnUiIcC5eOGkEqWQ8EAKK7mfulTCUGZNMsKtyITvLZqoV1db82ESGqBW97UHgcd7vIk+s53LXO8FeeFeHVX+6S78JfMiGm7xdk8lDSKxwpNpRKSYKrNkphcGloWFm5rFmphTKrOZDSOxbO0+lkYytf0QpilnVbwQHU1KhFKZnU2EiZkPhaaKlarFCVTXb4byWuVKqwOLXdRVJSnXgHpE40+ZKC0OuQOAAAAAElFTkSuQmCC"
    deleteIcon.style.cursor = "pointer";
    deleteIcon.style.marginTop = "20px";
    deleteIcon.style.height = "30px";
    deleteIcon.addEventListener("click", () => {
      if (confirm("Are you sure that you want to delete this book?")) 
        {
        myLibrary.splice(i,1);
        newLine.remove();
        alert("The book has been deleted!");
        } 
      else 
      {
        alert("The deletion is canceled");
      }
    });
    Books.appendChild(newLine);
    const title = document.createElement("td");
    title.style.backgroundColor = "aquamarine";
    const author = document.createElement("td");
    author.style.backgroundColor = "#4e9fe5";
    
    const numberOfPages = document.createElement("td");
    numberOfPages.style.backgroundColor = "aquamarine";

    const isRead = document.createElement("td");
    isRead.style.backgroundColor = "#4e9fe5";

    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    numberOfPages.textContent = myLibrary[i].numberOfPages;
    isRead.textContent = myLibrary[i].isRead;
    newLine.appendChild(deleteIcon);
    newLine.appendChild(title);
    newLine.appendChild(author);
    newLine.appendChild(numberOfPages);
    newLine.appendChild(isRead);
    isRead.appendChild(editIcon);
}
//a loop that gets all the books from the array to display them
for(let i = 0; i < myLibrary.length; i++)
{
  displayBookInfo(i);
}