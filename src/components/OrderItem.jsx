import React from 'react';

const OrderItem = ({ number, status, date, itemsCount, total }) => {
  return (
    <div className="order-main_sec">
      <div className="filter-class-item number-item">
        <p className="filter-item number">Order #{number}</p>
        <p className={`filter-detail status ${status === 'CANCELED' ? 'cancel' : ''}`}>{status}</p>
      </div>
      <div className="number-list__info">
        <p className="number-list__list">{date}</p>
        <p className="number-list__list">{itemsCount} items</p>
        <p className="number-list__list">${total}</p>
      </div>
    </div>
  );
};

export default OrderItem;
