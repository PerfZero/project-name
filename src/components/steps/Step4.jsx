import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import './Step4.css';

const Step4 = ({ formData, setFormData }) => {
  const [currency, setCurrency] = useState(formData.currency || 'USD');
  const [paymentMethods, setPaymentMethods] = useState(formData.paymentMethods || 'Crypto, Bank cards');
  const [deliveryMethods, setDeliveryMethods] = useState(formData.deliveryMethods || 'FeedEx');
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [address, setAddress] = useState(formData.address || '');
  const [isSelectOpen, setIsSelectOpen] = useState(null);

  const navigate = useNavigate();

  const handleSelectChange = (type, value) => {
    switch (type) {
      case 'currency':
        setCurrency(value);
        setFormData({ ...formData, currency: value });
        break;
      case 'payment':
        setPaymentMethods(value);
        setFormData({ ...formData, paymentMethods: value });
        break;
      case 'delivery':
        setDeliveryMethods(value);
        setFormData({ ...formData, deliveryMethods: value });
        break;
      default:
        break;
    }
    setIsSelectOpen(null); // Закрываем селект после выбора
  };

  const handleSelectToggle = (type) => {
    setIsSelectOpen(isSelectOpen === type ? null : type); // Переключаем видимость селекта
  };

  const handleNext = () => {
    console.log('Shop created with the following data:', formData);
    navigate('/create-store/step5');
  };

  // Логика для отображения кнопки BackButton
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Показываем кнопку назад
      webApp.BackButton.show();

      // Устанавливаем обработчик клика для перехода на предыдущий шаг
      webApp.BackButton.onClick(() => {
        navigate('/create-store/step3');
      });

      // Очищаем обработчики и скрываем кнопку при размонтировании
      return () => {
        webApp.BackButton.offClick(() => {
          navigate('/create-store/step3');
        });
        webApp.BackButton.hide();
      };
    }
  }, [navigate]);

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Additional Details</p>
        <ProgressBar currentStep={4} />
      </div>

      <div className="choose_type">
        <div className="container type-of">
          <div className="input-group">
            <label htmlFor="currency">Currency</label>
            <div className="custom-select" id="currency" onClick={() => handleSelectToggle('currency')}>
              <div className="select-selected">{currency}</div>
              <div className={`select-items ${isSelectOpen === 'currency' ? '' : 'select-hide'}`}>
                <div onClick={() => handleSelectChange('currency', 'USD')}>USD</div>
                <div onClick={() => handleSelectChange('currency', 'EUR')}>EUR</div>
                <div onClick={() => handleSelectChange('currency', 'GBP')}>GBP</div>
              </div>
            </div>
            <i className="arrow-down"></i>
          </div>

          <div className="input-group">
            <label htmlFor="payment-methods">Payments</label>
            <div className="custom-select" id="payment-methods" onClick={() => handleSelectToggle('payment')}>
              <div className="select-selected">{paymentMethods}</div>
              <div className={`select-items ${isSelectOpen === 'payment' ? '' : 'select-hide'}`}>
                <div onClick={() => handleSelectChange('payment', 'Crypto, Bank cards')}>Crypto, Bank cards</div>
                <div onClick={() => handleSelectChange('payment', 'PayPal')}>PayPal</div>
                <div onClick={() => handleSelectChange('payment', 'Stripe')}>Stripe</div>
              </div>
            </div>
            <i className="arrow-down"></i>
          </div>

          <div className="input-group">
            <label htmlFor="delivery-methods">Delivery</label>
            <div className="custom-select" id="delivery-methods" onClick={() => handleSelectToggle('delivery')}>
              <div className="select-selected">{deliveryMethods}</div>
              <div className={`select-items ${isSelectOpen === 'delivery' ? '' : 'select-hide'}`}>
                <div onClick={() => handleSelectChange('delivery', 'FeedEx')}>FeedEx</div>
                <div onClick={() => handleSelectChange('delivery', 'DHL')}>DHL</div>
                <div onClick={() => handleSelectChange('delivery', 'UPS')}>UPS</div>
              </div>
            </div>
            <i className="arrow-down"></i>
          </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className="btn btn-catalog"
            onClick={handleNext}
            disabled={!email || !phone || !address}
          >
            Create Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
