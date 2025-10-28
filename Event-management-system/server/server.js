const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db.js')
const eventRoutes = require('./routes/eventRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const registrationRoutes = require('./routes/registrationRoutes.js')

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/registrations', registrationRoutes);

app.listen(5000, () => console.log('Server port running in 5000'))