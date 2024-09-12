import React, { useState } from 'react';
import './Header.css'; // Подключите CSS для стилей заголовка
import logo from '../components/icons/spruton-dark.png'; // Импортируйте изображение
import setting from '../components/icons/setting.svg'; // Импортируйте изображение
import wallet from '../components/icons/wallet.svg'; // Импортируйте изображение

const Header = ({ onThemeToggle }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    onThemeToggle(newTheme);
  };

  return (
    <>
      <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <div className="header-buttons">
          <button className="settings-toggle" onClick={() => setIsSettingsOpen(true)}>
          <img src={setting} alt="setting" className="setting" />
            </button>
            <button className="connect-wallet"><img src={wallet} alt="wallet" className="wallet" />Connect Wallet</button>
           
          </div>
        </div>
      </header>

      {isSettingsOpen && (
        <div className="settings-modal">
          <div className={`settings-content ${isDarkTheme ? 'dark' : 'light'}`}>
            <h2>Settings</h2>
            <button className="theme-toggle" onClick={handleThemeToggle}>
              {isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <button className="close-settings" onClick={() => setIsSettingsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
