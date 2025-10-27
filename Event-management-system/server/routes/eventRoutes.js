const express = require('express')
const router = express.Router()
const Events = require('../models/Event.js')
const { addEvent, viewEvents, updateEvent, getEventById, deleteEvent } = require('../controller/eventController.js')

router.get('/',viewEvents)
router.post('/',addEvent)
router.get('/:id',getEventById)
router.put('/:id',updateEvent)
router.delete('/:id',deleteEvent)

module.exports = router