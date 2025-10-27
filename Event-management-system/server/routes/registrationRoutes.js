const express = require('express')
const { registerEvent, getAllRegistrations, userRegistrations, getRegistrationsForOneEvent } = require('../controller/registrationController')
const router = express.Router()

router.post('/',registerEvent)
router.get('/',getAllRegistrations)
router.get('/user/:userId',userRegistrations)
router.get('/event/:eventId',getRegistrationsForOneEvent)

module.export = router