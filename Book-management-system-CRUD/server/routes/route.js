const Book = require('../models/book.js')
const express = require('express')
const router = express.Router()

//Add
router.post('/add',async (req,res) => {
    const {name,author,price} = req.body;

    const existingBook = await Book.findOne({ name })
    if(existingBook) {
        return res.json({message : 'Book already exists'})
    }

    const newbook = new Book({ name,author,price})
    newbook.save()
    res.json({ message : 'Book added successfully'})
})

//view
router.get('/',async (req,res) => {
    const books = await Book.find();
    res.json(books)
})

// Get a single book by ID (for EditBook)
router.get('/update/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//update
router.put('/update/:id',async (req,res) => {
    const {name,author,price} = req.body;
    await Book.findByIdAndUpdate(req.params.id, {name,author,price})
    res.json({ message : 'Book updated successfully'})
})

//delete
router.delete('/delete/:id',async(req,res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.json({ message : 'Book deleted successfully'})
})

module.exports = router