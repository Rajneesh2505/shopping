const bcrypt=require("bcryptjs")

// this function is used to hash the password

function hashPassword(password){
    return new Promise((res,rej)=>{
        bcrypt.genSalt(10).then(hash=>{
            bcrypt.hash(password,hash).then(hashValue=>{
                res(hashValue)
            })
        })
    })
}

module.exports={hashPassword}

