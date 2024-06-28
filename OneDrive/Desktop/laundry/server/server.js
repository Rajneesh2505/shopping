const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const userController=require("./route/user-route")
const orderController=require("./route/order-route")
const storeController=require("./route/store-route")

// Connection with MongoDB or DataBase
 
mongoose.connect("mongodb+srv://rajneesh:Rajneesh@laundry-cart.oswq2vb.mongodb.net/laundry?retryWrites=true&w=majority&appName=Laundry-cart")
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
app.use("/orders",orderController)
app.use("/",storeController)