const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    eventId : {
        type : ObjectId,
        ref : 'Events'
    },
    userId : {
        type : ObjectId,
        ref : 'Users'
    },
    registrationDate : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Registrations',registerSchema)