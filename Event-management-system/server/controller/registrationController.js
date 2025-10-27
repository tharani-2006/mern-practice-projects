const Registrations = require('../models/Registration.js')
const Events = require('../models/Event.js')

const registerEvent = async (req, res) => {
    try {
        const { userId, eventId } = req.body

        const event = await Events.findById(eventId)
        if (!event) return res.json({ message: 'Event not found' })
        if (event.seats <= 0) return res.json({ message: 'Seats are full!' })

        await Registrations.create({ userId, eventId })
        event.seats -= 1
        await event.save()
        res.json({ message: 'Registered successfully' })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

// Get all registrations (Admin)
const getAllRegistrations = async (req, res) => {
    try {
        const regs = await Registrations.find()
            .populate('userId', 'name email')
            .populate('eventId', 'title date venue')
        res.json(regs)

    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

// Get user’s registrations (User)
const userRegistrations = async (req, res) => {
    try {
        const regs = await Registrations.find({ userId : req.params.userId })
            .populate('eventId','title date venue')
        res.json(regs)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

//Get registrations for one event (Admin)
const getRegistrationsForOneEvent = async (req,res) => {
    try{
        const events = await Registrations.find({ eventId : req.body.eventId })
            .populate('userId' , 'name email')
        res.json(events)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
}

module.exports = {registerEvent,getAllRegistrations,userRegistrations,getRegistrationsForOneEvent}