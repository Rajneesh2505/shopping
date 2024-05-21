import React from "react";
import {useState} from 'react'
const Register = ()=>{
   const [confirmPassword,setConfirmPassword]=useState("")
    const [form,setForm]=useState({
      name:"",email:"",phone:"",state:"",district:"",address:"",pincode:"",password:""
    });
    const [err,setErr]=useState({})
    const [warnMsg,setWarnMsg]=useState("")
///function to add data in database and create new user
const handleRegister=(e)=>{
   e.preventDefault()
   if(form.name==""|| form.email=="" || form.phone=="" || form.state=="" || form.district=="" || form.address=="" || form.pincode=="" || form.password==""|| confirmPassword==""){
setWarnMsg("Fill all the fileds")
   }else{
     fetch("http://localhost:3000/user/registration",{
      method:"POST",
      headers:{
         "content-type":"application/json"
      },
      body:JSON.stringify(form)
     })
   }
}
    // this object for district of diffrent state. they will show in district input on selection of diffent state
    const districtList={
      punjab:["" ,"chandigarh","mohali","ludhiana","amritsar"],
      gujrat:["","ahmedabad","surat","vadodara","daman","deu"],
      rajasthan:["","jaipur","udaipur","jaisalmer","sikar","jodhpur"],
      andhra_pradesh:["","something","anything","nothing","everything","nomention"],
      maharastra:["","mimbai","pune","nasik","kondhana","jalgaon"]
}

//object of function for validate user input that the given input is in right format or not
const validateInput={
   phone:(key,value)=>{
      if(/[a-z && A_Z]/.test(value) || value.length!==10){
         setErr(err=>{
            return {
               ...err,
               [key]:"Invalid number"
            }
         })
      }
   },
   pincode:(key,value)=>{
      if(/[a-z && A_Z]/.test(value)){
         setErr(err=>{
            return {
               ...err,
               [key]:"pincode can't contain alphabets"
            }
         })
      }
   },
   password:(key,value)=>{
      if(value.length<6){
         setErr(err=>{
            return {
               ...err,
               [key]:"Length of password should be greater than 6"
            }
         })
      }
   },
   email:(key,value)=>{
      if(value.indexOf("@")===-1){
         setErr(err=>{
            return {
               ...err,
               [key]:"email should contain @ in it."
            }
         })
      }
   },
confirmPassword:(key,value)=>{
   if(value!==form.password){
      setErr(err=>{
         return {
            ...err,
            [key]:"password are not match.please check your password"
         }
      })
   }
}

}
    return(
        <div>
         <div>{warnMsg}</div>
           <div>
           <label>Name</label>
            <input name = "name" type = "text" onChange={(e)=>setForm({...form , name : e.target.value})}/>
           </div>
           <div>
              <label>Email</label>
              <input name = "email" type = "email" onChange={(e)=>setForm({...form , email : e.target.value})} onBlur={()=>{
               validateInput.email && validateInput.email("email",form.email)
              }}/>
              {err.email && <div>{err.email}</div>}
           </div>
           <div>
              <label>Phone</label>
              <input name = "phone" type = "text" onChange={(e)=>setForm({...form ,  phone: e.target.value})} onBlur={()=>{
               validateInput.phone && validateInput.phone("phone",form.phone)
              }}/>
              {err.phone && <div>{err.phone}</div>}
           </div>
           <div>
           <label>State</label>
            <select name = "state" onChange={(e)=>setForm({...form , state : e.target.value})}>
            <option value=""></option>
              <option value="punjab">Punjab</option>
              <option value="gujrat">Gujrat</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="andhra_pradesh">Andhra Pradesh</option>
              <option value="maharastra">Maharastra</option>
            </select>
           </div>
            <div>
              <label>District</label>
              <select name = "district" onChange={(e)=>setForm({...form , district : e.target.value})}>
            {form.state && districtList[form.state].map(district=>{
               return (
                  <>
                    <option value={district}>{district.toUpperCase()}</option>
                  </>
               )
            })}
               </select>
            </div>
            <div>
               <label>Address</label>
               <input name = "address" type = "text" onChange={(e)=>setForm({...form , address : e.target.value})}/>
            </div>
            <div>
               <label>Pincode</label>
              <input name = "pincode" type = "text" onChange={(e)=>setForm({...form ,  pincode: e.target.value})} onBlur={()=>{
               validateInput.pincode && validateInput.pincode("pincode",form.pincode)
              }}/>
              {err.pincode && <div>{err.pincode}</div>}
            </div>
            <div>
               <label>Password</label>
              <input name = "password" type = "password" onChange={(e)=>setForm({...form , password: e.target.value})} onBlur={()=>{
               validateInput.password && validateInput.password("password",form.password)
              }}/>
              {err.password && <div>{err.password}</div>}
            </div>
            <div>
               <label>Confirm Password</label>
              <input name = "confirmpassword" type = "password" onChange={(e)=>setConfirmPassword({ confirmpassword: e.target.value})} onBlur={()=>{
               validateInput.confirmPassword && validateInput.confirmPassword("confirmPassword",confirmPassword)
              }}/>
              {err.confirmPassword && <div>{err.confirmPassword}</div>}
            </div>
            <div>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}
export default Register;