import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown';
import PhoneInput, { isValidPhoneNumber,ICountry } from 'react-native-international-phone-number';
import { IconBase } from 'react-icons';
import { useNavigation } from '@react-navigation/native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import DateTimePicker from '@react-native-community/datetimepicker';
import Login from './Login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const createacc = () => {
    const [selectedCountry, setSelectedCountry] =
    useState<null | ICountry>(null);
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
    var phonenumbervalueatend = phoneNumber
    console.log( "Thus us the phone number",phonenumbervalueatend)

  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
    var counrycodeandnameatend = [country.callingCode ,country.name.en]
    console.log( " this is the country code " , counrycodeandnameatend)

  }

    // data for the drop down menu
    const dropdata=[
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
    ]
    // varible tohold the respons from the drop down menu 
    const [value, setValue] = useState(null);
    console.log(value)

    const navigation= useNavigation()
    type RootStackParamList = {
            LoginPage: undefined;
            Verification: undefined;
             };
    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;
    type NavigationProp2 = NativeStackNavigationProp<RootStackParamList, 'Verification'>;

    
    const handletologin = () => {
        navigation.navigate('LoginPage')
                           };
    const handletootp = () =>{
        navigation.navigate('Verification')
        console.log('hello im am pressed ')
    };


  return (
    <SafeAreaView>
        <View className='ml-4'>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View className='pt-14 ml-4'>
            <Text className='text-purple-600 text-3xl font-bold'>Create An Account</Text>
            <Text className='text-gray-500 pt-2'>Create an account to get started with myRx</Text>
        </View>
        {/* sign in and register area */}
        <View className='justify-center items-center'>
            <View className='flex-row justify-center items-center pt-5  w-52 h-10'>
                <TouchableOpacity className='border-gray-500 border-[0.5px] w-52 h-10 rounded-lg items-center justify-center' onPress={handletologin}>
                    <Text className='text-2xl'>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-purple-600 w-52 h-10 rounded-lg justify-center items-center'>
                    <Text className='text-white text-2xl'>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* fname and lname area */}
        <View className='flex-row  gap-4 justify-center  pt-12'>
            <View>
            <Text className='text-2xl'>
                First Name
            </Text>
            <TextInput className='border-[0.5px] w-48 h-10 rounded-lg' placeholder='Jane'></TextInput>
            </View>
            {/* last name area */}
            <View>
                <Text className='text-2xl'>
                    Last Name
                </Text>
                <TextInput className='border-[0.5px] w-48 h-10 rounded-lg' placeholder='Johnny'></TextInput>
            </View>
        </View>
        {/* date od birth text field */}
        <View className='ml-8 pt-6'>
            <Text className='text-2xl'>
                Date Of Birth
            </Text>
            <TextInput className='border-[0.5px] w-[343px] h-[48px] rounded-lg' placeholder='01/12/2025'>

            </TextInput>
        </View>

        {/* gender input field */}
        <View className='ml-8 pt-6'>
            <Text className='text-2xl'>
                Gender
            </Text>
            <Dropdown 
            style={{ 
                height: 50,
                width:343,
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
              }}
            data={dropdata} 
            onChange={item =>{
                setValue(item.value)
            }}
            labelField={'label'} valueField={'value'}
              placeholder="Select item"
              value={value}/>
        </View>
        {/* phone number area */}
        <View className='ml-8 mr-8 pt-6'>
            <Text className='text-2xl '>
                Phone Number
            </Text>
            <PhoneInput
                className='w-10'
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
            />
        </View>
        {/* emil area */}
        <View className='ml-8 pt-6'>
            <Text className='text-2xl'>
                Email (Option)
            </Text>
            <TextInput className='border-[0.5px] w-[343px] h-[48px] rounded-lg' placeholder='Email@emil.com'/>
        </View>

        <View className='justify-center items-center pt-10'>
            <TouchableOpacity className='border-gray-500 border-[0.5px] w-[343] h-[48] 
            rounded-lg items-center justify-center bg-[#7F56D9]'
            onPress={handletootp}>
                <Text className='text-white text-2xl font-bold'>
                    Register
                </Text>
             </TouchableOpacity>   
        </View>

    </SafeAreaView>
  )
}

export default createacc