import React from 'react'
import './contact.css'


export default function contact() {
  return (
    <div className='contact' id='contact'>
        <div className='contact-name'>
        <i className='fa fa-id-card'></i>
            <h2>Contact Me</h2>
            </div>
        <div className='contact-main'>
        <div className='git'>
           <h3>Get In Touch
            <br />
            Let's Build Something Together.
            </h3>
           <p>Feel free to reach out if you're looking for a <br /> web developer,have questions or just want to connect</p>
           
           <div className='connect'>
           <a href='https://www.linkedin.com/in/yusuf-adegbite-ab9180221'><i className='fa fa-linkedin'></i></a>
                    <a href='https://twitter.com/that_techboy?s=09'><i className='fa fa-twitter'></i></a>
                    -Yusphate
           </div>

           <div className='l-connect'>
           <i className='fa fa-envelope'></i> 
            <span>yusufadegbite87@gmail.com</span>
            <br />
            <i className='fa fa-phone'></i> 
            <span>+234 - 9034 - 824292</span>
           </div>

        </div>

        <div className='contact-form'>
            <div className='contact-intro'>
              <p>Need a Service?</p>
              <h3>Send a Message</h3>
            </div>

              <form>
                <label>
                    Fullname
                </label>
                  <div>
                  <input></input>
                  </div>

                  <label>
                    Email Address
                </label>
                  <div>
                  <input ></input>
                  </div>

                  <label>
                    Write a Message
                </label>
                  <div className='message'>
                  <input ></input>
                  </div>

                  <button>Send Message</button>
                 
              </form>
        </div>
        
        </div>
    </div>
  )
}
