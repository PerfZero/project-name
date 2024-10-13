import React, { useState } from 'react';
import './Settings.css'; // Импортируйте файл стилей

const Settings = () => {
  const [merchantType, setMerchantType] = useState('Business');
  const [storeType, setStoreType] = useState('Store');
  const [theme, setTheme] = useState('Default');
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [poweredBy, setPoweredBy] = useState(false);

  const [showMerchantOptions, setShowMerchantOptions] = useState(false);
  const [showStoreTypeOptions, setShowStoreTypeOptions] = useState(false);
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);

  const toggleOptions = (setter) => {
    setter((prevState) => !prevState);
  };

  const handleOptionSelect = (setter, value, setterVisibility, event) => {
    event.stopPropagation(); // Останавливаем распространение события
    setter(value);
    setterVisibility(false);
  };

  return (
    <div className="container setting-wrap">
      <div className="container_wrap">
        {/* Seller details */}
        <div className="input-group">
          <label htmlFor="merchant-type">Merchant</label>
          <div className="custom-select" onClick={() => toggleOptions(setShowMerchantOptions)}>
            <div className="select-selected">
              {merchantType}
            </div>
            {showMerchantOptions && (
              <div className="select-items">
                {['Business', 'Personal'].map(option => (
                  <div key={option} onClick={(event) => handleOptionSelect(setMerchantType, option, setShowMerchantOptions, event)}>{option}</div>
                ))}
              </div>
            )}
            <i className="arrow-down"></i>
          </div>
        </div>

        {/* Shop settings */}
        <div className="input-group">
          <label htmlFor="store-type">Type</label>
          <div className="custom-select" onClick={() => toggleOptions(setShowStoreTypeOptions)}>
            <div className="select-selected">
              {storeType}
            </div>
            {showStoreTypeOptions && (
              <div className="select-items">
                {['Store', 'Booking', 'Delivery'].map(option => (
                  <div key={option} onClick={(event) => handleOptionSelect(setStoreType, option, setShowStoreTypeOptions, event)}>{option}</div>
                ))}
              </div>
            )}
            <i className="arrow-down"></i>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="theme">Theme</label>
          <div className="custom-select" onClick={() => toggleOptions(setShowThemeOptions)}>
            <div className="select-selected">
              {theme}
            </div>
            {showThemeOptions && (
              <div className="select-items">
                {['Default', 'Dark', 'Light'].map(option => (
                  <div key={option} onClick={(event) => handleOptionSelect(setTheme, option, setShowThemeOptions, event)}>{option}</div>
                ))}
              </div>
            )}
            <i className="arrow-down"></i>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="language">Language</label>
          <div className="custom-select" onClick={() => toggleOptions(setShowLanguageOptions)}>
            <div className="select-selected">
              {language}
            </div>
            {showLanguageOptions && (
              <div className="select-items">
                {['English', 'Spanish', 'French'].map(option => (
                  <div key={option} onClick={(event) => handleOptionSelect(setLanguage, option, setShowLanguageOptions, event)}>{option}</div>
                ))}
              </div>
            )}
            <i className="arrow-down"></i>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="bot-api">Bot API</label>
          <input type="text" id="bot-api" placeholder="Enter bot API token" />
        </div>

        {/* Shop details */}
        <div className="input-group">
          <label htmlFor="shop-logo">Logo</label>
          <div className="shop_logo-load"></div>
        </div>
        <div className="input-group">
          <label htmlFor="store-name">Name</label>
          <input type="text" id="store-name" placeholder="Toy Seller" />
        </div>
        <div className="input-group">
          <label htmlFor="store-description">Description</label>
          <textarea id="store-description" placeholder="Description"></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="currency">Currency</label>
          <div className="custom-select" onClick={() => toggleOptions(setShowCurrencyOptions)}>
            <div className="select-selected">
              {currency}
            </div>
            {showCurrencyOptions && (
              <div className="select-items">
                {['USD', 'EUR', 'GBP'].map(option => (
                  <div key={option} onClick={(event) => handleOptionSelect(setCurrency, option, setShowCurrencyOptions, event)}>{option}</div>
                ))}
              </div>
            )}
            <i className="arrow-down"></i>
          </div>
        </div>

        {/* Additional details */}
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" placeholder="Enter address"></textarea>
        </div>

        {/* Powered by SPRUTON */}
        <div className="input-group check_box-cpa">
          <div className="cpa">Powered by SPRUTON</div>
          <label className="switch">
            <input type="checkbox" checked={poweredBy} onChange={() => setPoweredBy(!poweredBy)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="footers fix-footer">
        <div className="contents">
          <div className="btn btn-catalog">Save</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
