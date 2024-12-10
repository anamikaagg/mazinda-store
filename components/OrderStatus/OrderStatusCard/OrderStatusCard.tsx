import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface OrderStatusCardProps {
  orderNumber: number;
  packingTime: string;
  items: number;
  quantity: number;
  status: 'New Order' | 'Packing' | 'Ready';
  onCallDeliveryPartner: () => void;
}

const OrderStatusCard: React.FC<OrderStatusCardProps> = ({
  orderNumber,
  packingTime,
  items,
  quantity,
  status,
  onCallDeliveryPartner,
}) => {
  const [connecting, setConnecting] = useState(false);

  const handleCallDeliveryPartner = () => {
    setConnecting(true);
    onCallDeliveryPartner();
  };

  return (
    <View style={tw`bg-white rounded-lg shadow-lg p-4 my-4`}>
      <Text style={tw`text-gray-700 font-bold text-xl`}>Order #{orderNumber}</Text>
      <Text style={tw`text-gray-500 text-sm`}>Pack in {packingTime} minutes</Text>
      <Text style={tw`text-gray-500 text-sm`}>Items: {items} | Qty: {quantity}</Text>

      {status === 'New Order' && (
        <View style={tw`mt-4`}>
          <TouchableOpacity style={tw`bg-green-500 py-2 px-4 rounded`}>
            <Text style={tw`text-white font-medium`}>Approve</Text>
          </TouchableOpacity>
        </View>
      )}

      {status === 'Packing' && (
        <View style={tw`mt-4`}>
          <TouchableOpacity
            style={tw`bg-blue-500 py-2 px-4 rounded`}
            onPress={handleCallDeliveryPartner}
          >
            <Text style={tw`text-white font-medium`}>
              {connecting ? 'Connecting to Delivery Partner...' : 'Call Delivery Partner'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {status === 'Ready' && (
        <View style={tw`mt-4`}>
          <Text style={tw`text-green-500 font-medium`}>Ready!</Text>
          <Text style={tw`text-gray-500 text-sm`}>OTP: 2448</Text>
        </View>
      )}
    </View>
  );
};

export default OrderStatusCard;