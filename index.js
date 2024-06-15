const express = require('express');
const con = require("./database");
const app = express();
const bodyParser = require('body-parser');
const cors=require("cors");
const port = 3000;
const userControler = require('./route/userRoute');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Welcome to the page");
})

app.listen(port,(err,res)=>{
    if(err){
        console.log("Couldn't listen on port");
    }else{
        console.log("Listen on port");
    }
});


app.use("/user",userControler);