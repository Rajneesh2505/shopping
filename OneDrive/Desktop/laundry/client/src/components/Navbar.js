import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './assets/css/Navbar.css'
const Navbar=()=>{
    return(
        <div className='navbar'>
            <ul>
                <li className='laundry'>LAUNDRY</li>
                <li className='home'>Home</li>
                <li className='pricing'>Pricing</li>
                <li className='career'>Career</li>
                <li><button className='button'><b>{localStorage.length ? localStorage.getItem("Name"):"Sign In"}</b></button></li>
            </ul>
        </div>
    )
}
export default  Navbar