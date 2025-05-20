import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import PrimaryButton from '../components/PrimaryButton';

const DataSharing = () => {
  return (
    <View className="flex-1 p-5">
      <View className="border rounded-3xl border-[#ddd] p-5">
        <View className="flex-row gap-x-4">
          <Icon name="share" size={20} color={'#6200E0'} />
          <Text className="text-primary text-lg font-semibold">
            Temporary Data Sharing
          </Text>
        </View>
        <Text className="text-gray-700 mt-5">
          Share your health data temporarily with healthcare providers or
          caregivers.
        </Text>
        <View className="mt-10">
          <PrimaryButton
            title={'Share Health Data'}
            hasBg
            onPress={undefined}
          />
        </View>
      </View>
    </View>
  );
};

export default DataSharing;
