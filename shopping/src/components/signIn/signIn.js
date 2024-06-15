import {React,useState} from 'react';
import style from "../signIn/signIn.module.css";
import { Link } from 'react-router-dom';
function Sign(){
   const [data,setData] = useState({name:"",password:""});
   const handleData=(e)=>{
      setData({...data,[e.target.id]:e.target.value})
   }

   const handleSubmit=(e)=>{
      e.preventDefault();
      
   fetch("http://localhost:3000/user/signup",{
      method:"POST",
      headers:{
         "content-type":"application/json"
      },
      body:JSON.stringify(data)
   })   
   }
 return(
    <div className={style.register}>
      <div className={style.col-1}>
         <h3>Sign In</h3>
         <span>Register and enjoy the service</span>

         <form id='form' className= {style.signForm}>
            <input type= "email" id= "name" placeholder='Username' required onChange={e=>handleData(e)}/>
            <input type="password" id='password' placeholder='Password'required onChange={e=>handleData(e)} />
            <input type="password" id="confirmPass" placeholder='Confirm Password' />
            <div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Sign in</button>
            </div>

            

          <Link to="/Login"><p className={style.p}>Login In</p></Link>
         </form>
      </div>
      <div className='col-2'></div>
    </div>
 )
}

export default Sign;