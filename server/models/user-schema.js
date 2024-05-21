const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
       validate:{
        validator:(value)=>{
            if(value.length===10){
                return true
            }
            return false
        },
        message:(props)=>{
            return `${props.value} should contain 10 character in it.`
        }
       },
        require:true
    },
    email:{
        type:String,
        validate:{
            validator:(value)=>{
                if(value.includes("@")){
                    return true
                }
                return false
            },
            message:(props)=>{
                return `${props.value} should contain @ in it.`
            }
        },
        unique:true,
        require:true
    },
    district:{
        type:String,
        require:true
    },
state:{
    type:String,
    require:true
},
address:{
    type:String,
    require:true
},
pincode:{
    type:Number,
    require:true
},
password:{
    type:String,
    require:true
}
})


const userModel=mongoose.model("users",userSchema)

module.exports=userModel;