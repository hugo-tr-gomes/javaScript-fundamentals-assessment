// Book object constructor
const Book = (title, author, isbn, year) => {
    // Placeholder: Create a Book object with the provided parameters
    // Remember to set the initial status as "available"
  };
  
  // Library array to store books
  const library = [];
  
  // Function to add a new book to the library
  const addBook = (title, author, isbn, year) => {
    // Placeholder: Add logic to add a new book to the library
    // Provide feedback using console.log for success or failure
    // Handle scenarios like adding a book with a duplicate ISBN
  };
  
  // Function to display the details of all books in the library
  const displayLibrary = () => {
    // Placeholder: Add logic to display details of all books in the library
    // Utilize loops and console.log to showcase each book's information
  };
  
  // Function to search for books by title
  const searchByTitle = title => {
    // Placeholder: Add logic to search for books by title
    // Return the matching books and provide feedback using console.log
  };
  
  // Function to check out a book by changing its status to "checked out"
  const checkoutBook = title => {
    // Placeholder: Add logic to check out a book by changing its status
    // Provide feedback using console.log for success or failure
    // Handle scenarios like attempting to check out a non-existent book
  };
  
  // Function to check in a book by changing its status to "available"
  const checkinBook = title => {
    // Placeholder: Add logic to check in a book by changing its status
    // Provide feedback using console.log for success or failure
    // Handle scenarios like attempting to check in a non-existent book
  };
  
  // Function to remove a book from the library by title (Bonus Challenge)
  const removeBook = title => {
    // Placeholder: Add logic to remove a book from the library by title
    // Provide feedback using console.log for success or failure
    // Handle scenarios like attempting to remove a non-existent book
  };
  
  // Function to get an array of available books (Bonus Challenge)
  const getAvailableBooks = () => {
    // Placeholder: Add logic to get an array of available books
    // Return the available books and provide feedback using console.log
  };
  
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
  