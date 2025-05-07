import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './containers/Index'
import Login from './containers/Login'
import Onboarding from './containers/Onboarding'
import Createacc from './containers/Createacc'
import Verification from './containers/Verification'


const Stack = createNativeStackNavigator()

const Stacks = () => {
  const [isauthenticated, setIsauthenticated] = useState(false)
  return (
    <Stack.Navigator>
      {!isauthenticated ? (
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
      ) : null}
      <Stack.Screen name='Home' component={Index} options={{headerShown:false}}/>
      <Stack.Screen name="AccountCreationPage" component={Createacc} options={{headerShown:false}}/>
      <Stack.Screen name='LoginPage' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
  
}

export default Stacks
