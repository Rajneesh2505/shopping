import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const Register = () => {
//   const [form, setForm] = useState("");
//   return (
    // <div>
      {/* <div className="div-1">
        <div className="laundryservice">Laundry Service</div>
        <div className="line-1">Doorstep Wash & Dryclean Service</div>
        <div className="line-2">Don’t Have An Account?</div>
        <Link to="/signin"><button className="sidebutton">Signin</button></Link>
      </div> */}
{/* //       <div className="div-2">
//         <div> */}
{/* //           <label>Name</label> */}
         {/* <input
            name="name"
            type="text"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          /> */}

const Register = ()=>{
   const [confirmPassword,setConfirmPassword]=useState({value:""})
    const [form,setForm]=useState({
      name:"",email:"",phone:"",state:"",district:"",address:"",pincode:"",password:""
    });
    const [err,setErr]=useState({})
    const [warnMsg,setWarnMsg]=useState("")
    const navigate=useNavigate()
///function to add data in database and create new user
const handleRegister=(e)=>{
   e.preventDefault()
   if(form.name==""|| form.email=="" || form.phone=="" || form.state=="" || form.district=="" || form.address=="" || form.pincode=="" || form.password==""|| confirmPassword==""){
setWarnMsg("All fields are mendatory. fill all the fields.")
   }else{
     fetch("http://localhost:3000/user/registration",{
      method:"POST",
      headers:{
         "content-type":"application/json"
      },
      body:JSON.stringify(form)
     }).then(data=>{
      data.ok ? navigate("/"): navigate("/register")
     }).catch(err=>{
      console.log("err occur",err)
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
               [key]:"Invalid number."
            }
         })
      }
   },
   pincode:(key,value)=>{
      if(/[a-z && A_Z]/.test(value)){
         setErr(err=>{
            return {
               ...err,
               [key]:"Pincode can't contain alphabets."
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
               [key]:"Email should contain @ in it."
            }
         })
      }
   },
confirmPassword:(key,value)=>{
   if(value!=form.password){
      setErr(err=>{
         return {
            ...err,
            [key]:"Password are not match.please check your password."
         }
      })
   }
}

}
    return(
        <div>
          <div className="div-1">
            <div className="laundryservice">Laundry Service</div>
            <div className="line-1">Doorstep Wash & Dryclean Service</div>
            <div className="line-2">Don’t Have An Account?</div>
           <Link to="/signin"><button className="sidebutton">Signin</button></Link>
        </div>
         <div className="div-2">
         <div className="warning-message">{warnMsg}</div>
           <div>
           <label>Name</label>
            <input name = "name" type = "text" onChange={(e)=>setForm({...form , name : e.target.value})}/>
           </div>
           <div>
              <label>Email</label>
              <input name = "email" type = "email" onChange={(e)=>setForm({...form , email : e.target.value})} onBlur={()=>{
               validateInput.email && validateInput.email("email",form.email)
              }}/>
              {err.email && <div className="error-message">{err.email}</div>}
           </div>
           <div>
              <label>Phone</label>
              <input name = "phone" type = "text" onChange={(e)=>setForm({...form ,  phone: e.target.value})} onBlur={()=>{
               validateInput.phone && validateInput.phone("phone",form.phone)
              }}/>
              {err.phone && <div className="error-message">{err.phone}</div>}
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
              {err.pincode && <div className="error-message">{err.pincode}</div>}
            </div>
            <div>
               <label>Password</label>
              <input name = "password" type = "password" onChange={(e)=>setForm({...form , password: e.target.value})} onBlur={()=>{
               validateInput.password && validateInput.password("password",form.password)
              }}/>
              {err.password && <div className="error-message">{err.password}</div>}
            </div>
            <div>
               <label>Confirm Password</label>
              <input name = "confirmpassword" type = "password" onChange={(e)=>setConfirmPassword({ ...confirmPassword,value: e.target.value})} onBlur={()=>{
               validateInput.confirmPassword && validateInput.confirmPassword("confirmPassword",confirmPassword.value)
              }}/>
              {err.confirmPassword && <div className="error-message">{err.confirmPassword}</div>}
            </div>
            <div>
                <button onClick={handleRegister}>Register</button>
            </div>
         </div>
        </div>
    )
  }
//         <div>
// //           <label>Email</label>
// //           <input
//             name="email"
//             type="email"
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Phone</label>
//           <input
//             name="phone"
//             type="number"
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>State</label>
//           <select
//             name="state"
//             onChange={(e) => setForm({ ...form, state: e.target.value })}
//           >
//             <option value="andhrapradesh">Andhra Pradesh</option>
//             <option value="assam">Assam</option>
//             <option value="kerala">Kerala</option>
//             <option value="rajasthan">Rajasthan</option>
//             <option value="telangana">Telangana</option>
//           </select>
//         </div>
//         <div>
//           <label>District</label>
//           <select
//             name="district"
//             onChange={(e) => setForm({ ...form, district: e.target.value })}
//           >
//             <option value="westgodavari">West godavari</option>
//             <option value="eastgodavari">East godavari</option>
//             <option value="krishna">Krishna</option>
//           </select>
//         </div>
//         <div>
//           <label>Address</label>
//           <input
//             name="address"
//             type="text"
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Pincode</label>
//           <input
//             name="pincode"
//             type="number"
//             onChange={(e) => setForm({ ...form, pincode: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             name="password"
//             type="text"
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             name="confirmpassword"
//             type="text"
//             onChange={(e) =>
//               setForm({ ...form, confirmpassword: e.target.value })
//             }
//           />
//         </div>
//         <div>
//           <button>Register</button>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Register;
