const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    eventId : String,
    userId : String,
    registrationDate : Date
})

module.exports = mongoose.model('Registrations',registerSchema)