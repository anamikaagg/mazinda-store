import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
// bell svg

const DashboardHeader = () => {
  return (
    <View style={tw`flex-row items-center justify-between py-4`}>
      <Text style={tw`text-gray-700 font-bold text-xl`}>Have a good Day!</Text>
      {/* bell image */}
    </View>
  );
};

export default DashboardHeader;