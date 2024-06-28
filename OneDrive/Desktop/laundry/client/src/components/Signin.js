
import React from 'react';
import "./assets/css/Signin.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer1 from './Footer1';
import { Footer } from './footer';

const Signin = ()=>{
    const [data,setData]=useState({email:"",password:""});
    const [error,setError]=useState({})
   const [warningMessage,setWarningMessage]=useState("")
   const navigate=useNavigate()

   ///this function is use to send the data to the backEnd and get the json web token

   const handleSubmit=(e)=>{
   e.preventDefault()
    if(data.email==="" || data.password===""){
      setWarningMessage("All fields are mendatory. fill all the fields.")
    }else{
      axios({
        url:"http://localhost:3000/user/signin",
        method:"POST",
        headers:{"Content-Type":"application/json"},
        data:JSON.stringify(data)
      }).then(Data=>{
        localStorage.setItem("Auth_token",Data.data[0])
        localStorage.length? localStorage.setItem("Name",Data.data[1]):localStorage.setItem("Name","")
        localStorage.length >0 ? navigate("/no-order"): navigate("/");
      }).catch(({response})=>{
        setWarningMessage(response.data.message)
      })
    }
    
   }

    //function for checking the input which is field by user
    let validator={
      email:(key,value)=>{
        if(value.indexOf("@")===-1){
          setError(err=>{
            return {
              ...err,
              [key]:"Email should contain @ in it."
            }
          })
        }
      },
      password:(key,value)=>{
        if(value.length<=6){
          setError(err=>{
            return {
              ...err,
              [key]:"Length of password should be greate than 6."
            }
          })
        }
      }
    }

    /// function for getting the input value from the input field
    const handleData=(e)=>{
      setData(data=>{
        return {...data,
          [e.target.id]:e.target.value
        }
      })
    
    }
    return(
        <div>
          <Navbar/>
            <div className='div-1'>
              <div className='laundryservice'>Laundry Service</div>
              <div className='line-1'>Doorstep Wash & Dryclean Service</div>
              <div className='line-2'>Don't Have An Account?</div> 
               <Link to = '/register'><button className='registerbutton'>Register</button></Link> 
            </div>
            <div className='div-2'>
              <form method="post">
                <div className="signin-text">SIGN IN</div>
                <div className="warning-message">{warningMessage}</div>
               <div>
               <input name="mobile" className="input1" type="text" placeholder='Mobile / Email' id="email" onChange={handleData} onBlur={()=>{
                  validator.email &&   validator.email("email",data.email)
                }}/>
                {error.email && <div className="error-message email">{error.email}</div>}
               </div>
               <div className="line1"></div>
                <div>
                <input name="password"   className="input2" type = "password" placeholder='Password' id="password" onChange={handleData} onBlur={()=>{
                  validator.password &&   validator.password("password",data.password)
                }}/>
                {error.password && <div className="error-message password">{error.password}</div>}
                </div>
                <div className="line2"></div>
                <div className="forget">Forget Password?</div>
               <button className='signin-button' onClick={handleSubmit}>Sign In</button>
              </form>
            </div>
            <div className="Footer-section">
      <div>
      <Footer1/>
      </div>
     <div>
     <Footer/>
     </div>
     
     </div>
        </div>
    )
}
export default Signin;
