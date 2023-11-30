// Book object constructor
const Book = (title, author, isbn, year) => {
  return {
    title,
    author,
    isbn,
    year,
    status: 'available',
  };
};

// Library array to store books
const library = [];

// Function to add a new book to the library
const addBook = (title, author, isbn, year) => {
  const existingBook = library.find(book => book.isbn === isbn);
  if (existingBook) {
    console.log('Book with the same ISBN already exists.');
  } else {
    const newBook = Book(title, author, isbn, year);
    library.push(newBook);
    console.log('Book added successfully.');
  }
};

// Function to display the details of all books in the library
const displayLibrary = () => {
  library.forEach(book => {
    console.log(`
      Title: ${book.title}
      Author: ${book.author}
      ISBN: ${book.isbn}
      Year: ${book.year}
      Status: ${book.status}
      -------------------------
    `);
  });
};

// Function to search for books by title
const searchByTitle = title => {
  const result = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  return result;
};

// Function to check out a book by changing its status to "checked out"
const checkoutBook = title => {
  const book = library.find(book => book.title === title);
  if (book) {
    book.status = 'checked out';
    console.log('Book checked out successfully.');
  } else {
    console.log('Book not found in the library.');
  }
};

// Function to check in a book by changing its status to "available"
const checkinBook = title => {
  const book = library.find(book => book.title === title);
  if (book) {
    book.status = 'available';
    console.log('Book checked in successfully.');
  } else {
    console.log('Book not found in the library.');
  }
};

// Function to remove a book from the library by title (Bonus Challenge)
const removeBook = title => {
  const index = library.findIndex(book => book.title === title);
  if (index !== -1) {
    library.splice(index, 1);
    console.log('Book removed successfully.');
  } else {
    console.log('Book not found in the library.');
  }
};

// Function to get an array of available books (Bonus Challenge)
const getAvailableBooks = () => {
  const result = library.filter(book => book.status === 'available');
  return result;
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
