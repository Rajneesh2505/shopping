const express=require("express")
const route=express.Router()
const orderModel=require("../models/order-schema")
const order = require("../models/order-schema")
route.post("/order",(req,res)=>{ 

        orderModel.create(req.body).then(data=>{
      res.status(200).send({
        status:"success",
        message:"item added"
      })
    }).catch(err=>{
        res.status(200).send({
            status:"Fail",
            message:err
        })
    })
    
})

route.get("/getorder",async(req,res)=>{
  let ans=await orderModel.aggregate([{
    $lookup:{
      from:"stores",
      localField:"order_id",
      foreignField:"product_id",
      as:"result"
    }
  },
    {$project:{
      "_id":0,
      "ProductName": 1,
        "quantity": 1,
        "washtype": 1,
        "price": 1,
        "result":{
          "product_id":1,
          "location": 1,
                "storeaddress": 1,
                "phone": 1,
                "customerAddress": 1,
                "date": 1,
        }
    }}
  ])
 res.send(ans)
})



module.exports=route
