import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Store from './components/Store';
import Tasks from './components/Tasks';
import StoreDetails from './components/StoreDetails'; // Импорт компонента StoreDetails
import Header from './components/Header';
import Footer from './components/Footer';
import CreateStore from './components/CreateStore';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/store" />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route
          path="/create-store/*"
          element={
            <CreateStore setShowHeader={setShowHeader} setShowFooter={setShowFooter} />
          }
        />
        <Route path="/store/:storeId/*" element={<StoreDetails />} /> {/* Динамический маршрут */}
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
