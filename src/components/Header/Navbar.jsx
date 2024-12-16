import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src='https://rubixe.com/assets/img/rubixe-white-logo.webp' alt=''></img>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/career'>career</Link></li>
      <li><Link to='/admin'>List</Link></li>
     <li><Link to='/Registration'>Register</Link></li>
      <li><Link to='/logout'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Navbar