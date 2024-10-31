// Banner.js
import React from 'react';
import '../styles/Banner.css'; // Import the CSS file for styling

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Building The Alter of Worship</h1>
        <p>With Rev Kenneth Meshoe</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default Banner;
