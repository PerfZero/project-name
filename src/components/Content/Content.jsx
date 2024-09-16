import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
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
      {/* Используем Link вместо a для перехода по маршруту */}
      <Link to="/create-store/step1" className="btn create-store main-btn">
        Create store
      </Link>
    </div>
  );
};

export default Content;
