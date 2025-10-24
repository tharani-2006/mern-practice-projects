const mongoose = require('mongoose')

const transSchema = new mongoose.Schema({
    name  : String,
    amount : Number,
    type : {
        type: String,
        enum : ['income','expense']
    } ,
    date : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Transaction' , transSchema)