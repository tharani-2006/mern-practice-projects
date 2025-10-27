const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title :String,
    description : String,
    date : String,
    venue : String,
    seats : Number
})

module.exports = mongoose.model('Events',eventSchema)