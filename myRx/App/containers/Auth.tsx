import {View, Text} from 'react-native';
import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {AuthStore} from '../store/auth';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  const segment = AuthStore(state => state.segment);
  const setSegment = AuthStore(state => state.setSegment);

  return (
    <View className="p-5 bg-white h-screen">
      {segment === 0 && (
        <View>
          <Text className="text-primary font-bold text-3xl mb-2">
            Sign In To myRx
          </Text>
          <Text className="text-black font-medium text-lg">
            Sign in to access your medications and health records
          </Text>
        </View>
      )}
      {segment === 1 && (
        <View>
          <Text className="text-primary font-bold text-3xl mb-2">
            Create An Account
          </Text>
          <Text className="text-black font-medium text-lg">
            Create an account to get started with myRx
          </Text>
        </View>
      )}
      <View className="mb-20" />
      <SegmentedControl
        values={['Sign In', 'Register']}
        selectedIndex={segment}
        onChange={event => {
          setSegment(event.nativeEvent.selectedSegmentIndex);
        }}
        tintColor="#9747FF"
        backgroundColor="white"
        style={{
          height: 48,
          borderRadius: 12,
          borderColor: '#E5E7EB',
          borderWidth: 1,
        }}
        fontStyle={{
          fontSize: 16,
          fontWeight: '600',
          color: 'black',
        }}
        activeFontStyle={{
          fontSize: 16,
          fontWeight: '600',
          color: 'white',
        }}
      />
      {segment === 0 ? <Login /> : <Signup />}
    </View>
  );
};

export default Auth;
