import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Store from './components/Store';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate to="/store" />} /> {/* Перенаправление на /store */}
      <Route path="/store" element={<Store />} /> {/* Store как главная страница */}
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/marketplace" element={<Store />} /> {/* Используйте Store или создайте новый компонент для Marketplace */}
    </Routes>
    <Footer />
  </div>
);

export default App;
