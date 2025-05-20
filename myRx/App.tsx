import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './global.css';
import RootStack from './app/Stack/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
