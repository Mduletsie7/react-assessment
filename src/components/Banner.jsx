import React, { useState } from 'react';
import '../styles/Banner.css'; // Assuming this is your existing CSS file

const Banner = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleLearnMoreClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  // Close the popup when clicking outside of the popup content (image)
  const handleOverlayClick = (e) => {
    // Check if the click is outside of the popup-content
    if (e.target.classList.contains('popup')) {
      handleClosePopup();
    }
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Building The Alter of Worship</h1>
        <p>With Rev Kenneth Meshoe</p>
        <button className="learn-more" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>

      {isPopupVisible && (
        <div className="popup" onClick={handleOverlayClick}>
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <img src="Images/6.png" alt="Event" className="popup-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
