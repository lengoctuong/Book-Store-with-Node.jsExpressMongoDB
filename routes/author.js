const authorController = require('../controllers/authorController')
const express = require('express')

const router = express.Router()

router.post('/', authorController.addAuthor)
router.get('/', authorController.getAllAuthors)
router.get('/:id', authorController.getAnAuthor)
router.put('/:id', authorController.updateAuthor)

module.exports = router