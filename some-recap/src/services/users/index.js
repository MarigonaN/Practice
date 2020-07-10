const express = require('express')
const userSchema = require('./schema')

const usersRouter = express.Router()

usersRouter.get('/', async (req, res, next) => {})
usersRouter.get('/:id', async (req, res, next) => {})
usersRouter.post('/', async (req, res, next) => {
    try {
        const newUser = new userSchema(req.body)
        const response = await newUser.save()
        res.send(response)
    } catch (error) {
        next(error)
    }
})
usersRouter.put('/:id', async (req, res, next) => {})
usersRouter.delete('/:id', async (req, res, next) => {})

module.exports = usersRouter