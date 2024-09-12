import React from 'react';
import './Header.css'; // Стили подключены относительно папки Header
import settingsIcon from './spruton-dark.png'; // Импорт иконки
import settingsSvg from './setting.svg'; // Правильный путь к файлу


const Header = () => {
  return (
    <div className="header">
      <img src={settingsIcon} alt="Avatar" />
      <img src={settingsSvg} alt="Settings" width="30" height="30" className="setting" />

      <div className="profile_date">
        {/* <div className="name">Vitaly</div>
        <div className="username">@appsdesigner</div> */}
      </div>
      <a href="/" className="connect-wallet" onClick={(e) => e.preventDefault()}>
        <p>Connect wallet</p>
      </a>
    </div>
  );
};

export default Header;
