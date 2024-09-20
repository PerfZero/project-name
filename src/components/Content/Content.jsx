import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import moneyImage from './money.png'; // Убедитесь, что путь к изображению корректен

const Content = () => {
  const handleCreateStoreClick = () => {
    localStorage.removeItem('formData'); // Очищаем данные из localStorage
  };

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
      {/* Используем Link с onClick для очищения localStorage */}
      <Link to="/create-store/step1" className="btn create-store main-btn" onClick={handleCreateStoreClick}>
        Create store
      </Link>
    </div>
  );
};

export default Content;
