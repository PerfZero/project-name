import React from 'react';
import './Analytics.css'; // Импортируйте файл стилей, если у вас есть стили

const Analytics = () => {
  return (
    <div className="order-contents fix">
      <div className="order-filter analitics">
        <div className="filter-class-item">
          <p className="filter-item" id="catalog-categories">Period</p>
          <p className="filter-detail">10-16 June 2024</p>
        </div>
      </div>
      <div className="order-filter statics_wrap">
        <div className="store-stats">
          <div className="stat">
            <div className="stat-label">Coverage:</div>
            <div className="stat-value">
              30,000 <span className="plus-stat">+22%</span>
            </div>
          </div>
          <div className="stat">
            <div className="stat-label">CTR:</div>
            <div className="stat-value">
              12,66% <span className="plus-stat">+0,2%</span>
            </div>
          </div>
          <div className="stat">
            <div className="stat-label">Visitors</div>
            <div className="stat-value">
              3,800 <span className="plus-stat">+3%</span>
            </div>
          </div>
          <div className="stat">
            <div className="stat-label">CV:</div>
            <div className="stat-value">
              16,8% <span className="plus-stat">+0,3%</span>
            </div>
          </div>
          <div className="stat">
            <div className="stat-label">Orders:</div>
            <div className="stat-value">
              64 <span className="minus-stat">-6%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
