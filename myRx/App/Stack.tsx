import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './containers/Index'
import Login from './containers/Login'
import onboarding from './containers/onboarding'
import createacc from './containers/createacc'


const Stack = createNativeStackNavigator()

const Stacks = () => {
  const [isauthenticated, setIsauthenticated] = useState(false)
  return (
    <Stack.Navigator>
      {!isauthenticated ? (
        <Stack.Screen name="onboarding" component={onboarding} options={{headerShown:false}} />
      ) : null}
      <Stack.Screen name='Home' component={Index} options={{headerShown:false}}/>
      <Stack.Screen name="AccountCreationPage" component={createacc} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
  
}

export default Stacks
