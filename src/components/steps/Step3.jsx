import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import './Step3.css';

const Step3 = ({ formData, setFormData }) => {
  const [storeName, setStoreName] = useState(formData.storeName || '');
  const [storeDescription, setStoreDescription] = useState(formData.storeDescription || '');
  const [logo, setLogo] = useState(formData.logo || '');
  const [fileKey, setFileKey] = useState(Date.now());

  const fileInputRef = useRef(null);
  const navigate = useNavigate();


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        setFormData({ ...formData, logo: reader.result });
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
  };

  const handleNext = () => {
    navigate('/create-store/step4');
  };

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Store details</p>
        <ProgressBar currentStep={3} />
      </div>

      <div className="choose_type">
        <div className="container">
          <div className="input-group">
            <label htmlFor="shop-logo">Shop logo</label>
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

        
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className={`btn btn-catalog ${!storeName || !storeDescription ? 'disabled' : ''}`}
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
