const Events = require('../models/Event.js')

export const addEvent = async (req,res) => {
    try{
        const event = new Events(req.body)
        await event.save()
        res.json({ message : 'Event Added succesfully'})
    }
    catch(e) {
        res.status(400).json({ message : e.message })
    }
}

export const viewEvents = async (req,res) => {
    try{
        const events = await Events.find()
        res(events)
    }catch (e){
        res.status(400).json({ message : e.message })
    }
}

export const updateEvent = async (req,res) => {
    try{
        await Events.findByIdAndUpdate(req.params.id , req.body)
        res.json({ message : 'Event updated succesfully'})
    }catch (e){
        res.status(400).json({ message : e.message })
    }
}

export const getEventById = async (req,res) => {
    try{
        const event = Events.findById(req.params.id)
        res.json(event)
    }catch (e){
        res.status(400).json({ message : e.message })
    }
}

export const deleteEvent = async (req,res) => {
    try{
        await Events.findByIdAndDelete(req.params.id)
        res.json({ message : 'Event deleted succssfully'})
    }catch (e){
        res.status(400).json({ message : e.message })
    }
}

module.exports = { addEvent, viewEvents, getEventById, updateEvent, deleteEvent };
