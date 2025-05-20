import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './bottomTabs/BottomTab';
import Onboarding from '../containers/Onboarding';
import {getFirstTime} from '../utils/storage';
import LoadingState from '../containers/LoadingState';
import Header from '../components/Header';
import Auth from '../containers/Auth';
import ForgotPassword from '../containers/ForgotPassword';
import PasswordReset from '../containers/PasswordReset';
import RegisterOtp from '../containers/RegisterOtp';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      const firstTime = await getFirstTime();
      setIsFirstTime(firstTime);
      setIsLoading(false);
    };
    checkFirstTime();
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Stack.Navigator>
      {isFirstTime ? (
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      ) : (
        <>
          {!isAuthenticated && (
            <>
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{
                  header: props => <Header />,
                }}
              />
            </>
          )}
          {isAuthenticated && (
            <Stack.Screen
              name="Main"
              component={BottomTab}
              options={{headerShown: false}}
            />
          )}
        </>
      )}
      <>
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{
            header: props => <Header showback={true} />,
          }}
        />
        <Stack.Screen
          name="forgot password"
          component={ForgotPassword}
          options={{
            header: props => <Header showback={true} />,
          }}
        />
        <Stack.Screen
          name="home run"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="password reset"
          component={PasswordReset}
          options={{
            header: props => <Header showback={true} />,
          }}
        />
        <Stack.Screen
          name="register otp"
          component={RegisterOtp}
          options={{
            header: props => <Header showback={true} />,
          }}
        />
      </>
    </Stack.Navigator>
  );
};

export default RootStack;
