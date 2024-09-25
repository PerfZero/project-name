import React, { useState } from 'react';
import Stories from '../components/Stories/Stories';
import StoreCard from '../components/StoreCard';
import arrow from '../components/icons/day-sort.svg';
import stores from './StoreData'; // Импорт по умолчанию
import { HapticFeedback } from '@twa-dev/sdk'; // Импорт haptic feedback SDK

import './Tasks.css';

const Tasks = ({ isDarkTheme }) => {
  const [filter, setFilter] = useState('Day');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleFilterSelect = (filter) => {
    setFilter(filter);
    closeDropdown();
    
    // Вызов haptic feedback при выборе фильтра
    HapticFeedback.impactLight(); // Легкий тактильный отклик
  };

  return (
    <div className={`tasks-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
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
                {['Day', 'Week', 'Month', 'Year'].map((item) => (
                  <div key={item} className="dropdown-item" onClick={() => handleFilterSelect(item)}>
                    {item}
                  </div>
                ))}
                <div className="dropdown-item cancel" onClick={closeDropdown}>Cancel</div>
              </div>
            </>
          )}
        </div>

        {/* Отображение магазинов */}
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      <div className="content store">
        <a href="/order.html" className="btn">Add store</a>
      </div>
    </div>
  );
};

export default Tasks;
