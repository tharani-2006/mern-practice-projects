const express = require('express')
const router = express.Router()
const User = require('./models/User.js')

router.post('/signup',async(req,res) => {
    const {name,email,password} = req.body

    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.json({ message : 'User Already Exists'})
    }

    const user = new User({name,email,password})
    await user.save()

    res.json({ message : 'Signup succesfull'})
})

router.post('/login',async(req,res) => {
    const {name,email,password} = req.body

    const user = await User.findOne({email})
    if(!user) return res.json({ message : 'User Not Found'})

    if(user.password !== password){
        return res.json({ message : 'Password Doesnot match'})
    }

    res.json({ message : 'Login Succesfulll',user})
})

module.exports = router