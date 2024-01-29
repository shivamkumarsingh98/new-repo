const jwt = require('jsonwebtoken');
const secretKey = 'NODESAPI';
const user = require('../Models/QuizeSchima')

const auth = (req,res,next) =>{
  const {authorigation}= req.headers
if(!authorigation){
  res.ststus(500).json({massege:"Please logon first"})
}
const token = authorigation.replace('Bearer','')
jwt.verify(token,secretKey,(error,payload)=>{

  if(error){
    return res.status(400).json({massege:"you must logged in"})
  }
  const {_id} = payload
  user.findById(_id)
})
next()
}

module.exports =  auth

