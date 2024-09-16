import React from 'react';

const orders = [
  {
    id: '28364',
    date: '20/06/2024',
    items: 3,
    total: '$1,200',
    status: 'PAID'
  },
  // Добавьте другие заказы...
];

const OrderList = () => {
  return (
    <div className="order-contents orders">
      {orders.map((order) => (
        <div className="order-main_sec" key={order.id}>
          <div className="filter-class-item number-item">
            <p className="filter-item number">Order #{order.id}</p>
            <p className={`filter-detail status ${order.status.toLowerCase()}`}>{order.status}</p>
          </div>
          <div className="number-list__info">
            <p className="number-list__list">{order.date}</p>
            <p className="number-list__list">{order.items} items</p>
            <p className="number-list__list">{order.total}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
