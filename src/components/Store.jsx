import React, { useState } from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories/Stories';
import Content from '../components/Content/Content';
import Faq from '../components/Faq/Faq';


import './Store.css';



const Screen1 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = (isDark) => {
    setIsDarkTheme(isDark);
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  };

  return (
    <div className="screen1-page">
      <Header onThemeToggle={handleThemeToggle} />
      <Stories/>
      <Content/>
      <Faq/>


     
    </div>
  );
};

export default Screen1;
