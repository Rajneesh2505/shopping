const express=require("express")
const route=express.Router()
const userModel=require("../models/user-schema")
const {hashPassword}=require("../utility")
const crypto=require("crypto")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

// for secretkey
const secretKey=crypto.randomBytes(64).toString("hex")


//Route For user registration/signin

route.post("/registration",async(req,res)=>{
    await hashPassword(req.body.password).then(hashValue=>{
        userModel.create(
            {name:req.body.name,phone:req.body.phone,email:req.body.email,district:req.body.district,state:req.body.state,address:req.body.address,pincode:req.body.pincode,password:hashValue}
        ).then(()=>{
            res.status(200).send({
                status:"successful",
                message:"user registerd successfully"
            })
            }).catch(err=>{
            res.status(400).send({
                status:"fail",
                message:err.message
            })
            })
    })

})


//Route for user sign in


route.post("/signin",(req,res)=>{
userModel.find({email:req.body.email}).then(data=>{
if(data.length){
    bcrypt.compare(req.body.password,data[0].password).then(valid=>{
if(valid){
    const auth_token=jwt.sign({
        expireIn:Math.floor(Date.now()/1000)+(10*60),
        data:data[0].eemail
    },secretKey)
    res.status(200).send(auth_token)
}else{
    res.status(400).send({
        status:"fail",
        message:"Invalid Password"
    })
}
    })
   
}else{
    res.status(400).send({
        status:"fail",
        message:"Invalid Email Id"
    })
}
})


})




module.exports=route
