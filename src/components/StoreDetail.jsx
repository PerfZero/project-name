import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import StoreHeader from './StoreHeader';
import OrderContents from './OrderContents';

const StoreDetail = () => {
  const location = useLocation();
  const { storeId } = location.state || {}; // Получение идентификатора магазина из состояния маршрута

  return (
    <div className="container container-order">
      <StoreHeader storeId={storeId} />
      <Routes>
        <Route path="order" element={<OrderContents />} />
        {/* Добавьте другие маршруты для /catalog, /analytics, /settings */}
      </Routes>
    </div>
  );
};

export default StoreDetail;
