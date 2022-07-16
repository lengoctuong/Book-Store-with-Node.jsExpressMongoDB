const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
})

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

let Author = mongoose.model('Author', authorSchema)
let Book = mongoose.model('Book', bookSchema)
module.exports = { Author, Book }