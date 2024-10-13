import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import { addDays, format } from 'date-fns';
import { enGB } from 'date-fns/locale'; // Импортируйте нужную локаль
import 'rsuite/dist/rsuite.min.css'; // Импортируйте стили rsuite
import './Analytics.css'; // Импортируйте файл стилей, если у вас есть стили

const predefinedRanges = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    placement: 'left'
  },
  {
    label: 'Yesterday',
    value: [addDays(new Date(), -1), addDays(new Date(), -1)],
    placement: 'left'
  },
  {
    label: 'Last 7 Days',
    value: [addDays(new Date(), -7), new Date()],
    placement: 'left'
  },
  {
    label: 'Last 30 Days',
    value: [addDays(new Date(), -30), new Date()],
    placement: 'left'
  }
];

const formatDateRange = (startDate, endDate, locale) => {
  const start = format(startDate, 'dd MMMM yyyy', { locale });
  const end = format(endDate, 'dd MMMM yyyy', { locale });
  return `${start} - ${end}`;
};

const Analytics = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  return (
    <div className="order-contents fix">
      <div className="order-filter analitics">
        <div className="filter-class-item">
          <p className="filter-item" id="catalog-categories">Period</p>
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            showOneCalendar
            ranges={predefinedRanges}
            format="MM/dd/yyyy HH:mm"
            style={{ width: '100%' }} // Устанавливаем ширину на 100% для адаптации к мобильным устройствам
          />
          <p className="filter-detail">{formatDateRange(dateRange[0], dateRange[1], enGB)}</p>
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