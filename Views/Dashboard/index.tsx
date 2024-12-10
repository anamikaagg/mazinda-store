import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';
import HomeHeader from '../Dashboard/HomeHeader/HomeHeader';
import SalesData from '../Dashboard/SalesData/SalesData';
import OngoingOrders from '../Dashboard/OngoingOrders/OngoingOrders';

const HomeScreen = () => {
  const [todaySales, setTodaySales] = useState(25234);
  const [totalOrders, setTotalOrders] = useState(88);
  const [ongoingOrders, setOngoingOrders] = useState([
    {
      id: '9162',
      packingTime: '05:12',
      items: 5,
      quantity: 35,
      status: 'Packing' as 'Packing',
    },
    {
      id: '9163',
      packingTime: '07:32',
      items: 5,
      quantity: 35,
      status: 'Packing' as 'Packing',
    },
    {
      id: '9164',
      packingTime: '05:12',
      items: 5,
      quantity: 35,
      status: 'Ready' as 'Ready',
    },
  ]);

  const handleCallDeliveryPartner = (orderId: string) => {
    console.log(`Calling delivery partner for order ${orderId}`);
  };

  return (
    <ScrollView style={tw`flex-1 bg-gray-100 p-4`}>
      <HomeHeader />
      <SalesData todaySales={todaySales} totalOrders={totalOrders} />
      <OngoingOrders orders={ongoingOrders} onCallDeliveryPartner={handleCallDeliveryPartner} />
    </ScrollView>
  );
};

export default HomeScreen;