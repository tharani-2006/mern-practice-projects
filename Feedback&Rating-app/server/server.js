const express = require('express')
const connectDB = require('./config/db.js')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/feedbacks',require('./routes/route.js'))

app.listen(5000 , () => console.log('Server port running in 5000'))