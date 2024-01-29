const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const userRouter = require('./Router/userRouter')
const QuizeRouter = require('./Router/QuizeRouter')
dotenv.config()



app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use((req,res,next)=>{
    console.log('HTTP Method-'+ req.method + ", URL -" + req.url)
    next()
  })

app.use('/api', userRouter)
app.use('/api',QuizeRouter)



main().catch(err => console.log("main error",err));

async function main(){

    await mongoose.connect(process.env.URL_Database).then((res)=> console.log(" Database is connected")).catch((error)=> console.log("mongoos connect error :",error))
}

app.listen(process.env.PORT,(req,res)=>{

    console.log('localhost8080 running proper')
})

app.get('/',(req,res)=>{
    console.log('helth api is ok')
    res.send('helth api is running')
})