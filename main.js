

const myLibrary=[];


function Book(title, author,pageNum, hasRead){
    this.title=title;
    this.author=author;
    this.pageNum=pageNum;
    this.hasRead=hasRead;
}

function createBook(title, author, pageNum, hasRead){
    addBookToLibrary( new Book(title,author,pageNum,hasRead));
}

function addBookToLibrary(book){
    myLibrary.push(book);

}
Book.prototype.toggleReadStatus= function(){
    if(this.hasRead===true){
        this.hasRead=false;
    }else if(this.hasRead===false){
        this.hasRead=true;
    }
}

Book.prototype.displayBook=function(){
    const book=document.createElement('div');
    book.classList.add('book');
    book.setAttribute('data-index', myLibrary.indexOf(this));

    const author=document.createElement('h3');
    author.classList.add('author');
    author.textContent=this.author;

    const title=document.createElement('p');
    title.classList.add('title')
    title.textContent=this.title;

    const pageNum=document.createElement('p');
    pageNum.classList.add('pages')
    pageNum.textContent=this.pageNum + " pages";

    const hasRead=document.createElement('p')
    hasRead.classList.add('read-status');
    hasRead.textContent=this.hasRead? "Read": "Not Read";

    const deleteButton=document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent="Delete";

    deleteButton.addEventListener('click', function(e){
        const bookDiv=e.target.parentElement;
        const bookIndex=bookDiv.getAttribute('data-index');
        myLibrary.splice(bookIndex,1);
        updateLibraryDisplay();
    });

    const changeReadStatusButton=document.createElement('button');
    changeReadStatusButton.classList.add('read-status-button');
    changeReadStatusButton.textContent='Change Read Status';

    changeReadStatusButton.addEventListener('click', (e)=>{
        this.toggleReadStatus();
        hasRead.textContent=this.hasRead? "Read": "Not Read";
    });

    book.append(title,author,pageNum,hasRead,changeReadStatusButton, deleteButton);
    document.getElementById('book-container').appendChild(book);
}

function updateLibraryDisplay(){
    const bookContainer=document.getElementById('book-container');
    bookContainer.innerHTML="";
    myLibrary.forEach(book=>book.displayBook());
}

const showBtn=document.getElementById('show-dialog');
const dialog=document.getElementById('dialog');

showBtn.addEventListener("click", () =>{
    dialog.showModal();
});

const form=document.getElementById('dialogForm');
const title=form.elements['title'];
const author=form.elements['author'];
const pageNumber=form.elements['pageNumber'];
const readStatus=form.elements['readStatus'];

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    createBook(title.value, author.value, pageNumber.value, readStatus.value==="true"? true : false );
    updateLibraryDisplay();
    dialog.close();
    form.reset();
    
})


document.addEventListener("DOMContentLoaded", ()=>{
    updateLibraryDisplay();
});

function displayLibrary(library){
    library.forEach(element=>{
        element.displayBook();
    });
}

displayLibrary(myLibrary);

/*let myLibrary = []

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
document.getElementById("show-dialog").addEventListener("click", function(){
    document.getElementById("dialogForm").style.display = 'block';
});
  
document.getElementById('cancel-btn').addEventListener('click', function() {
  document.getElementById('dialogForm').style.display = 'none';
  });
  
  document.getElementById('dialogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read-status").value;
    let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
    document.getElementById('dialogForm').style.display = 'none';
    document.getElementById('dialogForm').reset();
  });

  function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card")
    bookEl.innerHTML = `
    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p id="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
      <button id="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}
function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}



/*
  document.getElementById("show-dialog").addEventListener("click", function(){
    document.getElementById("dialogForm").style.display = 'block';
});
const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card")
    bookEl.innerHTML = `
    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}
function removeBook(index){
  myLibrary.splice(index, 1);
}
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").Checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
} 
let newBookbtn = document.querySelector("show-dialog");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("dialogForm");
  newBookForm.style.display = "block";
})

.document.querySelector("dialogForm").addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
})*/
