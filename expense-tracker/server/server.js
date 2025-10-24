const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db.js')

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/transactions',require('./routes/routes.js'))

app.listen(5000, () => {
    console.log('server port running in 5000')
})