import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xr3fn8j', 'template_0b0ef3n', form.current, '3N3t8zlmkXAvEyCfd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert('Your message has been received!');
      setName('');
      setEmail('');
      setMessage('');
  }; 

  return (
    <div className='contact' id='contact'>
        <div className='contact-name'>
       <hr />
            </div>
        <div className='contact-main'>
        <div className='git'>
           <h3>Get In Touch
            <br />
            Let's Build Something Together.
            </h3>
           <p>Feel free to reach out if you're looking for a <br /> web developer,have questions or just want to connect</p>
           
           <div className='connect'>
           <a href='https://www.linkedin.com/in/yusuf-adegbite-ab9180221' target='_blank' rel='noreferrer'><i className='fa fa-linkedin'></i></a>
                    <a href='https://twitter.com/that_techboy?s=09' target='_blank' rel='noreferrer'><i className='fa fa-twitter'></i></a>
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

              <form ref={form} onSubmit={sendEmail}>
                <label>
                    Fullname
                </label>
                  <div>
                  <input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required></input>
                  </div>

                  <label>
                    Email Address
                </label>
                  <div>
                  <input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                  </div>

                  <label>
                    Write a Message
                </label>
                  <div className='message'>
                  <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} required></input>
                  </div>

                  <button type='submit' value='send'>Send Message</button>
                 
              </form>
        </div>
        
        </div>
    </div>
  )
}
