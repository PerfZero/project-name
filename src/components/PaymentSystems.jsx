import React, { useState, useRef, useEffect } from 'react';
import './PaymentSystems.css'; // Убедитесь, что этот файл стилей существует и подключен

const PaymentSystems = () => {
  const [activePayment, setActivePayment] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const popupRef = useRef(null);

  const paymentOptions = [
    {
      name: 'Cash Payment',
      description: 'Accept payments in cash at your physical store.',
    },
    {
      name: 'Virtual Currency',
      description: 'Accept payments in virtual currency.',
    },
    {
      name: 'Telegram Stars',
      description: 'Telegram Stars is a virtual currency used within the Telegram ecosystem for various in-app purchases and premium features, providing a seamless and secure way to transact within the platform.',
    },
    {
      name: 'Toncoin',
      description: 'Toncoin is the native cryptocurrency of The Open Network (TON), designed for fast, secure, and scalable transactions within decentralized applications and services.',
    },
    {
      name: 'Fiat Providers',
      description: 'Accept payments via fiat providers.',
      providers: ['T-Bank', 'Sber', 'Stripe'],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  const handlePaymentChange = (name) => {
    setActivePayment(name);
    if (name === 'Fiat Providers') {
      setPopupOpen(true);
    }
  };

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setPopupOpen(false);
  };

  return (
    <div className="payment-systems order-contents">
      {paymentOptions.map((option) => (
        <div key={option.name} className="payment-option order-filter">
          <label >
            <input
              type="radio"
              name="payment"
              checked={activePayment === option.name}
              onChange={() => handlePaymentChange(option.name)}
            />
            {option.name}
          </label>
          {/* <span className="tooltip">
            <span className="tooltiptext">{option.description}</span>
          </span> */}
        </div>
      ))}
      {activePayment && (
        <div className="additional-settings">
          {activePayment === 'Fiat Providers' && selectedProvider && (
            <p>Selected Provider: {selectedProvider}</p>
          )}
          {/* Здесь можно добавить дополнительные настройки для выбранного варианта оплаты */}
          <p>Additional settings for {activePayment}</p>
        </div>
      )}
      {isPopupOpen && (
        <div className="payment-popup filter-popup" ref={popupRef}>
          <div className="payment-popup-content filter-popup-content">
            <div className="payment-section filter-section">
              <p className="payment-section-title">Select Provider</p>
              {paymentOptions.find(option => option.name === 'Fiat Providers').providers.map((provider, index) => (
                <div
                  className={`filter-item  ${provider === selectedProvider ? 'actives' : ''}`}
                  key={index}
                  onClick={() => handleProviderSelect(provider)}
                >
                  {provider}
                </div>
              ))}
            </div>
            <button className="apply-button btn" onClick={() => setPopupOpen(false)}>Apply</button>
          </div>
          <div className="payment-popup-overlay" onClick={() => setPopupOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default PaymentSystems;