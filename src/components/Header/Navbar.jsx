import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' alt=''></img>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/career'>career</Link></li>
      <li><Link to='/admin'>List</Link></li>
     <li><Link to='/signup'>Register</Link></li>
      <li><Link to='/logout'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default Navbar