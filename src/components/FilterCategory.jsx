import React, { useState, useRef, useEffect } from 'react';
import './FilterCategory.css'; // Убедитесь, что этот файл стилей существует и подключен

const categories = ['All', 'Cars', 'Trains', 'Puzzle', 'Lego', 'Barbie', 'Planes'];
const statuses = ['All', 'For sale', 'Not for sale'];
const quantities = ['All', 'In stock', 'Not available'];
const sortOptions = [
  { label: 'By name (A-Z)', value: 'name-asc' },
  { label: 'By name (Z-A)', value: 'name-desc' },
  { label: 'By price (From high to low)', value: 'price-desc' },
  { label: 'By price (From low to high)', value: 'price-asc' },
  { label: 'By date (Newest to Oldest)', value: 'date-desc' },
  { label: 'By date (Oldest to Newest)', value: 'date-asc' },
  { label: 'By quantity (From high to low)', value: 'quantity-desc' },
  { label: 'By quantity (From low to high)', value: 'quantity-asc' },
];

const FilterPopup = ({ isOpen, onClose, onApply, selectedCategory, selectedStatus, selectedQuantity, minPrice, maxPrice }) => {
  const [localSelectedCategory, setLocalSelectedCategory] = useState(selectedCategory);
  const [localSelectedStatus, setLocalSelectedStatus] = useState(selectedStatus);
  const [localSelectedQuantity, setLocalSelectedQuantity] = useState(selectedQuantity);
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);
  const [isCategorySelectOpen, setCategorySelectOpen] = useState(false);

  const categorySelectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categorySelectRef.current && !categorySelectRef.current.contains(event.target)) {
        setCategorySelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [categorySelectRef]);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(localSelectedCategory, localSelectedStatus, localSelectedQuantity, localMinPrice, localMaxPrice);
    onClose();
  };

  const handleMinPriceChange = (e) => {
    setLocalMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setLocalMaxPrice(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setLocalSelectedCategory(category);
    setCategorySelectOpen(false);
  };

  return (
    <div className="filter-popup">
      <div className="filter-popup-content">
        <div className="filter-section">
          <p className="filter-section-title">By category</p>
          <div className="input-group" ref={categorySelectRef}>
            <label htmlFor="category">Type of store</label>
            <div className="custom-select" id="category-type">
              <div className="select-selected" onClick={() => setCategorySelectOpen(!isCategorySelectOpen)}>
                {localSelectedCategory}
              </div>
              <div className={`select-items ${isCategorySelectOpen ? '' : 'select-hide'}`} id="category-type-items">
                {categories.map(option => (
                  <div key={option} onClick={() => handleCategorySelect(option)}>{option}</div>
                ))}
              </div>
              <i className="arrow-down"></i>
            </div>
          </div>
        </div>
        <div className="filter-section">
          <p className="filter-section-title">By status</p>
          {statuses.map((status, index) => (
            <div
              className={`filter-item ${status === localSelectedStatus ? 'actives' : ''}`}
              key={index}
              onClick={() => setLocalSelectedStatus(status)}
            >
              {status}
            </div>
          ))}
        </div>
        <div className="filter-section">
          <p className="filter-section-title">By quantity</p>
          {quantities.map((quantity, index) => (
            <div
              className={`filter-item ${quantity === localSelectedQuantity ? 'actives' : ''}`}
              key={index}
              onClick={() => setLocalSelectedQuantity(quantity)}
            >
              {quantity}
            </div>
          ))}
        </div>
        <div className="filter-section">
          <p className="filter-section-title">By price</p>
          <div className="price-range">
            <input
              type="number"
              placeholder="From"
              value={localMinPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              placeholder="To"
              value={localMaxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <button className="apply-button btn" onClick={handleApply}>Apply</button>
      </div>
      <div className="filter-popup-overlay" onClick={onClose}></div>
    </div>
  );
};

const SortPopup = ({ isOpen, onClose, onApply, selectedSortOption }) => {
  const [localSelectedSortOption, setLocalSelectedSortOption] = useState(selectedSortOption);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(localSelectedSortOption);
    onClose();
  };

  return (
    <div className="sort-popup">
      <div className="sort-popup-content">
        <div className="sort-section">
          <p className="sort-section-title">Sort by</p>
          {sortOptions.map((option, index) => (
            <div
              className={`sort-item ${option.value === localSelectedSortOption ? 'actives' : ''}`}
              key={index}
              onClick={() => setLocalSelectedSortOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
        <button className="apply-button btn" onClick={handleApply}>Apply</button>
      </div>
      <div className="sort-popup-overlay" onClick={onClose}></div>
    </div>
  );
};

const FilterCategory = ({ onCategoryChange, onSortChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedQuantity, setSelectedQuantity] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0].value);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [isSortPopupOpen, setSortPopupOpen] = useState(false);

  const handleApplyFilters = (category, status, quantity, min, max) => {
    setSelectedCategory(category);
    setSelectedStatus(status);
    setSelectedQuantity(quantity);
    setMinPrice(min);
    setMaxPrice(max);
    if (onCategoryChange) {
      onCategoryChange(category, status, quantity, min, max);
    }
  };

  const handleApplySort = (sortOption) => {
    setSelectedSortOption(sortOption);
    if (onSortChange) {
      onSortChange(sortOption);
    }
  };

  const handleToggleFilterPopup = () => {
    setFilterPopupOpen(!isFilterPopupOpen);
  };

  const handleToggleSortPopup = () => {
    setSortPopupOpen(!isSortPopupOpen);
  };

  return (
    <div className="order-contents">
      <div className="order-filter">
        <div className="filter-class-item" id="catalog-categories">
          <p className="filter-item" onClick={handleToggleFilterPopup}>Filters</p>
          <p className="filter-detail">{selectedCategory}</p>
        </div>
        <div className="filter-class-item">
          <p className="filter-item sort" onClick={handleToggleSortPopup}>Sort by</p>
          <p className="filter-detail">{sortOptions.find(option => option.value === selectedSortOption).label}</p>
        </div>
      </div>
      <FilterPopup
        isOpen={isFilterPopupOpen}
        onClose={() => setFilterPopupOpen(false)}
        onApply={handleApplyFilters}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        selectedQuantity={selectedQuantity}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <SortPopup
        isOpen={isSortPopupOpen}
        onClose={() => setSortPopupOpen(false)}
        onApply={handleApplySort}
        selectedSortOption={selectedSortOption}
      />
    </div>
  );
};

export default FilterCategory;