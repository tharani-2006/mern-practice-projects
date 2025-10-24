const express = require('express')
const router = express.Router()
const Transaction = require('../models/transaction.js')

router.post('/', async (req,res) => {
    try{
        const {name,amount,type} = req.body
        const newTrans = new Transaction({name,amount,type})
        await newTrans.save()
        res.json({ message : 'Transaction succesfully'})
    } catch (e) {
        res.status(500).json({ message : e.message })
    }
})

router.get('/', async (req,res) => {
    try{
        const trans = await Transaction.find()
        res.json(trans)
    }catch (e) {
        res.status(500).json({ message : e.message })
    }
})

router.delete('/:id', async (req,res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id)
        res.json({ message : 'Transaction deleted succesfully'} )
    } catch (e) {
        res.status(500).json( { message : e.message } )
    }
})

module.exports = router