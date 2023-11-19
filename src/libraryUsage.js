// Import the functions from the library
const {
    addBook,
    displayLibrary,
    searchByTitle,
    checkoutBook,
    checkinBook,
    removeBook,
    getAvailableBooks,
  } = require('./library');
  
  // Add books to the library
  addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
  addBook('Harry Potter', 'J.K. Rowling', '0987654321', 1997);
  addBook('The Catcher in the Rye', 'J.D. Salinger', '5678901234', 1951);
  
  // Display the library
  console.log('--- Initial Library ---');
  displayLibrary();
  
  // Search for books by title
  console.log('\n--- Search for Books ---');
  const searchResult = searchByTitle('hobbit');
  console.log('Search Result:', searchResult);
  
  // Checkout and checkin books
  console.log('\n--- Checkout and Checkin Books ---');
  checkoutBook('The Hobbit');
  console.log('After checking out "The Hobbit":');
  displayLibrary();
  
  checkinBook('The Hobbit');
  console.log('After checking in "The Hobbit":');
  displayLibrary();
  
  // Remove a book
  console.log('\n--- Remove a Book ---');
  removeBook('Harry Potter');
  console.log('After removing "Harry Potter":');
  displayLibrary();
  
  // Get available books
  console.log('\n--- Available Books ---');
  const availableBooks = getAvailableBooks();
  console.log('Available Books:', availableBooks);
  