const { Schema, model } = require("mongoose")

const bookSchema = new Schema(
    {
    _id: {type: String, required: true}, 
    title: String,
    price: Number,
    description: String,
},
    { _id: false }

)

module.exports = model("Book", bookSchema)