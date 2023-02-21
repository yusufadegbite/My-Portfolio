import React, { useState } from 'react';
import './Navbar.css'
import { Link } from "react-scroll";
import { Icon } from 'react-icons-kit';
import {menu} from 'react-icons-kit/feather/menu';
import {x} from 'react-icons-kit/feather/x';
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
      setToggle(!toggle);
  }
//className='header animate__animated animate__fadeInDown
  return (
    <div  className={toggle?'header expanded':'header'}>
        
        <div className='profile-name'>
            <span> <span className='span'>Yusuf</span> Adegbite.</span>
            
        </div>

        <div className='toggle-icon' onClick={handleToggle}>
         {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
        </div>

        <div className='nav-div'>

        <nav className='nav-bar'>
        <ul className='links'>
          <li><a onClick={handleToggle} href='/'>About Me</a></li>
          <li><Link onClick={handleToggle} to='project' smooth={true} duration={1000}>Projects</Link></li>
          <li><Link onClick={handleToggle} to='skill' smooth={true} duration={1000}>Stacks</Link></li>
          <li><Link onClick={handleToggle} className='hire-btn' to='contact' smooth={true} duration={1000}>Hire Me</Link></li>
        </ul>
      </nav>
        </div>
    </div>
  )
}
