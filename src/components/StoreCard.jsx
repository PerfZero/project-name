import React from 'react';
import './StoreCard.css'; // Добавьте свои стили для StoreCard
import arrow from '../components/icons/arrow-rgth.svg'; // Импортируйте изображение
import Store from '../components/icons/store-cion.svg'; // Импортируйте изображение


const StoreCard = ({ store }) => {
  return (
    <div className="store-card">
      <div className="store-header">
        <div className="store-info">
        <img src={Store} alt="Arrow" className="store-logo" />

          <div>
            <div className="store-name">{store.name}</div>
            <a href={`https://t.me/${store.username}`}>
              <div className="store-username">{store.username}</div>
            </a>
          </div>
        </div>
        <div className="store-arrow">
          <a href="/order.html">
            <img src={arrow} alt="Arrow" className="arrow" />
          </a>
        </div>
      </div>
      <div className="store-stats stat-page">
        <div className="stat">
          <div className="stat-label">Revenue</div>
          <div className="stat-value">{store.revenue}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Orders</div>
          <div className="stat-value">{store.orders}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Average bill</div>
          <div className="stat-value">{store.avgBill}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Repeat orders</div>
          <div className="stat-value">{store.repeatOrders}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Partner payments</div>
          <div className="stat-value">{store.partnerPayments}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Unpaid orders</div>
          <div className="stat-value">{store.unpaidOrders}</div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
