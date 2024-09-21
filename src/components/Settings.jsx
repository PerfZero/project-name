import React, { useState } from 'react';
import './Settings.css'; // Импортируйте файл стилей

const Settings = () => {
  const [storeType, setStoreType] = useState('Shop');
  const [currency, setCurrency] = useState('USD');
  const [payments, setPayments] = useState('Crypto, Bank cards');
  const [language, setLanguage] = useState('English');
  const [delivery, setDelivery] = useState('FeedEx');

  return (
    <div className="container setting-wrap">
      <div className="container_wrap">
        <div className="input-group">
          <label htmlFor="shop-logo">Shop logo</label>
          <div className="shop_logo-load"></div>
        </div>
        <div className="input-group">
          <label htmlFor="currency">Type of store</label>
          <div className="custom-select" id="store-type">
            <div className="select-selected" onClick={() => document.getElementById('store-type-items').classList.toggle('select-hide')}>
              {storeType}
            </div>
            <div className="select-items select-hide" id="store-type-items">
              {['Store', 'Service', 'Shop'].map(option => (
                <div key={option} onClick={() => setStoreType(option)}>{option}</div>
              ))}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="store-name">Name of store</label>
          <input type="text" id="store-name" placeholder="Toy Seller" />
        </div>
        <div className="input-group">
          <label htmlFor="store-description">Description of store</label>
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
        <div className="input-group">
          <label htmlFor="payments">Payments</label>
          <div className="custom-select" id="payments">
            <div className="select-selected" onClick={() => document.getElementById('payments-items').classList.toggle('select-hide')}>
              {payments}
            </div>
            <div className="select-items select-hide" id="payments-items">
              {['Crypto, Bank cards', 'PayPal', 'Stripe'].map(option => (
                <div key={option} onClick={() => setPayments(option)}>{option}</div>
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
          <label htmlFor="delivery">Delivery</label>
          <div className="custom-select" id="delivery">
            <div className="select-selected" onClick={() => document.getElementById('delivery-items').classList.toggle('select-hide')}>
              {delivery}
            </div>
            <div className="select-items select-hide" id="delivery-items">
              {['FeedEx', 'DHL', 'UPS'].map(option => (
                <div key={option} onClick={() => setDelivery(option)}>{option}</div>
              ))}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="channel-link">Channel link</label>
          <input type="text" id="channel-link" placeholder="Enter channel link" />
        </div>
        <div className="input-group">
          <label htmlFor="bot-api">Bot API</label>
          <input type="text" id="bot-api" placeholder="Enter bot API token" />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="footers fix-footer">
        <div className="contents">
          <div className="btn btn-catalog">Save</div>
        </div>
      </div>    </div>
  );
};

export default Settings;
