import React from 'react'
import './project.css'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

export default function Project() {
  return (
    <div className='project-div' id='project'>

      <div className='project-header'>
           <h2>Projects</h2>
             <p>Here are the projects i have completed</p>
      </div>

      <div className='project-flex'>

      <div className='project1'>
        <div className='project1-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Simple Calculator
          </h4>
          <p>
            A Calculator app that solves basic <br /> arithmetic operations.Built with HTML5, <br />CSS and JAVASCRIPT
          </p>
          <p className='icons'>
              <FaGithub className='icon' /> 
              <GoLinkExternal className='icon' />
          </p>
        </div>

      </div>


      <div className='project1'>
        <div className='project1-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Simple Calculator
          </h4>
          <p>
            A Calculator app that solves basic <br /> arithmetic operations.Built with HTML5, <br />CSS and JAVASCRIPT
          </p>
          <p className='icons'>
              <FaGithub className='icon' /> 
              <GoLinkExternal className='icon' />
          </p>
        </div>

      </div>


      <div className='project1'>
        <div className='project1-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Simple Calculator
          </h4>
          <p>
            A Calculator app that solves basic <br /> arithmetic operations.Built with HTML5, <br />CSS and JAVASCRIPT
          </p>
          <p className='icons'>
              <FaGithub href='/' className='icon' /> 
              <GoLinkExternal className='icon' />
          </p>
        </div>

      </div>

      </div>

    </div>
  )
}
