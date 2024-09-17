import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar'; // Убедитесь, что путь к компоненту правильный
import './Step2.css'; // Убедитесь, что у вас есть стили для этого компонента

const Step2 = ({ formData, setFormData }) => {
  const [selectedStoreType, setSelectedStoreType] = useState(formData.storeType || '');
  const [selectedTheme, setSelectedTheme] = useState(formData.theme || '');
  const [channelLink, setChannelLink] = useState(formData.channelLink || '');
  const [botAPI, setBotAPI] = useState(formData.botAPI || '');
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Добавлено состояние для управления видимостью

  const navigate = useNavigate(); // Используем useNavigate хук

  const handleStoreTypeChange = (e) => {
    setSelectedStoreType(e.target.value);
    setFormData({ ...formData, storeType: e.target.value });
  };

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.textContent);
    setFormData({ ...formData, theme: e.target.textContent });
    setIsSelectOpen(false); // Закрываем селект после выбора
  };

  const handleSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen); // Переключаем видимость селекта
  };

  const handleNext = () => {
    navigate('/create-store/step3'); // Используем navigate для перехода
  };

  useEffect(() => {
    // Убедитесь, что кнопка "Назад" в Telegram Web App настроена правильно
    if (window.Telegram && window.Telegram.WebApp) {
      const { BackButton } = window.Telegram.WebApp;
      BackButton.show();
      BackButton.onClick(() => {
        navigate(-1); // Переход на предыдущую страницу
      });
    }
  }, [navigate]);

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <a href="/create-store/step1">
          <p className="back">Back</p>
        </a>
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Add your bot</p>
        <ProgressBar currentStep={2} /> {/* Добавляем ProgressBar */}
      </div>

      <div className="choose_type">
        <h2 className="choose_text">Type of store</h2>
        <div className="choose_block">
          <div className="type__block">
            <div className="input__block">
              <label>
                <input
                  type="radio"
                  name="store_type"
                  value="shop"
                  checked={selectedStoreType === 'shop'}
                  onChange={handleStoreTypeChange}
                />
                Shop
              </label>
              <label>
                <input
                  type="radio"
                  name="store_type"
                  value="booking"
                  checked={selectedStoreType === 'booking'}
                  onChange={handleStoreTypeChange}
                />
                Booking
              </label>
              <label>
                <input
                  type="radio"
                  name="store_type"
                  value="coming_soon"
                  disabled
                />
                Coming soon
              </label>
            </div>

            <div className="input-group">
              <label htmlFor="currency">Theme</label>
              <div className="custom-select" id="currency" onClick={handleSelectToggle}>
                <div className="select-selected gray">{selectedTheme || 'Choose theme of shop'}</div>
                <div className={`select-items ${isSelectOpen ? '' : 'select-hide'}`}>
                  <div onClick={handleThemeChange}>Theme 1</div>
                  <div onClick={handleThemeChange}>Theme 2</div>
                  <div onClick={handleThemeChange}>Theme 3</div>
                </div>
              </div>
              <i className="arrow-down"></i>
            </div>

            <div className="input-group">
              <label htmlFor="link">Channel URL</label>
              <input
                type="text"
                placeholder="https://t.me/toyseller"
                value={channelLink}
                onChange={(e) => {
                  setChannelLink(e.target.value);
                  setFormData({ ...formData, channelLink: e.target.value });
                }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="bot">Bot API</label>
              <input
                type="text"
                placeholder="mnjDN_22nDU-WEJKCX..."
                value={botAPI}
                onChange={(e) => {
                  setBotAPI(e.target.value);
                  setFormData({ ...formData, botAPI: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className="btn btn-catalog"
            onClick={handleNext}
            disabled={!selectedStoreType || !selectedTheme}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
