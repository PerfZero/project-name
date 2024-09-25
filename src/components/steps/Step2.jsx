import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import { initHapticFeedback } from '@telegram-apps/sdk'; // Import haptic feedback initialization
import './Step2.css';

const Step2 = ({ formData, setFormData }) => {
  const [selectedStoreType, setSelectedStoreType] = useState(formData.storeType || '');
  const [selectedTheme, setSelectedTheme] = useState(formData.theme || '');
  const [botAPI, setBotAPI] = useState(formData.botAPI || '');
  const [selectedLanguage, setSelectedLanguage] = useState(formData.language || 'English');
  const [isThemeSelectOpen, setIsThemeSelectOpen] = useState(false);
  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);

  const themeSelectRef = useRef(null);
  const languageSelectRef = useRef(null);
  const navigate = useNavigate();
  
  // Initialize haptic feedback
  const hapticFeedback = initHapticFeedback();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setSelectedStoreType(savedFormData.storeType || '');
      setSelectedTheme(savedFormData.theme || '');
      setBotAPI(savedFormData.botAPI || '');
      setFormData(savedFormData);
    }
  }, [setFormData]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        themeSelectRef.current && !themeSelectRef.current.contains(event.target) &&
        languageSelectRef.current && !languageSelectRef.current.contains(event.target)
      ) {
        setIsThemeSelectOpen(false);
        setIsLanguageSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStoreTypeChange = (e) => {
    const updatedFormData = { ...formData, storeType: e.target.value };
    setSelectedStoreType(e.target.value);
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    hapticFeedback.impactOccurred('medium'); // Trigger haptic feedback on store type change
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.textContent);
    setFormData({ ...formData, language: e.target.textContent });
    setIsLanguageSelectOpen(false);
    hapticFeedback.selectionChanged(); // Trigger haptic feedback on language change
  };

  const handleThemeChange = (e) => {
    const updatedFormData = { ...formData, theme: e.target.textContent };
    setSelectedTheme(e.target.textContent);
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setIsThemeSelectOpen(false);
    hapticFeedback.selectionChanged(); // Trigger haptic feedback on theme change
  };

  const handleSelectToggle = (type) => {
    if (type === 'theme') {
      setIsThemeSelectOpen(!isThemeSelectOpen);
      setIsLanguageSelectOpen(false);
    } else {
      setIsLanguageSelectOpen(!isLanguageSelectOpen);
      setIsThemeSelectOpen(false);
    }
  };

  const handleNext = () => {
    hapticFeedback.notificationOccurred('success'); // Trigger haptic feedback on next button click
    navigate('/create-store/step3');
  };

  return (
    <div className="container create-shop">
      <div className="header__create-shop">
        <h1 className="title-create__shop">Create your store</h1>
        <p className="sub-title_details">Shop settings</p>
        <ProgressBar currentStep={2} />
      </div>

      <div className="choose_type">
        <h2 className="choose_text">Type</h2>
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
                  disabled
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
                Delivery 
              </label>
            </div>

            <div className="input-group" ref={themeSelectRef}>
              <label htmlFor="theme">Theme</label>
              <div className="custom-select" id="theme" onClick={() => handleSelectToggle('theme')}>
                <div className="select-selected gray">{selectedTheme || ' Select theme'}</div>
                <div className={`select-items ${isThemeSelectOpen ? '' : 'select-hide'}`}>
                  <div onClick={handleThemeChange}>Theme 1</div>
                  <div onClick={handleThemeChange}>Theme 2</div>
                  <div onClick={handleThemeChange}>Theme 3</div>
                </div>
              </div>
              <i className="arrow-down"></i>
            </div>

            <div className="input-group" ref={languageSelectRef}>
              <label htmlFor="language">Language</label>
              <div className="custom-select" id="language" onClick={() => handleSelectToggle('language')}>
                <div className="select-selected">{selectedLanguage}</div>
                <div className={`select-items ${isLanguageSelectOpen ? '' : 'select-hide'}`}>
                  <div onClick={handleLanguageChange}>English</div>
                  <div onClick={handleLanguageChange}>Spanish</div>
                  <div onClick={handleLanguageChange}>French</div>
                </div>
              </div>
              <i className="arrow-down"></i>
            </div>

            <div className="input-group">
  <label htmlFor="bot">Bot API</label>
  <input
    type="text"
    id="bot" // Добавлен id для соответствия с htmlFor
    placeholder="mnjDN_22nDU-WEJKCX..."
    value={botAPI}
    onChange={(e) => {
      const updatedFormData = { ...formData, botAPI: e.target.value };
      setBotAPI(e.target.value);
      setFormData(updatedFormData);
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
    }}
  />
  <p>1. Open <a href="https://t.me/BotFather">@BotFather</a>.</p>
  <p>2. Create a new bot.</p>
  <p>3. Copy token access API.</p>
  <p>4. Example: <code>123456789:ABCdefGhiJKlmNOPqrSTUvwXYZ</code></p>
</div>

          </div>
        </div>
      </div>

      <div className="footer add-item_btn">
        <div className="contents">
          <button
            className={`btn btn-catalog ${!selectedStoreType || !selectedTheme || !botAPI ? 'disabled' : ''}`}
            id="nextButton"
            onClick={handleNext}
            disabled={!selectedStoreType || !selectedTheme || !botAPI}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
