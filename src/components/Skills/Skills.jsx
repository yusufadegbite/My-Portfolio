import React from 'react'
import './Skills.css';
import Css from "../images/css-logo.svg";
import Html from "../images/html-logo.svg";
import Js from "../images/js-logo.svg";
import ReactJs from "../images/react-logo.svg";
import Tailwind from "../images/tailwind-logo.svg";
import Bootstrap from "../images/bootstrap-logo.png";


export default function Skills() {
  return (
    <div className='skills-intro animate__animated animate__zoomIn' id='skill'>
         <h2 className="">
          Technical Skills
        </h2>
        <div className='skills-div'>

        <div className="skill">
            <div className="skill-image">
              <img src={Html} alt="html" className="" />
            </div>
            <h5 className="skill-text">HTML</h5>
          </div>

          <div className="skill">
            <div className="skill-image">
              <img src={Css} alt="css" className="" />
            </div>
            <h5 className="skill-text">CSS</h5>
          </div>

          <div className="skill">
            <div className="skill-image">
              <img src={Js} alt="javascript" className="" />
            </div>
            <h5 className="skill-text">JAVASCRIPT</h5>
          </div>

          <div className="skill">
            <div className="skill-image">
              <img src={ReactJs} alt="react" className="" />
            </div>
            <h5 className="skill-text">REACT</h5>
          </div>

          <div className="skill">
            <div className="skill-image">
              <img src={Tailwind} alt="tailwind" className="" />
            </div>
            <h5 className="skill-text">TAILWIND</h5>
          </div>

          <div className="skill">
            <div className="skill-image">
              <img src={Bootstrap} alt="bootstrap" className="" />
            </div>
            <h5 className="skill-text">BOOTSTRAP</h5>
          </div>
          <hr />
        </div>
        
    </div>

  )
}
