// Header.js
import React from 'react';
import '../styles/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Father's Heart Digital Church</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
