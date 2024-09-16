import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import CatalogItems from './CatalogItems';
import './Catalog.css';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container catalog-h">
      <FilterCategory onCategoryChange={handleCategoryChange} />
      <CatalogItems category={selectedCategory} />
      <div className="footers fix-footer">
        <div className="contents">
          <div className="btn btn-catalog">Add items</div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
