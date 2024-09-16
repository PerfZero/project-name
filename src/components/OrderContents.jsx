import React from 'react';
import OrderFilter from './OrderFilter';
import OrderItem from './OrderItem';

const OrderContents = () => {
  return (
    <div className="order-contents">
      <OrderFilter />
      <div className="order-contents orders">
        <OrderItem number="28364" status="PAID" date="20/06/2024" itemsCount="3" total="1,200" />
        <OrderItem number="28365" status="CANCELED" date="21/06/2024" itemsCount="2" total="800" />
        {/* Добавьте другие заказы по необходимости */}
      </div>
    </div>
  );
};

export default OrderContents;
