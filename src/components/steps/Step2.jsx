import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import './Step2.css';

const Step2 = ({ formData, setFormData }) => {
  const [selectedStoreType, setSelectedStoreType] = useState(formData.storeType || '');
  const [selectedTheme, setSelectedTheme] = useState(formData.theme || '');
  const [channelLink, setChannelLink] = useState(formData.channelLink || '');
  const [botAPI, setBotAPI] = useState(formData.botAPI || '');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const navigate = useNavigate();

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setSelectedStoreType(savedFormData.storeType || '');
      setSelectedTheme(savedFormData.theme || '');
      setChannelLink(savedFormData.channelLink || '');
      setBotAPI(savedFormData.botAPI || '');
      setFormData(savedFormData);
    }
  }, [setFormData]);

  const handleStoreTypeChange = (e) => {
    const updatedFormData = { ...formData, storeType: e.target.value };
    setSelectedStoreType(e.target.value);
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  const handleThemeChange = (e) => {
    const updatedFormData = { ...formData, theme: e.target.textContent };
    setSelectedTheme(e.target.textContent);
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setIsSelectOpen(false);
  };

  const handleSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleNext = () => {
    navigate('/create-store/step3');
  };

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      webApp.BackButton.show();
      webApp.BackButton.onClick(() => {
        navigate('/create-store/step1');
      });

      return () => {
        webApp.BackButton.offClick(() => {
          navigate('/create-store/step1');
        });
        webApp.BackButton.hide();
      };
    }
  }, [navigate]);

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Add your bot</p>
        <ProgressBar currentStep={2} />
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
                  const updatedFormData = { ...formData, channelLink: e.target.value };
                  setChannelLink(e.target.value);
                  setFormData(updatedFormData);
                  localStorage.setItem('formData', JSON.stringify(updatedFormData));
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
                  const updatedFormData = { ...formData, botAPI: e.target.value };
                  setBotAPI(e.target.value);
                  setFormData(updatedFormData);
                  localStorage.setItem('formData', JSON.stringify(updatedFormData));
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
            disabled={!selectedStoreType || !selectedTheme || !channelLink || !botAPI}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
