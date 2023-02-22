import React from 'react';
import './project.css';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Project() {
  return (
    <div className='project-div' id='project'>
      <div className='project-header'>
           <h2>Portfolio Projects</h2>
             <p>Here are the projects i have completed</p>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInRight">
      <div className='project-flex'>

      <div className='project1'>
        <div className='project1-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Zuri Landing Page
          </h4> 
          <p>
            This is landing page for Zuri website. <br /><br /> Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span> 
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/Zuri-landing-page-2' target='_blank' rel='noreferrer'> <FaGithub  className='icon' /> </a>
             <a href='https://yusufadegbite.github.io/Zuri-landing-page-2/' target='_blank' rel='noreferrer'> <GoLinkExternal className='icon' /> </a>
          </p>
        </div>

      </div>


      <div className='project1'>
        <div className='project2-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Simple Calculator
          </h4>
          <p>
            A Calculator app that solves basic <br /> arithmetic operations.Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span> <span className='stack-span'>JAVASCRIPT</span>
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/simple-arithmetic-calculator' target='_blank' rel='noreferrer'><FaGithub className='icon' /> </a> 
              <a href='https://yusufadegbite.github.io/simple-arithmetic-calculator/' target='_blank' rel='noreferrer'><GoLinkExternal className='icon' /></a>
          </p>
        </div>

      </div>


      <div className='project1'>
        <div className='project3-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Sunnyside Agency Page
          </h4>
          <p>
            A landing page for sunnyside agency.<br /><br /> Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span> <span className='stack-span'>JAVASCRIPT</span>
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/Sunnyside-Agency-Landing-Page' target='_blank' rel='noreferrer'><FaGithub href='/' className='icon' /> </a> 
              <a href='https://yusufadegbite.github.io/Sunnyside-Agency-Landing-Page/' target='_blank' rel='noreferrer'><GoLinkExternal className='icon' /></a>
          </p>
        </div>

      </div>

      <div className='project1'>
        <div className='project4-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            FAQ Accordion Card
          </h4>
          <p>
            A frequently asked questions accordion<br /><br /> Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span> <span className='stack-span'>JAVASCRIPT</span>
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/FAQ-Accordion-Menu' target='_blank' rel='noreferrer'><FaGithub href='/' className='icon' /> </a> 
              <a href='https://yusufadegbite.github.io/FAQ-Accordion-Menu/' target='_blank' rel='noreferrer'><GoLinkExternal className='icon' /></a>
          </p>
        </div>

      </div>

      <div className='project1'>
        <div className='project5-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Zuri.Team Landing Page
          </h4>
          <p>
          This is landing page for Zuri.Team website. <br /><br /> Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span> 
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/Zuri-landing-page' target='_blank' rel='noreferrer'><FaGithub href='/' className='icon' /> </a> 
              <a href='https://yusufadegbite.github.io/Zuri-landing-page/' target='_blank' rel='noreferrer'><GoLinkExternal className='icon' /></a>
          </p>
        </div>

      </div>

      <div className='project1'>
        <div className='project6-preview'>
     
        </div>

        <div className='project1-note'>
          <h4>
            Product Preview Card
          </h4>
          <p>
            A product preview component card with the product description. <br /> Built with <span className='stack-span'>HTML5</span>  <span className='stack-span'>CSS</span>
          </p>
          <p className='icons'>
             <a href='https://github.com/yusufadegbite/Product-Preview-Component-Card' target='_blank' rel='noreferrer'><FaGithub href='/' className='icon' /> </a> 
              <a href='https://yusufadegbite.github.io/Product-Preview-Component-Card/' target='_blank' rel='noreferrer'><GoLinkExternal className='icon' /></a>
          </p>
        </div>

      </div>

      

      </div>
      </AnimationOnScroll>

    </div>
  )
}
