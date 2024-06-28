const mongoose =require("mongoose")

const orderSchema=mongoose.Schema({
    order_id:{
        type:Number
    },
    ProductName:{
        type:String
    },
    quantity:{
        type:Number
    },
    washtype:{
type:Array
    },
    price:{
        type:Number
    },
})

const order=mongoose.model("orders",orderSchema)
module.exports=order