import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

interface OngoingOrdersProps {
  orders: {
    id: string;
    packingTime: string;
    items: number;
    quantity: number;
    status: 'New Order' | 'Packing' | 'Ready';
  }[];
  onCallDeliveryPartner: (orderId: string) => void;
}

const OngoingOrders: React.FC<OngoingOrdersProps> = ({ orders, onCallDeliveryPartner }) => {
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleCallDeliveryPartner = (orderId: string) => {
    setConnecting(orderId);
    onCallDeliveryPartner(orderId);
  };

  return (
    <View>
      {orders.map((order) => (
        <View
          key={order.id}
          style={tw`bg-white rounded-lg shadow-lg p-4 my-4`}
        >
          <Text style={tw`text-gray-700 font-bold text-xl`}>Order #{order.id}</Text>
          <Text style={tw`text-gray-500 text-sm`}>Pack in {order.packingTime} minutes</Text>
          <Text style={tw`text-gray-500 text-sm`}>Items: {order.items} | Qty: {order.quantity}</Text>

          {order.status === 'New Order' && (
            <View style={tw`mt-4`}>
              <TouchableOpacity style={tw`bg-green-500 py-2 px-4 rounded`}>
                <Text style={tw`text-white font-medium`}>Approve</Text>
              </TouchableOpacity>
            </View>
          )}

          {order.status === 'Packing' && (
            <View style={tw`mt-4`}>
              <TouchableOpacity
                style={tw`bg-blue-500 py-2 px-4 rounded`}
                onPress={() => handleCallDeliveryPartner(order.id)}
              >
                <Text style={tw`text-white font-medium`}>
                  {connecting === order.id ? 'Connecting to Delivery Partner...' : 'Call Delivery Partner'}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {order.status === 'Ready' && (
            <View style={tw`mt-4`}>
              <Text style={tw`text-green-500 font-medium`}>Ready!</Text>
              <Text style={tw`text-gray-500 text-sm`}>OTP: 2448</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default OngoingOrders;