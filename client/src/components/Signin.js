import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Signin = ()=>{
    const [data,setData]=useState('');
    return(
        <div>
            <div className='div-1'>
              <div className='laundryservice'>Laundry Service</div>
              <div className='line-1'>Doorstep Wash & Dryclean Service</div>
              <div className='line-2'>Don’t Have An Account?</div>
               <Link to = '/register'><button className='registerbutton'>Register</button></Link> 
            </div>
            <div className='div-2'>
              <form>
                <div>SIGN IN</div>
                <input name="mobile" type="text" placeholder='Mobile / Email' onChange={(e)=>setData({...data, name : e.target.value})} />
                <input name="password" type = "password" placeholder='Password' onChange={(e)=>setData({...data, password : e.target.value})} />
                <button className='signin-button'>Sign In</button>
              </form>
            </div>
        </div>
    )
}

export default Signin ;