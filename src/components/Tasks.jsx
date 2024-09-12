import React, { useState } from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories/Stories';
import StoreCard from '../components/StoreCard';
import arrow from '../components/icons/day-sort.svg'; // Импортируйте изображение

import './Tasks.css';

const Tasks = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [filter, setFilter] = useState('Day'); // Фильтр по умолчанию
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Данные магазинов (пример)
  const stores = [
    {
      name: 'Toy Seller',
      username: '@ToySellerBot',
      revenue: '$27,392.00',
      orders: 64,
      avgBill: '$428.00',
      repeatOrders: 12,
      partnerPayments: '$428.00',
      unpaidOrders: 8,
    },

    {
        name: 'Toy Seller',
        username: '@ToySellerBot',
        revenue: '$27,392.00',
        orders: 64,
        avgBill: '$428.00',
        repeatOrders: 12,
        partnerPayments: '$428.00',
        unpaidOrders: 8,
      },

      {
        name: 'Toy Seller',
        username: '@ToySellerBot',
        revenue: '$27,392.00',
        orders: 64,
        avgBill: '$428.00',
        repeatOrders: 12,
        partnerPayments: '$428.00',
        unpaidOrders: 8,
      },
    // Добавьте другие магазины здесь...
  ];

  const handleThemeToggle = (isDark) => {
    setIsDarkTheme(isDark);
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleFilterSelect = (filter) => {
    setFilter(filter);
    closeDropdown();
  };

  return (
    <div className={`tasks-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header onThemeToggle={handleThemeToggle} />
      <Stories />
      
      <div className="your-stores">
        <div className="stores-header">
          <div className="title">Your stores</div>
          <div className="filter" onClick={toggleDropdown}>
            {filter}
            <img src={arrow} alt="day-sort" className="day-sort" />
          </div>
          {dropdownOpen && (
            <>
              <div className="dropdown-overlay" onClick={closeDropdown}></div>
              <div className="dropdown-content">
                <div className="dropdown-item" onClick={() => handleFilterSelect('Day')}>Day</div>
                <div className="dropdown-item" onClick={() => handleFilterSelect('Week')}>Week</div>
                <div className="dropdown-item" onClick={() => handleFilterSelect('Month')}>Month</div>
                <div className="dropdown-item" onClick={() => handleFilterSelect('Year')}>Year</div>
                <div className="dropdown-item cancel" onClick={closeDropdown}>Cancel</div>
              </div>
            </>
          )}
        </div>

        {/* Отображение магазинов */}
        {stores.map((store, index) => (
          <StoreCard key={index} store={store} />
        ))}
      </div>
      
      <div className="content store">
        <a href="/order.html" className="btn">Add store</a>
      </div>
    </div>
  );
};

export default Tasks;
