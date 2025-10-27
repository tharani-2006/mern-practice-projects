const express = require('express')
const { addUser, viewUsers } = require('../controller/userController')
const router = express.Router()

router.post('/',addUser)
router.get('/',viewUsers)

module.exports = router