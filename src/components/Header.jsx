// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar">
        
          <h2 className="Title">Smart Home Automation System</h2>
          {/* <a><Link to="/" className="Item">Home</Link></a>
          <a><Link to="/lights" className="Item">Lights</Link></a>
          <a><Link to="/thermostat" className="Item">Thermostat</Link></a>
          <a><Link to="/security" className="Item">Security</Link></a> */}
        
      </nav>
    </header>
  );
}

export default Header;
