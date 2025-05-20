import {View, Text, ScrollView, Dimensions, Platform} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {Dropdown} from 'react-native-element-dropdown';
import PrimaryButton from '../components/PrimaryButton';
import {genderData} from '../utils/storage';
import {initAction, initState, NavigationProp} from '../types/type';
import {useNavigation} from '@react-navigation/native';
import {AuthStore} from '../store/auth';

const {height} = Dimensions.get('window');

const initialState: initState = {
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
};

const reducer = (state: initState, action: initAction): initState => {
  switch (action.type) {
    case 'UPDATE_FIRST_NAME':
      return {...state, firstName: action.payload};
    case 'UPDATE_LAST_NAME':
      return {...state, lastName: action.payload};
    case 'UPDATE_DOB':
      return {...state, dob: action.payload};
    case 'UPDATE_GENDER':
      return {...state, gender: action.payload};
    default:
      return state;
  }
};

const Signup = () => {
  const navigation = useNavigation<NavigationProp>();
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [newUser, setNewUser] = React.useState(false);
  const [confrimPhone, setconfrimPhone] = React.useState(false);
  const setSegment = AuthStore(state => state.setSegment);
  console.log(state.gender);

  return (
    <View className="flex-1 px-4 bg-white justify-between">
      {!newUser ? (
        <View>
          <Text className="text-sm font-semibold text-gray-700 mt-4 mb-5">
            Phone Number
          </Text>
          <Input placeholder="Enter phone number" hasIcon isPhone />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}>
          <View className="flex-row mt-10 space-x-4 mr-2">
            <View className="flex-1">
              <Text className="text-sm font-semibold text-gray-700">
                First Name
              </Text>
              <Input placeholder="Jane" />
            </View>

            <View className="flex-1 ml-2">
              <Text className="text-sm font-semibold text-gray-700">
                Last Name
              </Text>
              <Input placeholder="Doe" />
            </View>
          </View>
          <View className="mt-5">
            <Text className="text-sm font-semibold text-gray-700 mt-4">
              Date of Birth
            </Text>
            <Input placeholder="DD/MM/YYYY" />

            <Text className="text-sm font-semibold text-gray-700 mt-4 mb-5">
              Gender
            </Text>
            <View className="border-2 border-gray-300 rounded-lg mt-1 overflow-hidden h-[50px] justify-center">
              <Dropdown
                data={genderData}
                labelField="label"
                valueField="value"
                placeholder="Select Gender"
                value={state.gender}
                onChange={item =>
                  dispatch({type: 'UPDATE_GENDER', payload: item.label})
                }
                style={{height: 30}}
                placeholderStyle={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  lineHeight: 28,
                  color: '#9CA3AF',
                }}
                selectedTextStyle={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  lineHeight: 28,
                  color: '#1F2937',
                }}
              />
            </View>

            <Text className="text-sm font-semibold text-gray-700 mt-4 mb-5">
              Phone Number
            </Text>
            <Input
              placeholder="Enter phone number"
              hasIcon
              isPhone
              disabled={true}
            />

            <Text className="text-sm font-semibold text-gray-700 mt-4 mb-5">
              Email (Optional)
            </Text>
            <Input placeholder="Enter email" hasIcon isEmail />
          </View>
        </ScrollView>
      )}

      <View
        className="w-full pb-4"
        style={{height: height * (Platform.OS === 'ios' ? 0.2 : 0.15)}}>
        <PrimaryButton
          hasBg
          onPress={() => {
            if (!newUser && !confrimPhone) {
              setSegment(0);
            } else if (!newUser && confrimPhone) {
              setNewUser(true);
            } else {
              navigation.navigate('register otp');
            }
          }}
          title={!newUser ? 'Confrim' : 'Register'}
        />
      </View>
    </View>
  );
};

export default Signup;
