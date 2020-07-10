const express = require('express')
const cors = require('cors')
const listEndpoints = require('express-list-endpoints')
const mongoose = require('mongoose')

const usersRoutes = require('./services/users')
const booksRoutes = require('./services/books')

const {
    notFoundHandler, 
    badRequestHandler,
    generisErrorHandler,
} = require('./errorHandlers')

const server = express()

server.use(express.json())

const port = process.env.PORT || 3001

server.use('/users', usersRoutes)
server.use('/books', booksRoutes)

server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(generisErrorHandler)

console.log(listEndpoints(server))

server.listen(port, () =>{
    console.log("running on port", port)
})