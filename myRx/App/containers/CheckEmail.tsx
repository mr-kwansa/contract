import { View, Text, SafeAreaView, Image,Modal } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import PrimaryButton from 'components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'



const CheckEmail = () => {

    type RootStackParamList = {
      
        RecoverPasswordPhone: undefined;
        RecoverPasswordMail: undefined;
        CheckEmail: undefined;
        ResetPassword: undefined;
      };
      type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
      
      const navigation = useNavigation()
    const handletoresetPassword = () => {
        navigation.navigate('ResetPassword')
      }
      
  return (
    <SafeAreaView>
        <Header 
          showback
          />
          <View>
            <Image className='w-[350px] h-[450px]' src={require("assets/reset.png")}/>
          </View>
          <View className=' items-center justify-center ml-4 mr-4'>
            <Text className='text-3xl font-bold text-center mt-10 text-purple-600'>Check your email</Text>
            <Text className='text-base text-center mt-4'>Check your inbox for an email form us.Click the</Text>
            <Text className='text-base text-center '>link below to set up a new ResetPassword</Text>
          </View>
          <View className='items-center justify-center mt-10'>
            <PrimaryButton
            title='Reset Password'
            onPress={handletoresetPassword}
            hasIcon={false}
            width={350}/>
          </View>
          
    </SafeAreaView>
  )
}

export default CheckEmail