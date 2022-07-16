const { Author, Book } = require(('../model/model'))

const bookController = {
    addABook: async(req, res) => {
        try {
            const newBook = new Book(req.body)
            const savedBook = await newBook.save()
            
            if (req.body.author) {
                const author = Author.find({ _id: req.body.author })
                // const author = Author.findById(req.body.author)
                await author.updateOne({ $push: { books: savedBook._id } })
            }

            res.status(200).json(savedBook)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    getAllBooks: async(req, res) => {
        try {
            const books = await Book.find()

            res.status(200).json(books)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    getABook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate('author')

            res.status(200).json(book)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateBook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.id)
            await Book.updateOne({ $set: req.body })

            res.status(200).json('Updated successfully!')
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = bookController