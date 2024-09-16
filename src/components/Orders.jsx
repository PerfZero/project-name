import React from 'react';
import './Orders.css'; // Импортируйте файл стилей


const Orders = () => {
  // Пример данных для отображения
  const orders = [
    {
      id: '28364',
      status: 'PAID',
      date: '20/06/2024',
      items: 3,
      total: '$1,200',
    },
    {
      id: '28365',
      status: 'CANCELED',
      date: '21/06/2024',
      items: 2,
      total: '$800',
    },

    {
        id: '28365',
        status: 'CANCELED',
        date: '21/06/2024',
        items: 2,
        total: '$800',
      },

      {
        id: '28365',
        status: 'PAID',
        date: '21/06/2024',
        items: 2,
        total: '$800',
      },
    // Добавьте другие заказы здесь...
  ];

  return (
    <div className="container container-order">
      <div className="order-contents">
        <div className="order-filter">
          <div className="filter-class-item">
            <p className="filter-item">Status</p>
            <p className="filter-detail">All</p>
          </div>
          <div className="filter-class-item">
            <p className="filter-item">Price</p>
            <p className="filter-detail">All</p>
          </div>
        </div>
      </div>

      <div className="order-contents orders">
      <div className="order-filter">
        {orders.map(order => (
          
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
      </div>
    </div>
  );
};

export default Orders;
