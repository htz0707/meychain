import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.svg';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt='logo' className='logo' />
          <div className='small-logo-container'>
            <img src={youtube} alt='logo' className='small-logo' />
            <img src={twitter} alt='logo' className='small-logo' />
            <img src={linkedin} alt='logo' className='small-logo' />
          </div>
        </div>
        <div className='footer-top-right'>
          <p className='footer-text'>Stay updated with the latest from Mey Network</p>
          <div className='input-group'>
            <input placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          Meychain, All rights reserved.
        </div>
        <div className='footer-bottom-right'>
          <a>About Us</a>
          <a>Contact Us</a>
          <a>Privacy Policy</a>
          <a>Term of Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
