import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import personalIcon from '../assets/user.svg';
import businessIcon from '../assets/briefcase.svg';
import ProgressBar from '../ProgressBar';
import './Step1.css';

const Step1 = ({ formData, setFormData }) => {
  const [selectedType, setSelectedType] = useState(formData?.userType || '');
  const navigate = useNavigate();

  // Загрузка данных из localStorage при первом рендере
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData && savedFormData.userType) {
      setSelectedType(savedFormData.userType);
      setFormData(savedFormData);
    }
  }, [setFormData]);

  const handleSelect = (type) => {
    const updatedFormData = { ...formData, userType: type };
    setSelectedType(type);
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Сохраняем данные в localStorage
  };

  const handleNext = () => {
    if (selectedType) {
      navigate('/create-store/step2');
    }
  };

  // Логика кнопки "Назад" для Telegram WebApp
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Показываем кнопку назад
      webApp.BackButton.show();

      // Обработчик нажатия на кнопку "Назад"
      webApp.BackButton.onClick(() => {
        navigate('/');
      });

      // Очистка обработчика при размонтировании компонента
      return () => {
        webApp.BackButton.offClick(() => {
          navigate('/');
        });
        webApp.BackButton.hide();
      };
    }
  }, [navigate]);

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Shop details</p>
        <ProgressBar currentStep={1} />
      </div>

      <div className="choose_type">
        <h2 className="choose_text">Choose type</h2>
        <div className="choose_block">
          <div
            className={`choose_block-item ${selectedType === 'personal' ? 'selected' : ''}`}
            onClick={() => handleSelect('personal')}
            id="individualOption"
          >
            <img src={personalIcon} alt="Personal" width="32" height="32px" className="choose_block-img" />
            <h3 className="choose_block-title">Personal</h3>
            <p className="choose_block-subtitle">Description</p>
          </div>
          <div
            className={`choose_block-item ${selectedType === 'business' ? 'selected' : ''}`}
            onClick={() => handleSelect('business')}
            id="businessOption"
          >
            <img src={businessIcon} alt="Business" width="32" height="32px" className="choose_block-img" />
            <h3 className="choose_block-title">Business</h3>
            <p className="choose_block-subtitle">Description</p>
          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className={`btn btn-catalog ${!selectedType ? 'disabled' : ''}`}
            id="nextButton"
            onClick={handleNext}
            disabled={!selectedType}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
