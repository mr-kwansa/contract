import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from 'components/PrimaryButton';

const RecoberPasswordPhone = () => {


  type RootStackParamList = {
  
    RecoverPasswordPhone: undefined;
    RecoverPasswordMail: undefined;
    CheckEmail: undefined;
  };
  type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
  
  const navigation = useNavigation()

  const handleRecoverPassword = () => {
    navigation.navigate('CheckEmail')
  }
  
  return (
    <SafeAreaView>
      <Header showback/>

         <View className="ml-4">
          <Text className="text-purple-600 text-3xl font-bold">Recover Password?</Text>
           <Text className='text-gray-500 pt-2'>Don't worry! Just enter your email address or phone</Text>
            <Text className='text-gray-500 pt-2'>number,and we'll send you a link to reset it</Text>
      </View>


      <View className='ml-4 mt-12'>
        <Text>
          Phone
        </Text>

         <TextInput
                placeholder="1234-5678"
                className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
                secureTextEntry
              />
      </View>

      <View className=' flex-1 items-center mt-[400]'>
        <PrimaryButton
        title='Recover Password'
        hasIcon={false}
        onPress={handleRecoverPassword}
        width={350}
        />
      </View>
    </SafeAreaView>
  )
}

export default RecoberPasswordPhone