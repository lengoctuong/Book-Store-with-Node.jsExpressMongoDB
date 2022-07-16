const bookController = require('../controllers/bookController')
const express = require('express')

const router = express.Router()

router.post('/', bookController.addABook)
router.get('/', bookController.getAllBooks)
router.get('/:id', bookController.getABook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router