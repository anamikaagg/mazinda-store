import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface DashboardMetricsProps {
  todaySales: number;
  totalOrders: number;
}

const DashboardMetrics: React.FC<DashboardMetricsProps> = ({ todaySales, totalOrders }) => {
  return (
    <View style={tw`flex-row justify-between`}>
      <View style={tw`bg-white rounded-lg shadow-lg p-4 w-1/2 mr-2`}>
        <Text style={tw`text-gray-500 text-sm`}>Today Sales</Text>
        <Text style={tw`text-gray-700 font-bold text-xl`}>₹ {todaySales.toLocaleString()}</Text>
      </View>
      <View style={tw`bg-white rounded-lg shadow-lg p-4 w-1/2 ml-2`}>
        <Text style={tw`text-gray-500 text-sm`}>Total Orders</Text>
        <Text style={tw`text-gray-700 font-bold text-xl`}>{totalOrders}</Text>
      </View>
    </View>
  );
};

export default DashboardMetrics;