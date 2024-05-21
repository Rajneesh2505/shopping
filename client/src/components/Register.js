import React from "react";
import {useState} from 'react'
const Register = ()=>{
    const [form,setForm]=useState('');
    return(
        <div>
           <div>
           <label>Name</label>
            <input name = "name" type = "text" onChange={(e)=>setForm({...form , name : e.target.value})}/>
           </div>
           <div>
              <label>Email</label>
              <input name = "email" type = "email" onChange={(e)=>setForm({...form , email : e.target.value})}/>
           </div>
           <div>
              <label>Phone</label>
              <input name = "phone" type = "number" onChange={(e)=>setForm({...form ,  phone: e.target.value})}/>
           </div>
           <div>
           <label>State</label>
            <select name = "state" onChange={(e)=>setForm({...form , state : e.target.value})}>
              <option></option>
            </select>
           </div>
            <div>
              <label>District</label>
              <select name = "district" onChange={(e)=>setForm({...form , district : e.target.value})}>
                <option></option>
               </select>
            </div>
            <div>
               <label>Address</label>
               <input name = "address" type = "text" onChange={(e)=>setForm({...form , address : e.target.value})}/>
            </div>
            <div>
               <label>Pincode</label>
              <input name = "pincode" type = "number" onChange={(e)=>setForm({...form ,  pincode: e.target.value})}/>
            </div>
            <div>
               <label>Password</label>
              <input name = "password" type = "text" onChange={(e)=>setForm({...form , password: e.target.value})}/>
            </div>
            <div>
               <label>Confirm Password</label>
              <input name = "confirmpassword" type = "text" onChange={(e)=>setForm({...form , confirmpassword: e.target.value})}/>
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}
export default Register;