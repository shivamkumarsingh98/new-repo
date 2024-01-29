const express = require('express')
const {createQuize,show, upDate, remove} = require('../Controllers/QuizeControllers')
const router = express.Router()
const bodyparser = require('body-parser')
const auth = require('../Middleware/auth');

router.use(bodyparser.urlencoded({extended:false}))
router.use(express.json());
router.use(express.urlencoded({extended:true}));



router.post('/Quize',auth,createQuize );
router.get('/Quize/:id',auth, show)
router.put('/Quize/:id',auth,upDate)
router.delete('/Quize/:id',auth,remove)

module.exports = router