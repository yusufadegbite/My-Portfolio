import React from 'react'
import './Skills.css';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';


export default function Skills() {
  return (
    <div className='skills-intro animate__animated animate__zoomIn' id='skill'>
        <div className='skills-header'>
          <i className='fa fa-microchip'></i>
             <h2>My Skills and Technologies</h2>
             <p>Here are a few skills i possess</p>
        </div>

        <div className='skills-div'>

            <div>
            <i className='fa fa-html5'></i> 
            <span>HTML5</span>
            </div>

            <div>
            <i className='fa fa-css3'></i> 
            <span>CSS3</span>
            </div>

            <div className='js'>
            <FaJs className='fa-plug' />
            <span>JAVASCRIPT</span>
            </div>

            <div className='rt'> 
            <span> <FaReact className='fa-plug' /> REACT</span>
            </div>

            <div className='jq'>
            <DiJqueryLogo className='fa-plug' />
            <span>JQUERY</span>
            </div>

            <div className='bp'>
            <FaBootstrap className='fa-plug' />
            <span>BOOTSTRAP</span>
            </div>



        </div>
        
    </div>
  )
}
