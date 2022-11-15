import React from 'react'
import './footer.css'

export default function footer() {
  return (
    <div>
        <div className='footer-main'>
            <div className='name'> <hr /> Yusuf Adegbite <hr /> </div>
            <div className='f-links'>
            <a href='https://www.linkedin.com/in/yusuf-adegbite-ab9180221'><i className='fa fa-linkedin'></i></a>
                    <a href='https://twitter.com/that_techboy?s=09'><i className='fa fa-twitter'></i></a>
                    <a href='https://github.com/yusufadegbite'><i className='fa fa-github'></i></a>
            </div>
            <p>Copyright &copy; 2022.All rights Reserved</p>

        </div>
    </div>
  )
}
