import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import './StoreDetails.css'; // Импорт стилей
import Orders from './Orders';
import Catalog from './Catalog';
import Analytics from './Analytics';
import Settings from './Settings';
import stores from './StoreData'; // Импорт по умолчанию

const StoreDetails = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === storeId);

  console.log('Store ID:', storeId, 'Store Data:', store);

  if (!store) {
    return <div>No store data found for this ID.</div>;
  }

  return (
    <div className="store-details">
      {/* Хедер с названием магазина и меню */}
      <div className="store-header order">
        <div className="store-info order">
          <img src="/img/store-cion.svg" alt="Store Logo" className="store-logo" />
          <div>
            <div className="store-name">{store.name}</div>
            <a href={`https://t.me/${store.username}`}>
              <div className="store-username">{store.username}</div>
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