import React from 'react';
import './ProgressBar.css'; // Стили для прогресс-бара

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="status-header__shop">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className={`bar ${step <= currentStep ? 'active-bar' : ''}`}></div>
      ))}
    </div>
  );
};

export default ProgressBar;
