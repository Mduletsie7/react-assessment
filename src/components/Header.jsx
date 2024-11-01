// Header.js
import React from 'react';
import '../styles/Header.css'; // Import the CSS file for styling
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Fathers Heart | Digital Church</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="/" smooth={true} duration={500}>Events</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
