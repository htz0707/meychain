import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <ul className='nav-list'>
            <li className='logo-container'>
              <a href='#' className='nav-link'>
                <div><img src={logo} alt='Logo' className='logo' /></div>
              </a>
            </li>
            <li className='desktop-link'>
              <a href='#' className='nav-link'>
                Why MeyFi
              </a>
            </li>
            <li className='desktop-link'>
              <a href='#' className='nav-link'>
                Features
              </a>
            </li>
            <li className='desktop-link'> 
              <a href='#' className='nav-link'>
                How it work
              </a>
            </li>
            <li className='desktop-link'>
              <a href='#' className='nav-link'>
                About
              </a>  
            </li>
            <li className='desktop-link'>
              <a href='#' className='nav-link'>
                Docs
              </a>
            </li>
          </ul>
        </nav>
        <button className='connect-wallet'>Connect Wallet</button>
      </div>
    </header>
  );
};

export default Header;
