import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from 'react-native-vector-icons/MaterialIcons';
import HomeI from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../containers/Home';
import Profile from '../../containers/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6200E0',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <HomeI
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Account
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
