import React from 'react'
import '../styles/aboutStyle.css'
import aboutImage from '../../public/about.jpg'
function About() {
  return (
    <div>

<div className="about-body d-flex align-items-center">
      <img src={aboutImage} alt="About Us" className='about-image-responsive' />
      <div className="about-content">
        <span>About Us</span>
        <div className="underline-about"></div>
        <span>fsdgsdfgsdf sdfgsdfg sdfgs dfg sdfg sd fg sdfg sad fg asdfgsdfg sdfg srf g wetrg df gsd fg sdf</span>
      </div>
    </div>
    </div>
  )
}

export default About