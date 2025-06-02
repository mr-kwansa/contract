import { View, Text, TextInput,Modal ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import PrimaryButton from 'components/PrimaryButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'


const ResetPassword = () => {
const [modalVisible, setModalVisible] = React.useState(false);

type RootStackParamList = {

  ResetPassword: undefined;
  Home: undefined;
  // Add other screens as needed
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const navigation = useNavigation()
const handletohome = () => {
  navigation.navigate('Home');
  modalVisible && setModalVisible(false);
  console.log('Home button pressed');
}
  return (
    <SafeAreaView>
        <Header
          showback
          />


          <View className="ml-4">
            <Text className="text-purple-600 text-3xl font-bold">Create Password</Text>
            <Text className='text-gray-500 pt-2'>For enhanced security,we recommend creating a</Text>
            <Text className='text-gray-500 pt-2'>robust passwprd that includes a mix of letters,</Text>
            <Text className='text-gray-500 pt-2'>numbers,and special characters</Text>
          </View>
          

          <View className='ml-4 mt-10'>
            <View>
              <Text>
              Password
            </Text>
            <TextInput
                  placeholder='Enter your new password'
                  secureTextEntry={true}
                  className='border border-[#CFE6F1] rounded-md p-2 mt-2 h-18 w-[380px]'
                />
            </View>
            <View>
              <Text>
                Confirme Password
              </Text>
                <TextInput
                  placeholder='Enter your new password again'
                  secureTextEntry={true}
                  className='border border-[#CFE6F1] rounded-md h-18 p-2 mt-2 w-[380px]'
                />

            </View>

          </View>
          <View className=' flex-1 items-center mt-[400]'>
            <PrimaryButton
              title='Reset Password'
              hasIcon={false}
              onPress={() => setModalVisible(true)}
              width={350}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View className='flex-1 justify-center items-center bg-gray-200'>
              <View className='bg-white p-6 items-center rounded-lg w-11/12'>
              <Image  
              className='w-16 h-16 mb-4'
              src={require("assets/check_icon.png")}/>
                <Text className='text-lg font-bold text-center'>Password Reset Successful</Text>
                <Text className='text-gray-500 text-center mt-2'>Your password has been successfully reset.</Text>
                <PrimaryButton
                  title='Sign In Now'
                  hasIcon={false}
                  onPress={handletohome}
                  width={250}
                  className='mt-4'
                />
                <PrimaryButton
                  title='Cancel'
                  hasIcon={false}
                  onPress={() => setModalVisible(false)}
                  width={250}
                  className='mt-2'
                />
              </View>
            </View>
          </Modal>


    </SafeAreaView>
  )
}

export default ResetPassword