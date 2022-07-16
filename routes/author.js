const authorController = require('../controllers/authorController')
const express = require('express')

const router = express.Router()

router.post('/', authorController.addAuthor)

module.exports = router