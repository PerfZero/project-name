import React from 'react';
import './Footer.css';
import storesIcon from './stores.svg'; // Убедитесь, что путь к изображениям корректен
import tasksIcon from './Tasks.svg';
import marketIcon from './market.svg';

const Footer = () => {
  return (
    <div className="footer">
      <a href="/index.html" className="nav-item">
        <div className="nav-item">
          <img src={storesIcon} alt="Stores" />
          <div>Stores</div>
        </div>
      </a>

      <a href="/store.html" className="nav-item">
        <div className="nav-item">
          <img src={tasksIcon} alt="Tasks" />
          <div>Tasks</div>
        </div>
      </a>

      <a href="/market.html" className="nav-item">
        <div className="nav-item">
          <img src={marketIcon} alt="Marketplace" />
          <div>Marketplace</div>
        </div>
      </a>
    </div>
  );
};

export default Footer;
