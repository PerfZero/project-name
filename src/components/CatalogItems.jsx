import React from 'react';
import './CatalogItems.css';


const items = [
  { id: 1, category: 'Trains', name: 'Train', pieces: '486 pieces', price: '$1,200', image: '/img/catalog-pic.png', status: 'CPA' },
  { id: 2, category: 'Cars', name: 'Car', pieces: '48 pieces', price: '$820', image: '/img/car.png' },
  { id: 3, category: 'Puzzle', name: 'Piramide', pieces: '486 pieces', price: '$1,200', image: '/img/off-piramide.png', status: 'off' },
  { id: 4, category: 'Dino', name: 'Dino', pieces: '486 pieces', price: '$1,200', image: '/img/dino.png' },
];

const CatalogItems = ({ category }) => {
  const filteredItems = category === 'All' ? items : items.filter(item => item.category === category);

  return (
    <div className="order-contents orders">
      <div className="order-filter catalog-lists">
        {filteredItems.map(item => (
          <div className="order-filter catalog-item" key={item.id}>
            <div className={`image-catalog ${item.status === 'off' ? 'off-catalog' : ''}`}>
              <img src={item.image} height="64px" width="93" alt={item.name} />
            </div>
            <div className="order-main_sec catalog-list">
              <div className="filter-class-item number-item">
                <p className={`filter-item catalog ${item.status === 'off' ? 'off' : ''}`}>{item.name}</p>
                {item.status && <p className={`filter-detail status catalog-status ${item.status}`}>{item.status}</p>}
              </div>
              <div className="number-list__info">
                <p className={`number-list__list ${item.status === 'off' ? 'off' : ''}`}>{item.pieces}</p>
                <p className={`number-list__list ${item.status === 'off' ? 'off' : ''}`}>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogItems;
