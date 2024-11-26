import React from 'react'
import './Header.css';
import './Common.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="name"><p>InfoSpark</p></div>
        <div className="rightElements">
            <li><Link className='navlinks' to="/"><small>°</small>Home</Link></li>
            <li><Link className='navlinks' to="/about"><small>°</small>About Us</Link></li>
            <li><Link className='navlinks' to="contact"><small>°</small>Contact Us</Link></li>
            <li><Link className='navlinks' to="services"><small>°</small>Services</Link></li>
        </div>
    </div>
  )
}

export default Header