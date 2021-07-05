const router = require('express').Router(); 
const booksControl = require('../../controllers/booksControl'); 

//match with "/api/books"
router.route('/')
  .get(booksControl.findAll)
  .post(booksControl.create); 

//matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksControl.findById)
  .put(booksControl.update)
  .delete(booksControl.remove); 

module.exports = router; 