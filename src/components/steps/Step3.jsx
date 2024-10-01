import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import { initHapticFeedback } from '@telegram-apps/sdk'; // Импорт haptic feedback
import './Step3.css';

const Step3 = ({ formData, setFormData }) => {
  const [storeName, setStoreName] = useState(formData.storeName || '');
  const [currency, setCurrency] = useState(formData.currency || 'USD');
  const [storeDescription, setStoreDescription] = useState(formData.storeDescription || '');
  const [logo, setLogo] = useState(formData.logo || '');
  const [paymentMethod, setPaymentMethod] = useState(formData.paymentMethod || '');
  const [deliveryMethod, setDeliveryMethod] = useState(formData.deliveryMethod || '');
  const [fileKey, setFileKey] = useState(Date.now());
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Инициализация haptic feedback
  const hapticFeedback = initHapticFeedback();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        setFormData({ ...formData, logo: reader.result });
        hapticFeedback.selectionChanged(); // Haptic feedback при изменении логотипа
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo('');
    setFormData({ ...formData, logo: '' });
    setFileKey(Date.now());
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    hapticFeedback.selectionChanged(); // Haptic feedback при удалении логотипа
  };

  const handleNext = () => {
    hapticFeedback.notificationOccurred('success'); // Haptic feedback при нажатии "Next"
    navigate('/create-store/step4');
  };

  const handleSelectChange = (type, value) => {
    if (type === 'currency') {
      setCurrency(value);
      setFormData({ ...formData, currency: value });
      setIsSelectOpen(false);
      hapticFeedback.selectionChanged(); // Haptic feedback при изменении валюты
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setFormData({ ...formData, paymentMethod: e.target.value });
    hapticFeedback.selectionChanged(); // Haptic feedback при изменении метода оплаты
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
    setFormData({ ...formData, deliveryMethod: e.target.value });
    hapticFeedback.selectionChanged(); // Haptic feedback при изменении метода доставки
  };

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Shop details</p>
        <ProgressBar currentStep={3} />
      </div>

      <div className="choose_type">
        <div className="container">
          <div className="input-group">
            <label htmlFor="shop-logo">Logo</label>
            <div className="shop_logo-load">
              {logo && (
                <div className="logo-preview-container">
                  <img src={logo} alt="Shop Logo" className="logo-preview" />
                  <button onClick={handleRemoveLogo} className="remove-logo-button">
                    Remove Logo
                  </button>
                </div>
              )}
              <input
                type="file"
                id="shop-logo"
                accept="image/*"
                onChange={handleFileChange}
                key={fileKey}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <label htmlFor="shop-logo" className="upload-button">+</label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="currency">Currency</label>
            <div className="custom-select" id="currency" onClick={() => setIsSelectOpen(!isSelectOpen)}>
              <div className="select-selected">{currency}</div>
              {isSelectOpen && (
                <div className="select-items">
                  <div onClick={() => handleSelectChange('currency', 'USD')}>USD</div>
                  <div onClick={() => handleSelectChange('currency', 'EUR')}>EUR</div>
                  <div onClick={() => handleSelectChange('currency', 'GBP')}>GBP</div>
                </div>
              )}
            </div>
            <i className="arrow-down"></i>
          </div>

          <div className="input-group">
            <label htmlFor="store-name">Name</label>
            <input
              type="text"
              id="store-name"
              placeholder="Toy Seller"
              value={storeName}
              onChange={(e) => {
                setStoreName(e.target.value);
                setFormData({ ...formData, storeName: e.target.value });
                hapticFeedback.selectionChanged(); // Haptic feedback при изменении имени магазина
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="store-description">Description</label>
            <textarea
              id="store-description"
              placeholder="Description"
              value={storeDescription}
              onChange={(e) => {
                setStoreDescription(e.target.value);
                setFormData({ ...formData, storeDescription: e.target.value });
                hapticFeedback.selectionChanged(); // Haptic feedback при изменении описания
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select
              id="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="delivery-method">Delivery Method</label>
            <select
              id="delivery-method"
              value={deliveryMethod}
              onChange={handleDeliveryMethodChange}
            >
              <option value="">Select Delivery Method</option>
              <option value="standard">Standard Delivery</option>
              <option value="express">Express Delivery</option>
              <option value="pickup">Pickup</option>
            </select>
          </div>
        </div>
      </div>

      <div className="button-row">
        <button className="create-shop_button-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
