const myLibrary = []
const bookTable = document.querySelector('#bookTable')
const addBookButton = document.querySelector('#addABook')

const updateList = (array) => {
  return (
    array.map(book => {
      return `<div class="bookRow"><span class="bookName">${book.name}</span><span class="bookAuthor">${book.author}</span><input type="button" value="delete" class="deleteButton"></input></div>`
    }).join(''))
}

class Book {
  constructor(name, author) {
    this.name = name
    this.author = author
  }

  addBookToLibrary() {
    myLibrary.push(this)
  }



}
const deleteBook = (book, array)=>{
  const position = array.indexOf(book)
  array.splice(position, 1)
  updateList(array)
  console.log(array)


}
const bookListHeader = "<div class='bookRow'><span>Title</span><span>Author</span><span>Delete</span></div>"

const theFinalEmpire = new Book("The Final Empire", "Brandon Sanderson")
const theWheelOfAscension = new Book("The Wheel of Ascension", "Brandon Sanderson")

theFinalEmpire.addBookToLibrary()
theWheelOfAscension.addBookToLibrary()

const handleDelete = (event)=>{
  console.log(event)
}

const bookList =
  myLibrary.map(book => {
    const bookRow = document
    return `<div class="bookRow"><span class="bookName">${book.name}</span><span class="bookAuthor">${book.author}</span><input type="button" value="Delete" class="deleteButton" id=${myLibrary.indexOf(book)} onClick=${handleDelete(this)}></input></div>`
  }).join('')



bookTable.innerHTML = bookListHeader + bookList

const addABook = () => {
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
  bookSubmit.addEventListener('click', () => {
    const newBook = new Book(bookNameEntry.value, bookAuthorEntry.value)
    newBook.addBookToLibrary()
    dialogBox.remove()
    bookTable.innerHTML = bookListHeader + updateList(myLibrary)
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