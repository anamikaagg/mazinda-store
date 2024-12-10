import React from 'react';
import OrderStatusCard from '../OrderStatusCard/OrderStatusCard';

const OrderScreen = () => {
  const handleCallDeliveryPartner = () => {
    console.log('Calling delivery partner...');
  };

  return (
    <OrderStatusCard
      orderNumber={9162}
      packingTime="05:12"
      items={5}
      quantity={35}
      status="Packing"
      onCallDeliveryPartner={handleCallDeliveryPartner}
    />
  );
};

export default OrderScreen;