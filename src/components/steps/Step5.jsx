import React, { useState } from 'react';
import './Settings.css'; // Импортируйте файл стилей

const Settings = () => {
  const [merchantType, setMerchantType] = useState('business');
  const [storeType, setStoreType] = useState('Store');
  const [theme, setTheme] = useState('Default');
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [poweredBy, setPoweredBy] = useState(false);

  return (
    <div className="container setting-wrap">
      <div className="container_wrap">
        {/* Seller details */}
        <div className="input-group">
          <label htmlFor="merchant-type">Merchant</label>
          <div className="custom-select" id="merchant-type">
            <div className="select-selected" onClick={() => document.getElementById('merchant-type-items').classList.toggle('select-hide')}>
              {merchantType}
            </div>
            <div className="select-items select-hide" id="merchant-type-items">
              {['business', 'personal'].map(option => (
                <div key={option} onClick={() => setMerchantType(option)}>{option}</div>
              ))}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>

        {/* Shop settings */}
        <div className="input-group">
          <label htmlFor="store-type">Type</label>
          <div className="custom-select" id="store-type">
            <div className="select-selected" onClick={() => document.getElementById('store-type-items').classList.toggle('select-hide')}>
              {storeType}
            </div>
            <div className="select-items select-hide" id="store-type-items">
              {['Store', 'Booking', 'Delivery'].map(option => (
                <div key={option} onClick={() => setStoreType(option)}>{option}</div>
              ))}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="theme">Theme</label>
          <div className="custom-select" id="theme">
            <div className="select-selected" onClick={() => document.getElementById('theme-items').classList.toggle('select-hide')}>
              {theme}
            </div>
            <div className="select-items select-hide" id="theme-items">
              {['Default', 'Dark', 'Light'].map(option => (
                <div key={option} onClick={() => setTheme(option)}>{option}</div>
              ))}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="language">Language</label>
          <div className="custom-select" id="language">
            <div className="select-selected" onClick={() => document.getElementById('language-items').classList.toggle('select-hide')}>
              {language}
            </div>
            <div className="select-items select-hide" id="language-items">
              {['English', 'Spanish', 'French'].map(option => (
                <div key={option} onClick={() => setLanguage(option)}>{option}</div>
              ))}
            </div>
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
          <div className="custom-select" id="currency">
            <div className="select-selected" onClick={() => document.getElementById('currency-items').classList.toggle('select-hide')}>
              {currency}
            </div>
            <div className="select-items select-hide" id="currency-items">
              {['USD', 'EUR', 'GBP'].map(option => (
                <div key={option} onClick={() => setCurrency(option)}>{option}</div>
              ))}
            </div>
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