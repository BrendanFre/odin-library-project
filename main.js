const myLibrary = []
const bookTable = document.querySelector('#bookTable')
const addBookButton = document.querySelector('#addABook')


class Book{
  constructor(name, author){
    this.name = name
    this.author = author
  }

  addBookToLibrary(){
    myLibrary.push(this)
  }
}

const theFinalEmpire = new Book("The Final Empire", "Brandon Sanderson")
const theWheelOfAscension = new Book("The Wheel of Ascension", "Brandon Sanderson")

theFinalEmpire.addBookToLibrary()
theWheelOfAscension.addBookToLibrary()

const bookList =
  myLibrary.map(book =>{
    return `<div class="bookRow"><span class="bookName">${book.name}</span><span class="bookAuthor">${book.author}</span></div>`
  }).join('')

console.log(myLibrary[0].name)

const updateList = (array)=>{
  return(
  array.map(book => {
    return `<div class="bookRow"><span class="bookName">${book.name}</span><span class="bookAuthor">${book.author}</span></div>`
  }).join(''))
}

bookTable.innerHTML = bookList

const addABook = ()=>{
  const dialogBox = document.createElement('dialog')
  const dialogBoxHeader = document.createElement('h1')
  const bookNameSection = document.createElement('div')
  const bookAuthorSection = document.createElement('div')
  const bookNameLabel = document.createElement('label')
  const bookNameEntry = document.createElement('input')
  const bookAuthorLabel = document.createElement('label')
  const bookAuthorEntry = document.createElement('input')
  const bookSubmit = document.createElement('button')
  const body = document.querySelector('body')

  dialogBoxHeader.textContent = "Add a new book..."

  bookNameLabel.textContent = "Name: "
  bookNameLabel.appendChild(bookNameEntry)

  bookAuthorLabel.textContent = "Author: "
  bookAuthorLabel.appendChild(bookAuthorEntry)

  bookNameSection.append(bookNameLabel)
  bookAuthorSection.append(bookAuthorLabel)

  bookSubmit.textContent = 'Submit'
  bookSubmit.addEventListener('click', ()=>{
    const newBook = new Book(bookNameEntry.value, bookAuthorEntry.value)
    newBook.addBookToLibrary()
    dialogBox.remove()
    bookTable.innerHTML = updateList(myLibrary)
    console.log(myLibrary)
  })

  dialogBox.appendChild(bookNameSection)
  dialogBox.appendChild(bookAuthorSection)
  dialogBox.appendChild(bookSubmit)
  
  dialogBox.classList.add('bookDialog')
  bookNameSection.classList.add('dialogSection')
  bookAuthorSection.classList.add('dialogSection')
  
  body.appendChild(dialogBox)

  dialogBox.showModal()

  
}

addBookButton.addEventListener('click', addABook)