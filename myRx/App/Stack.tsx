import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './containers/Index'
import Login from './containers/Login'


const Stack = createNativeStackNavigator()

const Stacks = () => {
  const [isauthenticated, setIsauthenticated] = useState(true)
  return (
    <Stack.Navigator>
      {!isauthenticated ? (
        <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
      ) : null}
      <Stack.Screen name='Home' component={Index} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Stacks
