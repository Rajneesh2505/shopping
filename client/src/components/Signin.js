import React from 'react';
import { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
const Signin = ()=>{
    const [data,setData]=useState({email:"",password:""});
    const [error,setError]=useState({})
   const [warningMessage,setWarningMessage]=useState("")

   ///this function is use to send the data to the backEnd and get the json web token

   const handleSubmit=(e)=>{
   e.preventDefault()
    if(data.email=="" || data.password==""){
      setWarningMessage("fill all the field")
    }else{
      axios({
        url:"http://localhost:3000/user/signin",
        method:"POST",
        headers:{"Content-Type":"application/json"},
        data:JSON.stringify(data)
      }).then(data=>{
        localStorage.setItem("Auth_token",data.data)
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
              [key]:"Length of password should be greate than 6"
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
            <div className='div-1'>
              {/* <div className='laundryservice'>Laundry Service</div>
              <div className='line-1'>Doorstep Wash & Dryclean Service</div>
              <div className='line-2'>Don’t Have An Account?</div> */}
               {/* <Link to = '/register'><button className='registerbutton'>Register</button></Link>  */}
            </div>
            <div className='div-2'>
              <form method="post">
                <div>SIGN IN</div>
                <div>{warningMessage}</div>
               <div>
               <input name="mobile" type="text" placeholder='Mobile / Email' id="email" onChange={handleData} onBlur={()=>{
                  validator.email &&   validator.email("email",data.email)
                }}/>
                {error.email && <div className="error-message">{error.email}</div>}
               </div>
                <div>
                <input name="password" type = "password" placeholder='Password' id="password" onChange={handleData} onBlur={()=>{
                  validator.password &&   validator.password("password",data.password)
                }}/>
                {error.password && <div className="error-message">{error.password}</div>}
                </div>
                <button className='signin-button' onClick={handleSubmit}>Sign In</button>
              </form>
            </div>
        </div>
    )
}

export default Signin ;