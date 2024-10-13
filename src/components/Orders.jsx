import React, { useState } from 'react';
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
    // Добавьте другие заказы здесь...
  ];

  // Состояния для фильтрации и сортировки
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Состояния для управления видимостью выпадающих списков
  const [filterStatusOpen, setFilterStatusOpen] = useState(false);
  const [sortOrdersOpen, setSortOrdersOpen] = useState(false);

  // Обработчики изменения фильтров и сортировки
  const handleFilterChange = (value) => {
    setFilterStatus(value);
    setFilterStatusOpen(false); // Закрываем выпадающий список после выбора
  };

  const handleSortChange = (value) => {
    const [sortBy, sortOrder] = value.split('-');
    setSortBy(sortBy);
    setSortOrder(sortOrder);
    setSortOrdersOpen(false); // Закрываем выпадающий список после выбора
  };

  // Фильтрация и сортировка заказов
  const filteredOrders = orders.filter(order => filterStatus === 'All' || order.status === filterStatus);
  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortBy === 'amount') {
      return sortOrder === 'asc' ? a.total.localeCompare(b.total) : b.total.localeCompare(a.total);
    } else if (sortBy === 'date') {
      return sortOrder === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    } else if (sortBy === 'quantity') {
      return sortOrder === 'asc' ? a.items - b.items : b.items - a.items;
    }
    return 0;
  });

  return (
    <div className="container container-order">
      <div className="order-contents">
        <div className="order-filter filterback--off">
          <div className="input-group">
            <label htmlFor="filter-status">By order status</label>
            <div className="custom-select" id="filter-status">
              <div className="select-selected" onClick={() => setFilterStatusOpen(!filterStatusOpen)}>
                {filterStatus}
              </div>
              {filterStatusOpen && (
                <div className="select-items" id="filter-status-items">
                  {['All', 'New', 'Paid', 'Shipped', 'Received', 'Canceled'].map(option => (
                    <div key={option} onClick={() => handleFilterChange(option)}>{option}</div>
                  ))}
                </div>
              )}
              <i className="arrow-down"></i>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="sort-orders">Sort</label>
            <div className="custom-select" id="sort-orders">
              <div className="select-selected" onClick={() => setSortOrdersOpen(!sortOrdersOpen)}>
                {`By ${sortBy} (${sortOrder === 'asc' ? 'From low to high' : 'From high to low'})`}
              </div>
              {sortOrdersOpen && (
                <div className="select-items" id="sort-orders-items">
                  {['amount-desc', 'amount-asc', 'date-desc', 'date-asc', 'quantity-desc', 'quantity-asc'].map(option => (
                    <div key={option} onClick={() => handleSortChange(option)}>{`By ${option.split('-')[0]} (${option.split('-')[1] === 'asc' ? 'From low to high' : 'From high to low'})`}</div>
                  ))}
                </div>
              )}
              <i className="arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="order-contents orders">
        <div className="order-filter">
          {sortedOrders.map(order => (
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