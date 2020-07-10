const express = require('express')
const bookSchema = require("./schema")

const booksRouter = express.Router()

booksRouter.get('/', async (req, res, next) => {
    try {
        const booksList = await bookSchema.find(req.query)
        res.send(booksList)
    } catch (error) {
        next(error)
    }
})



booksRouter.get('/:asin', async (req, res, next) => {
    try {
        const book = await bookSchema.findOne({_id: req.params.asin})
     
        if (book) {
            res.send(book)
        } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
        }

    } catch (error) {
        next(error)
    }
})



booksRouter.post('/', async (req, res, next) => {
    try {
        const newBook = new bookSchema(req.body)
        const response = await newBook.save()
        res.send(response)
    } catch (error) {
        next(error)
    }
})



booksRouter.put('/:asin', async (req, res, next) => {
    try {
        const book = await bookSchema.findOneAndUpdate({ _id: req.params.asin }, req.body)
        res.send(book._id)
    } catch (error) {
        next(error)
    }
})



booksRouter.delete('/:asin', async (req, res, next) => {
    try {
         await userSchema.findOneAndDelete({_id: req.params.asin})

        res.send("deleted!")
    } catch (error) {
        next(error)
    }
})

module.exports = booksRouter