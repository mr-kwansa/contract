import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './containers/Login'
import Verification from './containers/verification'
import Createacc from './containers/createacc'
import Onboarding from './containers/Onboarding'
import ForgotPassword from './containers/ForgotPassword'
import RecoverPasswordPhone from './containers/RecoverPasswordPhone'
import RecoverPasswordMail from './containers/RecoverPasswordMail'
import CheckEmail from './containers/CheckEmail'
import ResetPassword from './containers/ResetPassword'
import Home from './containers/Home'

const Stack = createNativeStackNavigator()

const Stacks = () => {
  const [isauthenticated, setIsauthenticated] = useState(false)
  return (
    <Stack.Navigator>
      {!isauthenticated ? (
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}} />
      ) : null}
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="AccountCreationPage" component={Createacc} options={{headerShown:false}}/>
      <Stack.Screen name='LoginPage' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown:false}}/>
      <Stack.Screen name='RecoverPasswordPhone' component={RecoverPasswordPhone} options={{headerShown:false}}/>
      <Stack.Screen name='RecoverPasswordMail' component={RecoverPasswordMail} options={{headerShown:false}}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}}/>
      <Stack.Screen name='CheckEmail' component={CheckEmail} options={{headerShown:false}}/>  
    </Stack.Navigator>
  )
  
}

export default Stacks
