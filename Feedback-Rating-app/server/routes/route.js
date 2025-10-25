const express = require('express')
const router = express.Router()
const Feedback = require('../models/feedback.js')

router.post('/' , async (req,res) => {
    const {name,comment,rating} = req.body
    const newFeedback = new Feedback({ name,comment,rating })
    await newFeedback.save()
    res.json({ message : 'Feedback submitted successfully'})
})

router.get('/' , async (req,res) => {
    const feedbacks = await Feedback.find()
    res.json(feedbacks)
})

router.delete('/:id' , async (req,res) => {
    await Feedback.findByIdAndDelete(req.params.id)
    res.json({ message : 'Feedback deleted succesfully'})
})

module.exports = router