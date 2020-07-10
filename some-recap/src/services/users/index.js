const express = require('express')
const userSchema = require('./schema')

const usersRouter = express.Router()

booksRouter.get('/', async (req, res, next) => {})
booksRouter.get('/:id', async (req, res, next) => {})
booksRouter.post('/', async (req, res, next) => {
    try {
        const newUser = new userSchema(req.body)
        const response = await newUser.save()
        res.send(response)
    } catch (error) {
        next(error)
    }
})
booksRouter.put('/:id', async (req, res, next) => {})
booksRouter.delete('/:id', async (req, res, next) => {})

module.exports = usersRouter