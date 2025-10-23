const express = require('express')
const router = express.Router();
const Note = require('../models/note.js')

//to get notes by search functionality
router.get('/', async (req, res) => {

    const search = req.query.search || "";

    const notes = await Note.find({
        title: { $regrex: search, $options: 'i' }, // i -> insensitive
    }).sort({ createdAt: -1 })

    res.json(notes);
})

//to add a note
router.post('/add', async (req, res) => {

    const { title, content } = req.body
    const note = new Note({ title, content })
    await note.save()

})

//to delete a note
router.delete('/delete/:id',async (req,res) => {

    await Note.findByIdAndDelete(req.params.id)
    res.json({ message :  'Note deleted Successfully' })

})

module.exports = router