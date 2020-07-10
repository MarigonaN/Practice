const express = require('express')
const userSchema = require('./schema')

const usersRouter = express.Router()

usersRouter.get('/', async (req, res, next) => {
    try {
        const usersList =await userSchema.find(req.query)
        res.send(usersList)
    } catch (error) {
        next(error)
    }
})
usersRouter.get('/:id', async (req, res, next) => {
    try {
      const user =  await userSchema.findById(req.params.id)
      if(user){
        console.log(user)
        res.send(user)
      }else{
          const error = new Error()
          error.httpStatusCode = 404
          next(error)
      }
      
    } catch (error) {
        next(error)
    }
})
usersRouter.post('/', async (req, res, next) => {
    try {
        const newUser = new userSchema(req.body)
        const response = await newUser.save()
        res.send(response)
    } catch (error) {
        next(error)
    }
})
usersRouter.put('/:id', async (req, res, next) => {
    try {
      const response =  await userSchema.findByIdAndUpdate(req.params.id, req.body)
        console.log(response)
        res.send(response)
    } catch (error) {
        next(error)
    }
})
usersRouter.delete('/:id', async (req, res, next) => {
    try {
        const user = await userSchema.findByIdAndDelete(req.params.id)
      
        res.send("deleted!")
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter