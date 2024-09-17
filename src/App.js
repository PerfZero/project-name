import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Store from './components/Store';
import Tasks from './components/Tasks';
import StoreDetails from './components/StoreDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateStore from './components/CreateStore';

// Проверяем, доступен ли Telegram WebApp API
const isTelegramWebAppAvailable = typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp;

const App = () => {
  // Состояние для управления темой (светлая/темная)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Функция переключения темы
  const handleThemeToggle = (newTheme) => {
    setIsDarkTheme(newTheme);
  };

  // Состояния для отображения хедера и футера
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  // Хук для отслеживания текущего маршрута
  const location = useLocation();

  // Эффект для управления отображением хедера и футера в зависимости от маршрута
  useEffect(() => {
    if (location.pathname.startsWith('/create-store') || location.pathname.startsWith('/store/1/')) {
      setShowHeader(false);
      setShowFooter(false);
    } else {
      setShowHeader(true);
      setShowFooter(true);
    }

    // Управление кнопкой "Назад" в Telegram Mini App
    if (isTelegramWebAppAvailable) {
      if (window.Telegram.WebApp) {
        // Показать кнопку "Назад"
        window.Telegram.WebApp.BackButton.show();

        // Устанавливаем обработчик нажатия кнопки "Назад"
        window.Telegram.WebApp.BackButton.onClick(() => {
          // Логика при нажатии кнопки "Назад"
          window.history.back();
        });

        // Убираем обработчик при размонтировании компонента
        return () => {
          if (window.Telegram.WebApp) {
            window.Telegram.WebApp.BackButton.offClick();
          }
        };
      }
    }
  }, [location.pathname]);

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}> {/* Применение темы ко всему приложению */}
      {showHeader && (
        <Header
          onThemeToggle={handleThemeToggle} // Передаем функцию для переключения темы
          isDarkTheme={isDarkTheme} // Передаем текущее состояние темы
        />
      )}

      {/* Роутинг для переключения между страницами */}
      <Routes>
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route
          path="/create-store/*"
          element={
            <CreateStore setShowHeader={setShowHeader} setShowFooter={setShowFooter} /> // Управление хедером и футером
          }
        />
        <Route path="/store/:storeId/*" element={<StoreDetails />} /> {/* Динамический маршрут для деталей магазина */}
      </Routes>

      {/* Футер видим только если showFooter = true */}
      {showFooter && <Footer isDarkTheme={isDarkTheme} />} {/* Передаем тему в футер */}
    </div>
  );
};

export default App;
