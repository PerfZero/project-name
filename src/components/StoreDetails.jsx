import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './StoreDetails.css'; // Импортируйте файл стилей
import Orders from './Orders';
import Catalog from './Catalog';
import Analytics from './Analytics';
import Settings from './Settings';

const StoreDetails = () => {
  const { storeId } = useParams(); // Получаем ID магазина из URL

  console.log('Store ID:', storeId); // Отладочная информация

  if (!storeId) {
    return <div>No store ID provided.</div>;
  }

  return (
    <div className="store-details">
      {/* Хедер с названием магазина и меню */}
      <div className="store-header order">
        <div className="store-info order">
          <img src="/img/store-cion.svg" alt="Store Logo" className="store-logo" />
          <div>
            <div className="store-name">{storeId} Store</div>
            <a href={`https://t.me/${storeId}`}>
              <div className="store-username">@{storeId}</div>
            </a>
          </div>
        </div>
        {/* Меню с переключателями */}
        <div className="store-menu">
          <NavLink 
            to="orders" 
            className={({ isActive }) => isActive ? "store-menu_item activet" : "store-menu_item"}
          >
            Orders
          </NavLink>
          <NavLink 
            to="catalog" 
            className={({ isActive }) => isActive ? "store-menu_item activet" : "store-menu_item"}
          >
            Catalog
          </NavLink>
          <NavLink 
            to="analytics" 
            className={({ isActive }) => isActive ? "store-menu_item activet" : "store-menu_item"}
          >
            Analytics
          </NavLink>
          <NavLink 
            to="settings" 
            className={({ isActive }) => isActive ? "store-menu_item activet" : "store-menu_item"}
          >
            Settings
          </NavLink>
        </div>
      </div>

      {/* Вложенные маршруты для страниц переключателей */}
      <div className="store-content">
        <Routes>
          <Route path="orders" element={<Orders />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default StoreDetails;
