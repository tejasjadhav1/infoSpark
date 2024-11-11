import React from 'react'
import './Header.css';
import './Common.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="name"><p>InfoSpark</p></div>
        <div className="rightElements">
            <li><small>°</small>Home</li>
            <li><small>°</small>About Us</li>
            <li><small>°</small>Contact Us</li>
            <li><small>°</small>Services</li>
        </div>
    </div>
  )
}

export default Header