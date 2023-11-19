const {
  Book,
  library,
  addBook,
  displayLibrary,
  searchByTitle,
  checkoutBook,
  checkinBook,
  removeBook,
  getAvailableBooks,
} = require('./library');

describe('Library Functions', () => {
  beforeEach(() => {
    library.length = 0; // Clear the library before each test
  });

  test('should add a new book to the library', () => {
    const spy = jest.spyOn(console, 'log');
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    expect(spy).toHaveBeenCalledWith('Book added successfully.');
    expect(library.length).toBe(1);
    spy.mockRestore();
  });

  test('should not add a book with the same ISBN', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    const spy = jest.spyOn(console, 'log');
    addBook('Another Book', 'Author', '1234567890', 2020);
    expect(spy).toHaveBeenCalledWith('Book with the same ISBN already exists.');
    expect(library.length).toBe(1);
    spy.mockRestore();
  });

  test('should display the details of all books in the library', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    addBook('Harry Potter', 'J.K. Rowling', '0987654321', 1997);
    const spy = jest.spyOn(console, 'log');
    displayLibrary();
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  test('should search for books by title', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    addBook('Harry Potter', 'J.K. Rowling', '0987654321', 1997);
    const result = searchByTitle('hobbit');
    expect(result).toEqual([{"author": "J.R.R. Tolkien", "isbn": "1234567890", "status": "available", "title": "The Hobbit", "year": 1937,}]);
  });

  test('should check out a book', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    const spy = jest.spyOn(console, 'log');
    checkoutBook('The Hobbit');
    expect(spy).toHaveBeenCalledWith('Book checked out successfully.');
    expect(library[0].status).toBe('checked out');
    spy.mockRestore();
  });

  test('should check in a book', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    const spy = jest.spyOn(console, 'log');
    checkoutBook('The Hobbit');
    checkinBook('The Hobbit');
    expect(spy).toHaveBeenCalledWith('Book checked in successfully.');
    expect(library[0].status).toBe('available');
    spy.mockRestore();
  });

  test('should remove a book from the library by title (Bonus Challenge)', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    const spy = jest.spyOn(console, 'log');
    removeBook('The Hobbit');
    expect(spy).toHaveBeenCalledWith('Book removed successfully.');
    expect(library.length).toBe(0);
    spy.mockRestore();
  });

  test('should get an array of available books (Bonus Challenge)', () => {
    addBook('The Hobbit', 'J.R.R. Tolkien', '1234567890', 1937);
    addBook('Harry Potter', 'J.K. Rowling', '0987654321', 1997);
    checkoutBook('The Hobbit');
    const result = getAvailableBooks();
    expect(result).toEqual([{
           "author": "J.K. Rowling",
           "isbn": "0987654321",
           "status": "available",
           "title": "Harry Potter",
           "year": 1997,
         }]);
  });

  // Additional tests
});
