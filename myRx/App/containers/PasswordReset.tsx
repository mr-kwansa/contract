import {View, Text, Image} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import {initState, initAction} from '../types/type';

const initialState: initState = {
  password: '',
  rePassword: '',
};

const reducer = (state: initState, action: initAction): initState => {
  switch (action.type) {
    case 'UPDATE_REPASSWORD':
      return {...state, rePassword: action.payload};
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload};
    default:
      return state;
  }
};

const PasswordReset = () => {
  const [emailConfirmed, setEmailConfirmed] = React.useState(false);

  const SuccessMessage = () => {
    return (
      <View className="flex-1 bg-white px-5">
        <View className="flex-1 items-center justify-center -mt-12">
          <Image
            source={require('../../assets/images/reset.png')}
            className="w-52 h-52 mb-8"
            resizeMode="contain"
          />
          <Text className="text-[28px] font-bold text-primary mb-4 text-center">
            Check your email
          </Text>
          <View className="items-center mx-5">
            <Text className="text-base text-gray-500 text-center leading-6 mb-8">
              We've sent a password reset link to your email address. Please
              check your inbox and follow the instructions to set up a new
              password.
            </Text>
          </View>
          <PrimaryButton
            hasBg
            title={'Recover Password'}
            onPress={() => setEmailConfirmed(true)}
            className="mt-5 w-full"
          />
        </View>
      </View>
    );
  };

  const ResetPass = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      <View className="flex-1 bg-white px-5">
        <Text className="text-[28px] font-bold text-primary mb-4 text-center">
          Create New Password
        </Text>
        <Text className="text-base text-gray-500 text-center leading-6 mb-8">
          For enhanced security, we recommend creating a robust password that
          includes a mix of letters, numbers, and special characters.
        </Text>

        <View>
          <Text className="mb-5">Password</Text>
          <Input
            placeholder="Enter new password"
            hasIcon
            isPassword
            onChangeText={text =>
              dispatch({type: 'UPDATE_PASSWORD', payload: text})
            }
          />
          <Text className="mb-5 mt-5">Confrim Password</Text>
          <Input
            placeholder="Enter new password"
            hasIcon
            isPassword
            onChangeText={text =>
              dispatch({type: 'UPDATE_REPASSWORD', payload: text})
            }
          />
          <View className="mt-20">
            <PrimaryButton
              hasBg
              title={'Reset Password'}
              onPress={() => setEmailConfirmed(true)}
              className="mt-5 w-full"
            />
          </View>
        </View>
      </View>
    );
  };

  return emailConfirmed ? <ResetPass /> : <SuccessMessage />;
};

export default PasswordReset;
