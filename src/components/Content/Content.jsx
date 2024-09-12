import React from 'react';
import './Content.css';
import moneyImage from './money.png'; // Убедитесь, что путь к изображению корректен

const Content = () => {
  return (
    <div className="content">
      <img src={moneyImage} alt="Flying money" />
      <div className="title">
        Create your own store<br />
        on Telegram
      </div>
      <div className="description">
        SPRUTON definitely simplest and useful <br />
        platform for e-commerce.
      </div>
      <a href="/create-shop.html" className="btn create-store main-btn">
        Create store
      </a>
    </div>
  );
};

export default Content;
