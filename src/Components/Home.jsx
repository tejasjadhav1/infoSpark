import React from 'react';
import './Home.css';
import './Common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
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
        <div className="footprints">
          🌐
          <p>Mumbai</p>
          <p>Jalgaon</p>
        </div>
      </div>
      <div className="right">
        {/* Additional content can go here */}
        <img 
        src={`${process.env.PUBLIC_URL}/Images/network.jpg`} 
        alt="Network" 
        style={{ width: '100%', height: 'auto' }} // Optional: Adjust size as needed
      />
      </div>
    </div>
  );
}

export default Home;
