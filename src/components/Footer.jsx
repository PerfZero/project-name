import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as StoreIcon } from '../icons/store.svg';
import { ReactComponent as TasksIcon } from '../icons/tasks.svg';
import { ReactComponent as MarketplaceIcon } from '../icons/marketplace.svg';
import './Footer.css'; // Подключите CSS для стилей футера

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer >
      <div className="footer-buttons">
        <Link to="/store" className={`footer-button ${isActive('/store') ? 'active' : ''}`}>
          <StoreIcon className="footer-icon" />
          <span className="footer-text">Store</span>
        </Link>
        <Link to="/tasks" className={`footer-button ${isActive('/tasks') ? 'active' : ''}`}>
          <TasksIcon className="footer-icon" />
          <span className="footer-text">Tasks</span>
        </Link>
        <Link to="/marketplace" className={`footer-button ${isActive('/marketplace') ? 'active' : ''}`}>
          <MarketplaceIcon className="footer-icon" />
          <span className="footer-text">Marketplace</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
