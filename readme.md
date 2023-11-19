# JavaScript Library Challenge

Welcome to the JavaScript Library Challenge! This project is crafted to enhance your JavaScript skills by delving into essential concepts like objects, functions, conditional statements, loops, iterators, and more.

## Challenge Description

### Introduction

Develop a JavaScript program to efficiently manage a library of books. This program empowers users to seamlessly interact with the library, enabling functionalities such as adding books, displaying book details, searching by title, checking books in and out, and exploring additional bonus features.

### Book Object

Define a `Book` object encapsulating crucial details:
- Title
- Author
- ISBN (International Standard Book Number)
- Published Year
- Status (available or checked out)

### Array of Books

Initiate an array named `library` to serve as the repository for multiple `Book` objects.

### Functions

1. Create a function `addBook(title, author, isbn, year)` that integrates a new book into the library with preset status as "available."
   - Use `console.log` to provide feedback on the success or failure of adding a book.
   - Handle scenarios such as attempting to add a book with a duplicate ISBN.

2. Develop a function `displayLibrary()` that outputs the comprehensive details of all books in the library.
   - Use a loop and `console.log` to display each book's details.

3. Implement a function `searchByTitle(title)` to retrieve an array of books matching the provided title.
   - Use `console.log` to display the search results.

4. Formulate a function `checkoutBook(title)` to transition the status of a book with the given title to "checked out."
   - Use `console.log` to inform the user about the success or failure of the checkout operation.
   - Handle scenarios like attempting to check out a non-existent book.

5. Devise a function `checkinBook(title)` facilitating the shift of a book's status, identified by the given title, back to "available."
   - Use `console.log` to provide feedback on the success or failure of the check-in operation.
   - Handle scenarios like attempting to check in a non-existent book.

### Conditional Statements

Leverage conditional statements to gracefully manage scenarios like attempting to add a book with a duplicate ISBN or checking in/out a non-existent book.
   - Use `console.log` to communicate relevant feedback in case of errors or unexpected scenarios.

### Loops and Iterators

Harness loops and iterators to dynamically showcase the details of each book in the library and to iterate through the array, displaying book titles.
   - Utilize `console.log` within loops to display information effectively.

### Scope

Safeguard variable scope to ensure that variables are confined within their designated functions and not accessible outside their intended context.

### Bonus Challenge

Embark on an additional challenge by implementing a feature to remove a book from the library based on its title.
   - Use `console.log` to provide feedback on the success or failure of removing a book.
   - Handle scenarios like attempting to remove a non-existent book.

Introduce a function `getAvailableBooks()` that furnishes an array of books currently available in the library.

## Example Usage

Refer to the provided `libraryUsage.js` file for a hands-on example illustrating how to use and test the implemented functions.

Run the usage example with the following command:
``
yarn library:usage
``

## Unit tests
``
yarn library:test
``