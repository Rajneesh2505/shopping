import React from 'react';
import {Link} from 'react-router-dom'
import './Assets/Navbar.css'
const Navbar=()=>{
    return(
        <div className='navbar'>
            <ul>
                <li className='laundry'>LAUNDRY</li>
                <li className='home'><Link to = '/'>Home</Link></li>
                <li className='pricing'><Link to = '/pricing'>Pricing</Link></li>
                <li className='career'><Link to = '/career'>Career</Link></li>
                <li><button className='button'>signin</button></li>
            </ul>
        </div>
    )
}
export default  Navbar