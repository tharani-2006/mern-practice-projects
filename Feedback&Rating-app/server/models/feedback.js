const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name : String,
    comment : String,
    rating : Number,
    date : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Feedback',feedbackSchema)