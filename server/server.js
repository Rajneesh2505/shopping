const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const userController=require("./route/user-route")

// Connection with MongoDB or DataBase

mongoose.connect("mongodb://127.0.0.1:27017/Laundry-Cart")


//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())




// starting the server at PORT 
let PORT=3000
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server start")
    }
})



app.use("/user",userController)