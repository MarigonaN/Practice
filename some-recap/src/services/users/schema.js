const {Schema, model} = require('mongoose')

const userSchema = new Schema({
name: {
    type: String,
    required: true,
},
surname: {
    type: String,
    required: true,
},
age: {
    type: Number,
    required: true,
},
email: {
    type: Number,
    required: true,
    lowercase: true,
},
professions: Array,

})

module.exports = model('User', userSchema)