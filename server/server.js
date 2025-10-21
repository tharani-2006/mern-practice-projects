const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = requires('./config/db.js')

const app = express()
app.use(cors())
app.use(express.json())

connectDB();

app.use('/api/auth',requires('./routes/auth'))

app.listen(5000, () => console.log('Server running on the port 5000'))