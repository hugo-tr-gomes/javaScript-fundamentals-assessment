// Book object constructor
const Book = (title, author, isbn, year) => {
  return {
    author: author,
    isbn: isbn,
    status: "available",
    title: title,
    year: year,
  }
  // Placeholder: Create a Book object with the provided parameters
  // Remember to set the initial status as "available"
};

// Library array to store books
const library = [];

// Function to add a new book to the library
const addBook = (title, author, isbn, year) => {
  const newBook = Book(title, author, isbn, year);

  //vendors.some(e => e.Name === 'Magenic')
  if(library.some(book => book.isbn === newBook.isbn)) {
    console.log("Book with the same ISBN already exists.");
    return;
  }

  console.log("Book added successfully.");
  library.push(Book(title, author, isbn, year));
  // Placeholder: Add logic to add a new book to the library
  // Provide feedback using console.log for success or failure
  // Handle scenarios like adding a book with a duplicate ISBN
};

// Function to display the details of all books in the library
const displayLibrary = () => {
  for(book in library) {
    console.log(`{Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Year: ${book.year}, Status: ${book.status}};`);
  }
  // Placeholder: Add logic to display details of all books in the library
  // Utilize loops and console.log to showcase each book's information
};

// Function to search for books by title
const searchByTitle = title => library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  // Placeholder: Add logic to search for books by title
  // Return the matching books and provide feedback using console.log

// Function to check out a book by changing its status to "checked out"
const checkoutBook = title => {
  const index = library.findIndex((book) => book.title === title);

  if(index === -1) {
    console.log("Book with this title does exists.");
    return;
  }

  library[index].status = "checked out";
  console.log("Book checked out successfully.");
  
  // Placeholder: Add logic to check out a book by changing its status
  // Provide feedback using console.log for success or failure
  // Handle scenarios like attempting to check out a non-existent book
};

// Function to check in a book by changing its status to "available"
const checkinBook = title => {
  const index = library.findIndex((book) => book.title === title);

  if(index === -1) {
    console.log("Book with this title does exists.");
    return;
  }
  
  library[index].status = "available";
  console.log("Book checked in successfully.");

  // Placeholder: Add logic to check in a book by changing its status
  // Provide feedback using console.log for success or failure
  // Handle scenarios like attempting to check in a non-existent book
};

// Function to remove a book from the library by title (Bonus Challenge)
const removeBook = title => {
  const index = library.findIndex(book => book.title === title);

  if(index === -1) {
    console.log("Book with this name does not exist.");
    return;
  }

  library.splice(index , 1)
  console.log("Book removed successfully.");

  // Placeholder: Add logic to remove a book from the library by title
  // Provide feedback using console.log for success or failure
  // Handle scenarios like attempting to remove a non-existent book
};

// Function to get an array of available books (Bonus Challenge)
const getAvailableBooks = () => library.filter(book => book.status === "available");
  // Placeholder: Add logic to get an array of available books
  // Return the available books and provide feedback using console.log

module.exports = {
  Book,
  library,
  addBook,
  displayLibrary,
  searchByTitle,
  checkoutBook,
  checkinBook,
  removeBook,
  getAvailableBooks,
};
