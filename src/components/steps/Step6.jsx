import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step6.css';

const Step6 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/store/2/orders'); // Замените на нужный маршрут
  };

  return (
    <div className="container create-shop success-step">
      <div className="success-content">
        <img src="/images/success.png" alt="Success" className="success-image" />
        <h1 className="success-title">Congratulation!</h1>
        <p className="success-message">Your shop was successfully created!</p>
        <p className="success-messages">Now it's time to add your first item to your new shop.</p>
        <button className="btn btn-catalog" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Step6;