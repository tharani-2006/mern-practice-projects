const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
})

module.exports = mongoose.model('book',bookSchema)