
// add new book

let currentBookNumber = 0;

let container = document.querySelector('.container');



let readButton = document.querySelectorAll('.read');
let removeBook = document.querySelectorAll('.delete');

let add = document.querySelector('.add');
let title = document.querySelector('[name="title"]');
let author = document.querySelector('[name="author"]');
let pages = document.querySelector('[name="pages"]');
let read = document.querySelector('[name="read"]');

const getData = function() {
  return window['book' + currentBookNumber] = new book(title.value, author.value, pages.value, read.checked);
  
}

const checkForm = function() {
  if (
    
      title.value != '' &&
      author.value != ''&&
      pages.value != '' && 
      pages.value <= 10000
  ) {return true};
}

const clearForm = function() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = '';
}

const removeFromArray = function(bookNumber) {
  myLibrary[bookNumber] = '';

  console.log(myLibrary);
}

const removeFromShelf = function(book) {
  book.remove();
}

const displayBook = function() {
  let book = document.createElement('div');
  book.classList.add('book');
  book.dataset.bookNumber = currentBookNumber;

  book.innerHTML = `
  <p class="title">${window['book' + currentBookNumber].title}</p>
      <p class="author">${window['book' + currentBookNumber].author}</p>
      <p class="pages">${window['book' + currentBookNumber].pages}</p>
      <div class="buttons">
        <button class="delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </button>
        <button class="read">read</button>
      </div>
  `

  container.appendChild(book);

  removeBook = document.querySelectorAll('.delete');

  // remove book button event



removeBook.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let book = e.target.parentElement.parentElement;
    let bookNumber = book.dataset.bookNumber;

    removeFromArray(bookNumber);

    removeFromShelf(book);
  })
}, )
}

let setReadStatus = function () {
  if (window['book' + currentBookNumber].read === false) {
    document.querySelector(`[data-book-number="${currentBookNumber}"]`).querySelector('.read').classList.add('unread');
  }
}

const addBook = function(event) {
  event.preventDefault();

  if (checkForm()) {

    myLibrary.push(getData());

    displayBook();

    setReadStatus();
  
    clearForm();

  } else {
    alert('please enter correct data');
  }


  currentBookNumber += 1;
}

add.addEventListener('click', addBook, false);


// display form

let displayForm = document.querySelector('.newBook');
let form = document.querySelector('.form');


const showForm = function() {
  form.classList.remove('hidden');
  setTimeout(() => {
    form.classList.add('downAnimation');
  }, 1);


  displayForm.disabled = true;
  removeBook.forEach((btn) => {
    btn.disabled = true;
  })
  readButton.forEach((btn) => {
    btn.disabled = true;
  })
}

displayForm.addEventListener('click', showForm, false);


// hide form 

let closeForm = document.querySelector('.close');


const hideForm = function() {
  form.classList.remove('downAnimation');
  setTimeout(() => {
    form.classList.add('hidden');
  }, 1000);

  // make buttons active again

  displayForm.disabled = false;
  removeBook.forEach((btn) => {
    btn.disabled = false;
  })
  readButton.forEach((btn) => {
    btn.disabled = false;
  })
}

closeForm.addEventListener('click', hideForm, false);


// read button click event 

readButton.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    (e.target.classList.contains("unread")) ? e.target.classList.remove('unread') : e.target.classList.add('unread')
  }, false)
})


