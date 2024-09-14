import React from 'react'
import './About.css'
import '@fortawesome/fontawesome-free'

const About = () => {
  return (
    <header  className='about'>

<h1 className='about-title'>
        Life Planning, Making <br />
        Easy to Turn Dreams a Reality.
      </h1>
      <p className='about-subtitle'>
        Get Exclusive offers on purchase of any plans
      </p>
      <div className='button-container'>
      <button className='email-btn'>

        <i className="bi bi-send-fill" > </i><b>Your Email</b>
      </button>

      <button className='signup-btn'>
      <b>  Sign Up</b>
        </button>
        </div>
    </header>


  )
}

export default About
