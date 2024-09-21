import React, { useState } from 'react';
import './FilterCategory.css'; // Убедитесь, что этот файл стилей существует и подключен

const categories = ['All', 'Cars', 'Trains', 'Puzzle', 'Lego', 'Barbie', 'Planes'];

const FilterPopup = ({ isOpen, onClose, onCategorySelect, selectedCategory }) => {
  if (!isOpen) return null;

  return (
    <div className="filter-popup">
      <div className="filter-popup-content">
        {categories.map((category, index) => (
          <div
            className={`filter-item ${category === selectedCategory ? 'actives' : ''}`}
            key={index}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="filter-popup-overlay" onClick={onClose}></div>
    </div>
  );
};

const FilterCategory = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPopupOpen(false);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const handleTogglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="order-contents">
      <div className="order-filter">
        <div className="filter-class-item" id="catalog-categories">
          <p className="filter-item" onClick={handleTogglePopup}>Categories</p>
          <p className="filter-detail">{selectedCategory}</p>
        </div>
        <div className="filter-class-item">
          <p className="filter-item sort">Sort by</p>
          <p className="filter-detail">Name</p>
        </div>
      </div>
      <FilterPopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default FilterCategory;
