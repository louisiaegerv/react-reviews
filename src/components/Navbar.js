import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='site-title'>
        <p>
          <span className='title-icon'>💬</span>
          <Link to='/'>React Reviews</Link>
        </p>
      </div>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
