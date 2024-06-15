import {React} from 'react';
import style from "../logIn/login.module.css"
import { Link} from 'react-router-dom';
import { useValue } from '../../itemContext';
function Login(){
     const {handleSubmit,handleData} = useValue();
 return(
    <div className={style.register}>
      <div className={style.col-1}>
         <h3>Login In</h3>
         <form id='form' className= {style.signForm} onSubmit={handleSubmit}>
            <input type= "email" id="name" placeholder='Username' required onChange={e=>handleData(e)} />
            <input type="password" id="password" placeholder='Password'required onChange={e=>handleData(e)}/>
            <div>
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
            

            <Link to = "Forget Password"><p>Forgot Password</p></Link>
            <Link to = "/Signin"><p>Sign In</p></Link>
         </form>
      </div>
      <div className='col-2'></div>
    </div>
 )
}

export default Login;
