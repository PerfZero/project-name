import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar'; // Убедитесь, что путь к компоненту правильный
import './Step3.css'; // Убедитесь, что у вас есть стили для этого компонента

const Step3 = ({ formData, setFormData }) => {
  const [storeName, setStoreName] = useState(formData.storeName || '');
  const [storeDescription, setStoreDescription] = useState(formData.storeDescription || '');
  const [selectedLanguage, setSelectedLanguage] = useState(formData.language || 'English');
  const [isSelectOpen, setIsSelectOpen] = useState(false); // Состояние для управления видимостью селекта
  const [logo, setLogo] = useState(formData.logo || ''); // Состояние для хранения загруженного логотипа
  const [fileKey, setFileKey] = useState(Date.now()); // Уникальный ключ для сброса input

  const fileInputRef = useRef(null); // Ссылка на input file

  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.textContent);
    setFormData({ ...formData, language: e.target.textContent });
    setIsSelectOpen(false); // Закрываем селект после выбора
  };

  const handleSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen); // Переключаем видимость селекта
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result); // Устанавливаем результат чтения файла в состояние
        setFormData({ ...formData, logo: reader.result }); // Обновляем данные формы
      };
      reader.readAsDataURL(file); // Читаем файл как Data URL
    }
  };

  const handleRemoveLogo = () => {
    setLogo(''); // Очищаем состояние логотипа
    setFormData({ ...formData, logo: '' }); // Очищаем данные формы
    setFileKey(Date.now()); // Сбрасываем ключ для input file
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Очищаем значение поля file
    }
  };

  const handleNext = () => {
    navigate('/create-store/step4'); // Замените на путь к следующему шагу
  };

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <a href="/create-store/step2">
          <p className="back">Back</p>
        </a>
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Store details</p>
        <ProgressBar currentStep={3} /> {/* Добавляем ProgressBar */}
      </div>

      <div className="choose_type">
        <div className="container">
          <div className="input-group">
            <label htmlFor="shop-logo">Shop logo</label>
            <div className="shop_logo-load">
              {logo && (
                <div className="logo-preview-container">
                  <img src={logo} alt="Shop Logo" className="logo-preview" /> {/* Отображение загруженного логотипа */}
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
                key={fileKey} // Используем ключ для сброса input
                ref={fileInputRef} // Ссылка на input file
                style={{ display: 'none' }} // Скрываем стандартное поле загрузки файла
              />
              <label htmlFor="shop-logo" className="upload-button">
               +
              </label>
            </div>
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
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="currency">Language</label>
            <div className="custom-select" id="currency" onClick={handleSelectToggle}>
              <div className="select-selected">{selectedLanguage}</div>
              <div className={`select-items ${isSelectOpen ? '' : 'select-hide'}`}>
                <div onClick={handleLanguageChange}>English</div>
                <div onClick={handleLanguageChange}>Spanish</div>
                <div onClick={handleLanguageChange}>French</div>
              </div>
            </div>
            <i className="arrow-down"></i>
          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className="btn btn-catalog"
            onClick={handleNext}
            disabled={!storeName || !storeDescription}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
