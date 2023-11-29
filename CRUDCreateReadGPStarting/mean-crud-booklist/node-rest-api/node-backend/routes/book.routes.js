const express = require('express');
const app = express();
 
const bookRoute = express.Router();
let Book = require('../model/Book');
 
// Get all Books
bookRoute.route('/').get((req, res) => {
    Book.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get books: ${error}`);
  })
})

// Update a book
bookRoute.route('/update-book/:id').update((req, res) => {
Book.findByIdAndUpdate(req.params.id).then(() => {
  console.log('Book updated successfully.');
  res.status(200);
  })
  .catch((error) => {
    console.error(`Could not update book: ${error}`);
    })
  })
module.exports = bookRoute;