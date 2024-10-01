import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import { initHapticFeedback } from '@telegram-apps/sdk'; // Импорт haptic feedback
import './Step4.css';

const Step4 = ({ formData, setFormData }) => {
  const [paymentMethods, setPaymentMethods] = useState(formData.paymentMethods || 'Crypto, Bank cards');
  const [deliveryMethods, setDeliveryMethods] = useState(formData.deliveryMethods || 'FeedEx');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [address, setAddress] = useState(formData.address || '');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const navigate = useNavigate();
  const hapticFeedback = initHapticFeedback(); // Инициализация haptic feedback

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
      setPaymentMethods(savedFormData.paymentMethods || 'Crypto, Bank cards');
      setDeliveryMethods(savedFormData.deliveryMethods || 'FeedEx');
      setEmail(savedFormData.email || '');
      setPhone(savedFormData.phone || '');
      setAddress(savedFormData.address || '');
    }
  }, [setFormData]);

  const handleInputChange = (e, field) => {
    const updatedFormData = { ...formData, [field]: e.target.value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));

    switch (field) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'address':
        setAddress(e.target.value);
        break;
      default:
        break;
    }
    hapticFeedback.selectionChanged(); // Haptic feedback при изменении значения инпута
  };

  const handleSelectChange = (type, value) => {
    const updatedFormData = { ...formData, [type]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));

    switch (type) {
      case 'payment':
        setPaymentMethods(value);
        break;
      case 'delivery':
        setDeliveryMethods(value);
        break;
      default:
        break;
    }
    setIsSelectOpen(false);
    hapticFeedback.selectionChanged(); // Haptic feedback при изменении селекта
  };

  const handleNext = () => {
    hapticFeedback.notificationOccurred('success'); // Haptic feedback при нажатии на кнопку "Next"
    navigate('/create-store/step5');
  };

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Additional Details</p>
        <ProgressBar currentStep={4} />
      </div>

      <div className="choose_type">
        <div className="container type-of">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </div>

          {/* Phone Input */}
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => handleInputChange(e, 'phone')}
            />
          </div>

          {/* Address Input */}
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={(e) => handleInputChange(e, 'address')}
            />
          </div>

          {/* Payment and Delivery Methods */}
          <div className="input-group">
            <label htmlFor="payment-method">Payment Method</label>
            <div className="custom-select" id="payment-method" onClick={() => setIsSelectOpen(!isSelectOpen)}>
              <div className="select-selected">{paymentMethods}</div>
              {isSelectOpen && (
                <div className="select-items">
                  <div onClick={() => handleSelectChange('payment', 'Crypto, Bank cards')}>Crypto, Bank cards</div>
                  <div onClick={() => handleSelectChange('payment', 'PayPal')}>PayPal</div>
                  <div onClick={() => handleSelectChange('payment', 'Wire Transfer')}>Wire Transfer</div>
                </div>
              )}
            </div>
            <i className="arrow-down"></i>
          </div>

          <div className="input-group">
            <label htmlFor="delivery-method">Delivery Method</label>
            <div className="custom-select" id="delivery-method" onClick={() => setIsSelectOpen(!isSelectOpen)}>
              <div className="select-selected">{deliveryMethods}</div>
              {isSelectOpen && (
                <div className="select-items">
                  <div onClick={() => handleSelectChange('delivery', 'FeedEx')}>FeedEx</div>
                  <div onClick={() => handleSelectChange('delivery', 'DHL')}>DHL</div>
                  <div onClick={() => handleSelectChange('delivery', 'UPS')}>UPS</div>
                </div>
              )}
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className={`btn btn-catalog ${!email || !phone || !address ? 'disabled' : ''}`}
            onClick={handleNext}
            disabled={!email || !phone || !address}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
