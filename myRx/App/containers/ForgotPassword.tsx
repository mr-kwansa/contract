import {View, Text} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import {initAction, initState, NavigationProp} from '../types/type';
import {useNavigation} from '@react-navigation/native';

const initialState: initState = {
  email: '',
  phoneNumber: '',
  countryCode: '+233',
};

const reducer = (state: initState, action: initAction): initState => {
  switch (action.type) {
    case 'UPDATE_PHONE_NUMBER':
      return {...state, phoneNumber: action.payload};
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload};
    case 'UPDATE_COUNTRY_CODE':
      return {...state, countryCode: action.payload};
    default:
      return state;
  }
};

const ForgotPassword = () => {
  const navigation = useNavigation<NavigationProp>();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [recovery, setRecovery] = React.useState(false);
  const [navToPhone, setNavToPhone] = React.useState(false);
  const [navToEmail, setNavToEmail] = React.useState(false);
  return (
    <View className="bg-white h-screen flex p-5">
      <View>
        <Text className="text-primary font-bold text-3xl mb-2">
          Forgotten Password?
        </Text>
        <Text className="text-black font-medium text-lg">
          Don't worry! Just enter your email address or phone number, and we'll
          send you a link to reset it.
        </Text>
      </View>
      {!recovery && (
        <View className=" mt-56">
          <PrimaryButton
            hasBg
            hasIcon
            iconName="smartphone"
            title="Send via phone"
            onPress={() => {
              console.log('pressed'), setNavToPhone(true), setRecovery(true);
            }}
          />
          <View className="mt-5" />
          <PrimaryButton
            hasIcon
            iconName="mail"
            title="Send via email"
            onPress={() => {
              console.log('pressed'), setNavToEmail(true), setRecovery(true);
            }}
          />
        </View>
      )}
      {navToEmail ? (
        <View className="mt-20">
          <Text className="mb-5 text-slate-600">Email Address</Text>
          <Input
            placeholder="jane02@email.com"
            hasIcon
            isEmail
            onChangeText={text =>
              dispatch({type: 'UPDATE_EMAIL', payload: text})
            }
          />
          <View className="mt-10">
            <PrimaryButton
              hasBg
              title={'Recover Password'}
              //@ts-ignore
              disabled={state.email?.length > 1 ? false : true}
              //@ts-ignore
              isActive={state.email?.length > 1 ? true : false}
              onPress={() => {
                console.log('pressed'), navigation.navigate('password reset');
              }}
            />
          </View>
        </View>
      ) : navToPhone ? (
        <View className="mt-20">
          <Text className="mb-5 text-slate-600">Phone number</Text>
          <Input
            placeholder="jane02@email.com"
            hasIcon
            isPhone
            onChangeText={text =>
              dispatch({type: 'UPDATE_PHONE_NUMBER', payload: text})
            }
            onCountryCodeChange={code =>
              dispatch({type: 'UPDATE_COUNTRY_CODE', payload: code})
            }
          />
          <View className="mt-10">
            <PrimaryButton
              hasBg
              disabled={(state.email?.length as any) > 1 ? false : true}
              isActive={(state.phoneNumber?.length as any) > 1 ? true : false}
              title={'Recover Password'}
              onPress={() => {
                console.log('pressed'), navigation.navigate('password reset');
              }}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ForgotPassword;
