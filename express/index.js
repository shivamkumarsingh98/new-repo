const express = require('express')
const app = express();
// const path = require("path");

let port = 8080;


app.set("view engine", "ejs");

// app.set("views" , path.join(___dirname, "/views"));


app.get("/", (req , res) =>{
    res.render("home.ejs");
})


app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;
    res.render("instagram.ejs", {username});
})

app.get("/rolldice", (req , res)=>{
    let diceval = Math.floor(Math.random()*10)+1
    res.render ("rolldice.ejs" ,{diceval})
})

app.listen(port, () => {
    console.log (`app listening or port ${port}`)
});



// app.use((req , rest) => {
//     console.log("request received")
// let demo =(`<h1>Frouit</h1><ul><li>apple</li></ul>`) 

// rest.send(demo)
    
// });
// app.get( "/apple" ,(req , res) =>{
//     res.send("this is apple server")
// })
// app.get("/mango",(req ,res) =>{
// res.send("this is mango path")
// })

// app.get("/:username/:id",(req , res) =>{
//     let {username,id}= req.params
//     res.send(`this is page@${username} ${id}`);
// });

// app.get("/orange",(req , res) =>{
//     res.send("this is orange path")
// })

// app.get("/banana",(req , res) =>{
//     res.send("this is banana path")
// })