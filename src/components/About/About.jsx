import React from 'react';
import './About.css';


export default function About() {

  return (
    <div>
        <div className='about-div  animate__animated animate__slideInLeft'>

        <div className='profile-picture-mobile'>
               <div className='mobile'>

               </div>
            </div>
            <div className='intro'>
              <div className='intro-div'>
                <p>HI THERE,</p>
                <h3>I AM YUSUF ADEGBITE.</h3>
                <h2>
                A Front End Web Developer, 
                   <br /> Student and Programmer.</h2>
                </div>
                <div className='social'>
                <div>
                <button className='resume-btn'>Resume</button>
                </div>
                <div className='social-links'>
                
                <a href='https://www.linkedin.com/in/yusuf-adegbite-ab9180221' target='_blank' rel='noreferrer'><i className='fa fa-linkedin'></i></a>
                    <a href='https://twitter.com/that_techboy?s=09' target='_blank' rel='noreferrer'><i className='fa fa-twitter'></i></a>
                    <a href='https://github.com/yusufadegbite' target='_blank' rel='noreferrer'><i className='fa fa-github'></i></a>
                </div>
                    
                </div>
            </div>
            <div className='profile-picture'>
               <div className='picture'>

               </div>
            </div>
        </div>
        <div className='bio animate__animated animate__slideInUp'>
          <i className='fa fa-user'></i>
             <h2>About Me</h2>
             <p>
              I'm Yusuf Adegbite,a student of Civil Engineering from the University of Ibadan,Nigeria and creative front-end web developer, i circumvent problems relating to user interaction with websites and i create consistent and unified web designs that creates a positive experience for users across all platforms and all devices.I have proven skills with certificate in HTML5,CSS3 and JAVASCRIPT.
              Im currently learning ReactJs and PHP for backend development,looking forward to becoming a Fullstack Developer.
             </p>
        </div>

     <hr />
    </div>
  )
}
