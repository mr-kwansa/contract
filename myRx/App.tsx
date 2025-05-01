import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './App/Stack';
import './global.css';


// Keep the splash screen visible while we fetch resources



export default function App() {
  return (
    <NavigationContainer>
      <Stacks/>
    </NavigationContainer>
  )

}