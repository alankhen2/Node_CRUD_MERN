const express = require('express')
const {getBooks, getBookById, addBook, updateBook, deleteBook} = require('../controller/BukuController')
const router = express.Router()

router.get('/books', getBooks)
router.get('/books/:id', getBookById)
router.post('/addbook', addBook);
router.patch('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)

module.exports = router;