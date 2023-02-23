import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer_flex'>
    <div className='about_us'>
      <h6>about us</h6>
      <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
      </div>
      <div className='footer1'>
      <h6>Menus</h6>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Career</li>
        </ul>
      </div>
      <div className='footer2'>
      <h6>LEARN MORE</h6>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='footer3'>
        <h6>ADDRESS</h6>
        Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
        <br/>
        Phone: +91 8555029170
        <br/>
        Email: hi@rubixe.com
        <br/>
        Social Media
      </div>
        <div className='child2'>
        <a href='https://www.facebook.com/Rubixe.Official/'>
        <img src="https://gtvsairam.github.io/Portfolio-Project/facebook-logo-2019.png" alt=""></img>
        </a>
        <a href='https://www.linkedin.com/company/rubixe'>
        <img src="https://gtvsairam.github.io/Portfolio-Project/linkedin.png" alt=""></img>
        </a>
        </div>

    </div>
    
    </div>
    <div className='footer_bottom'>
      <p>© Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</p>
    </div>

    </>
    
  )
}

export default Footer