import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const Verification = () => {
    const navigation= useNavigation()
    type RootStackParamList = {
            AccountcreationPage: undefined;
             };
    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AccountcreationPage'>;
    
    const handletoregister = () => {
        navigation.navigate('AccountcreationPage')
                           };


  return (
    <SafeAreaView>
         <View className='ml-4'>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View className='pt-14 ml-4'>
            <Text className='text-purple-600 text-3xl font-bold'>Verify your account</Text>
            <Text className='text-gray-500 pt-2'>A verification code is sent to jane02@email.com</Text>
            <Text className='text-gray-500' >Please check your inbox to complete your account setup.</Text>
            <Text className='text-gray-500' >setup.</Text>
        </View>
        <View className='flex-row mt-20 items-center justify-center gap-4'>
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View>
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View> 
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View>
            <View>
                <Text className='text-3xl'>
                    -
                </Text>
            </View>
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View>
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View>
            <View>
                <TextInput className='border-[#CFE6F1] w-[48px] h-[48px] border-[1px] rounded-lg'>

                </TextInput>
            </View>
        </View>
    </SafeAreaView>
  )
}
export default Verification