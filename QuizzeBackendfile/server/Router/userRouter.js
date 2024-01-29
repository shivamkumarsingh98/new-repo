const express = require('express')
const router = express.Router()
const {register,login} = require('../Controllers/userController')
const bodyparser = require('body-parser')

router.use(bodyparser.urlencoded({extended:false}))
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/signup',register)


router.post('/login',login)


module.exports = router