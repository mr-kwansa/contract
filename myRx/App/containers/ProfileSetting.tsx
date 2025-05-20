import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AccordionItem from '../components/CollapsableDropDown';
import Input from '../components/Input';
import {Dropdown} from 'react-native-element-dropdown';
import {BloodType, genderData, Language} from '../utils/storage';
import {initAction, initState} from '../types/type';
import PrimaryButton from '../components/PrimaryButton';

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

const ProfileSetting = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const ProfileChildren = (
    <>
      <Text className="text-base font-medium mb-1">First Name</Text>
      <Input placeholder="Jane" />
      <Text className="text-base font-medium mt-3 mb-1">Last Name</Text>
      <Input placeholder="Jane" />
      <Text className="text-base font-medium mt-3 mb-1">Date Of Birth</Text>
      <Input placeholder="DD/MM/YYYY" />
      <Text className="text-base font-medium mt-3 mb-1">Gender</Text>
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
      <Text className="text-base font-medium mt-3 mb-1">Phone Number</Text>
      <Input placeholder="0000000000" hasIcon isPhone />
      <Text className="text-base font-medium mt-3 mb-1">Email (Optional)</Text>
      <Input placeholder="Jane" hasIcon isEmail />
      <Text className="text-base font-medium mt-3 mb-1">Language Spoken</Text>
      <View className="border-2 border-gray-300 rounded-lg mt-1 overflow-hidden h-[50px] justify-center">
        <Dropdown
          data={Language}
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
    </>
  );

  const HealthChildren = (
    <>
      <View className="flex-row justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-medium mb-1">Height (cm)</Text>
          <Input placeholder="Jane" />
        </View>
        <View className="flex-1">
          <Text className="text-base font-medium mb-1">Weight (kg)</Text>
          <Input placeholder="Doe" />
        </View>
      </View>
      <Text className="text-base font-medium mt-5 mb-1">Blood Type</Text>
      <View className="border-2 border-gray-300 rounded-lg mt-1 overflow-hidden h-[50px] justify-center">
        <Dropdown
          data={BloodType}
          labelField="label"
          valueField="value"
          placeholder="Select Blood Type"
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
    </>
  );

  const EmergencyChildren = (
    <>
      <Text className="text-base font-medium mb-1">Full Name</Text>
      <Input placeholder="Doe" />
      <Text className="text-base font-medium mb-1">Phone Number</Text>
      <Input placeholder="00000000" hasIcon isPhone />
      <Text className="text-base font-medium mb-1">Relationship</Text>
      <Input placeholder="Husband" />
    </>
  );

  return (
    <View className=" flex-1">
      <View className="p-5">
        <View className="items-center space-y-3">
          <View className="relative w-32 h-32 bg-[#E9EAEB] rounded-full mb-5">
            <Image
              source={require('../../assets/images/DefaultProfile.png')}
              className="w-32 h-32 rounded-full"
              resizeMode="cover"
            />
            <Pressable className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full border-2 border-white">
              <Icon name="camera" size={16} color="white" />
            </Pressable>
          </View>
          <View className="justify-center items-center border-b-2 w-full border-[#E9EAEB]">
            <Text className="text-lg font-semibold text-gray-800">
              Obed Ehoneah
            </Text>
            <Text className="text-sm font-semibold text-gray-800 mb-5">
              ObedEhoneah@gmail.com
            </Text>
          </View>
        </View>
        <ScrollView
          className="mt-10"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 250}}>
          <AccordionItem
            title={'Personal Information'}
            children={ProfileChildren}
            icon={<Icon name="user" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'Heath Information'}
            children={HealthChildren}
            icon={<Icon name="heart" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'Lifestyle Information'}
            children={ProfileChildren}
            icon={<Icon name="user-plus" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'Social Determinants'}
            children={ProfileChildren}
            icon={<Icon name="book" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'Insurance Information'}
            children={ProfileChildren}
            icon={<Icon name="box" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'Emergency Contact'}
            children={EmergencyChildren}
            icon={<Icon name="user-check" size={25} color={'#6200E0'} />}
          />
        </ScrollView>
      </View>

      <View className="absolute bottom-0 left-0 right-0 pt-4 pb-1 px-5 border-t-2 border-[#E9EAEB] w-full bg-white">
        <PrimaryButton
          hasBg
          title={'Save Changes'}
          onPress={() => console.log('Save pressed')}
        />
      </View>
    </View>
  );
};

export default ProfileSetting;
