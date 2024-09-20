import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Store from './components/Store';
import Tasks from './components/Tasks';
import StoreDetails from './components/StoreDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateStore from './components/CreateStore';
import TelegramBackButton from './components/TelegramBackButton';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkTheme') === 'true';
    setIsDarkTheme(savedTheme);
    updateTheme(savedTheme);
  }, []);

  const updateTheme = (isDark) => {
    setIsDarkTheme(isDark);
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  };

  useEffect(() => {
    const themeChangeListener = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (event) => {
      const isDark = event.matches;
      localStorage.setItem('isDarkTheme', isDark);
      updateTheme(isDark);
    };

    themeChangeListener.addEventListener('change', handleThemeChange);
    
    return () => {
      themeChangeListener.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith('/create-store') || location.pathname.startsWith('/store/1/')) {
      setShowHeader(false);
      setShowFooter(false);
    } else {
      setShowHeader(true);
      setShowFooter(true);
    }
  }, [location.pathname]);

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      {showHeader && <Header />}
      <TelegramBackButton />
      <Routes>
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create-store/*" element={<CreateStore setShowHeader={setShowHeader} setShowFooter={setShowFooter} />} />
        <Route path="/store/:storeId/*" element={<StoreDetails />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
