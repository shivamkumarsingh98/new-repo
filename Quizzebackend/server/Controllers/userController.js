const newUserData = require('../Models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "NODESAPI"




const register = async (req,res) =>{
   try{
    console.log('ok',req.body)
    const{name,email,password}= req.body
    const exgistUser = await newUserData.findOne({email:email})
    if(exgistUser){
        return res.status(400).json({message:"user already exgist"})
    } 
       const hasPassword = await bcrypt.hash(password,10)

       const dataUser = new newUserData({
        name,
        email,
        password:hasPassword
       })

       await dataUser.save()

       const token = jwt.sign({email: dataUser.email, id: dataUser._id},SECRET_KEY)

       res.status(200).json({message:"user register sussfule" ,sussfule: true, token, name: dataUser .name , email: dataUser .email})
    
   }catch(error){

    console.log("somthing error :", error.message)

    res.status(500).json("register:-internal server error", error)

   }


}

const login = async (req,res) =>{
    
    const {email,password}= req.body
    console.log(req.body)
    try{
        const userExgist = await newUserData.findOne({email:email})
        if(!userExgist){
           return res.status(400).json({message:'user not found'})
        }

        const matchPassword = await bcrypt.compare(password, userExgist.password)
        if(!matchPassword){
           return res.status(400).json({message:'password not found'})
        }
        const token = jwt.sign({email:userExgist.name, id:userExgist._id}, SECRET_KEY)
        res.status(200).json({message:"Login sussecfull" ,sussfule: true, token, name: userExgist.name , email: userExgist.email})   
    }
    catch(error){
        console.log("Login Error:", error.message)
        res.status(500).json({ message: "Login internal server error", error: error.message });
     

    }
}

module.exports = {register,login}