const express=require("express")
const route=express.Router()
const storeModel=require("../models/store-schema")
route.post("/store-address",(req,res)=>{
    storeModel.create({product_id:req.body.product_id,location:req.body.location,storeaddress:req.body.storeaddress,phone:req.body.phone,customerAddress:req.body.customerAddress,date:new Date()}).then(data=>{
        res.status(200).send({
            status:"success",
            message:"store address added succcessfully"
        })
    }).catch(err=>{
        res.status(400).send({
            status:"fail",
            messsage:err
        })
    })
})

route.get("/store",(req,res)=>{
    storeModel.find().then(data=>{
        res.send(data)
    })
})

route.put("/updateOrder",(req,res)=>{
    storeModel.updateOne({product_id:parseInt(req.body[0])},{$set:{status:"Cancel"}}).then(data=>{
      res.status(200).send({
        status:"success",
        message:"item updated"
      })
    }).catch(err=>{
        res.status(200).send({
            status:"Fail",
            message:err
        })
    })
    
  })

module.exports=route
