// Hero.js
import React from 'react';
import '../styles/Hero.css'; // Import the CSS file for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Psalm 103:13</h1>
        <p>As a father shows compassion to his children, so the Lord shows compassion to those who fear him.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src='Images/ChurchAppThumb.jpg' alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
