import React from 'react';
import './Navbar.css'
import { Link } from "react-scroll"
export default function Navbar() {

  return (
    <div className='header animate__animated animate__fadeInDown'>
        
        <div className='profile-name'>
            <span>Yusuf Adegbite.</span>
            
        </div>

        <div><i className='fa fa-bars'></i></div>
        <div className='nav-div'>
        <nav className='nav-bar'>
        <ul>
          <li><a href='/'>About Me</a></li>
          <li><Link to='project' smooth={true} duration={1000}>Projects</Link></li>
          <li><Link to='skill' smooth={true} duration={1000}>Stacks</Link></li>
          <li><Link className='hire-btn' to='contact' smooth={true} duration={1000}>Hire Me</Link></li>
        </ul>
      </nav>
        </div>
    </div>
  )
}
