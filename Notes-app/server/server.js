const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db.js')

const app = express();

app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/note',require('./routes/routes.js'))

app.listen(5000 , () => console.log('Server port running at 5000'))