import React, { useState } from 'react';
import './Home.css';
import './Common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="dflex">
      <div className="left">
        <div className="tagline">
          <p>Transforming Exam</p>
          <p>Center With</p>
          <p>Technology and</p>
          <p>Excellence</p>
        </div>
        <button className="knowmore">
          Know More <FontAwesomeIcon className='arrowRght' icon={faArrowRight} />
        </button>

        <div className="dflex" style={{ justifyContent: 'space-between' }}>
          <div className="footprints">
            🌐
            <p>Mumbai</p>
            <p>Jalgaon</p>
          </div>
          <div 
            className="chat" 
         
            style={{ position: 'relative' }} // Ensure the hover element is positioned correctly
          >
            <img 
               onMouseEnter={() => setIsHovered(true)} 
               onMouseLeave={() => setIsHovered(false)} 
              className='chatimg' 
              style={{ width: '40px', marginRight: '80px', cursor: 'pointer' }} 
              src={`${process.env.PUBLIC_URL}/Images/chat.png`} 
              alt="Chat Icon" 
            />
            <div className={`chatHover ${isHovered ? 'visible' : ''}`}>
              Chat With Us
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {/* Additional content can go here */}
        <img 
          src={`${process.env.PUBLIC_URL}/Images/network.jpg`} 
          alt="Network" 
          style={{ width: '100%', height: '100%' }} // Optional: Adjust size as needed
        />
        <div className="top-content">
          hey
        </div>
      </div>
    </div>
  );
}

export default Home;
