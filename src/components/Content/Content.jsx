import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import moneyImage from './money.png'; // Ensure the path to the image is correct
import { initHapticFeedback } from '@telegram-apps/sdk'; // Import haptic feedback initialization

const Content = () => {
  const handleCreateStoreClick = () => {
    localStorage.removeItem('formData'); // Clear data from localStorage

    const hapticFeedback = initHapticFeedback(); // Initialize haptic feedback
    hapticFeedback.notificationOccurred('success'); // Trigger haptic feedback on button click
  };

  return (
    <div className="content">
      <img src={moneyImage} alt="Flying money" />
      <div className="title">
        Create your own shop<br />
        on Telegram
      </div>
      <div className="description">
        SPRUTON definitely simplest and useful <br />
        platform for e-commerce.
      </div>
      <Link to="/create-store/step1" className="btn create-store main-btn" onClick={handleCreateStoreClick}>
        Create Shop
      </Link>
    </div>
  );
};

export default Content;
