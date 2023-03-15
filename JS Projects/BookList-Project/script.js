/*
01. Booklist project with OOP
02. Preparing UI
03. Add Books
04. Validation
05. Delete Books
06. Add Local Storage
*/
// Select UI elements
const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

//Book class object
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class object
class UI {
  //   constructor(){//no property so write static methods
  // }
  static addToBookList(book) {
    //method 01
    //console.log(book);
    let list = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
  }
  static emptyForm() {
    //method 02
    document.getElementById("b-title").value = "";
    document.getElementById("b-author").value = "";
    document.getElementById("b-isbn").value = "";
  }
  static showAlert(message, className) {
    //method 03
    let div = document.createElement("div");
    div.className = `alert ${className}`; //alert is bult-in class of skeletoncss
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  static deleteFromBook(target) {
    //console.log(target);
    if (target.hasAttribute("href")) {
      //console.log(target);
      //console.log(target.parentElement.parentElement);
      target.parentElement.parentElement.remove();

      Store.removeBooksFromLS(target.parentElement.previousElementSibling.textContent.trim()); //access isbn

      UI.showAlert("Book removed", "success");
    }
  }
}

//Local Storage class object
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem("books") === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBooks(book){
   let books = Store.getBooks();
   books.push(book);

   localStorage.setItem("books", JSON.stringify(books));
  }
  static displayBooks(book){
    let books = Store.getBooks();//have or not check
    books.forEach(book => {
      UI.addToBookList(book);
    });
   }
   static removeBooksFromLS(isbn){
    let books = Store.getBooks();//have or not check
    books.forEach((book, index) => {
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
   }
}

//Add addEventListener
form.addEventListener("submit", newBook);
bookList.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", Store.displayBooks());

//Define function
function newBook(e) {
  //input value start
  let title = document.getElementById("b-title").value;
  let author = document.getElementById("b-author").value;
  let isbn = document.getElementById("b-isbn").value;
  //input value end

  //let ui = new UI();//no need extend class bcz static method of object
  //validation start with condtion
  if ((title === "") | (author === "") | (isbn === "")) {
    //alert("alert")
    UI.showAlert("Please fill all the fields", "error"); //ui of function call
  } else {
    //call from book class start
    let book = new Book(title, author, isbn);
    //call from Book class end

    //call from UI class start
    UI.addToBookList(book); //pass book obj
    UI.emptyForm();
    UI.showAlert("New book added", "success"); //pass class for message
    //call from UI class end

    //call from Store class start
    Store.addBooks(book);
    //call from Store class end
  }
  //validation end with condtion

  //for data hide problem
  e.preventDefault();
}

function removeBook(e) {
  //let ui = new UI();//no need extend class bcz static method of object
  UI.deleteFromBook(e.target);

  //for data hide problem
  e.preventDefault();
}
