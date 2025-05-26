import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import PrimaryButton from 'components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const ForgotPassword = () => {

type RootStackParamList = {

  RecoverPasswordPhone: undefined;
  RecoverPasswordMail: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const navigation = useNavigation()

 const handletoforgotpasswordphone = () => {
  navigation.navigate('RecoverPasswordPhone');
  console.log('Phone button pressed');
 } 

 const handletoforgotpasswordemail = () => {  
  navigation.navigate('RecoverPasswordMail');
  console.log('Email button pressed');
  }

  
  return (
    <SafeAreaView>
      <Header
      showback={true}
      />
        <View className='ml-4'>
          <Text className='text-purple-600 text-3xl font-bold'>Forgotten Passwod?</Text>
          <Text className='text-gray-500 pt-2'>Don't worry! Just enter your email address or phone</Text>
          <Text className='text-gray-500 pt-2'>number,and we'll send you a link to reset it</Text>
        </View>
        <View className='items-center mt-60'>
          <PrimaryButton
          title='Send via Phone'
          onPress={handletoforgotpasswordphone}
          hasBg={true}
          hight={50}
          iconName='smartphone'
          width={300}/>
          <PrimaryButton
          title='Send via Email'
          onPress={handletoforgotpasswordemail}
          hasBg={true}
          hight={50}
          iconName='mail'
          width={300}/>
        </View>
    </SafeAreaView>
  )
}

export default ForgotPassword