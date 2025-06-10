import { View, Text } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrimaryButton from 'components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'





const Home = () => {


type RootStackParamList = {
  Profiles : undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const navigation = useNavigation()
const handletoProfile = () => {
navigation.navigate('Profiles')
}

  return (
    <SafeAreaView>
      <Header showback />
      <View className="ml-4">
        <Text className="text-purple-600 text-3xl font-bold">Welcome Home</Text>
        <Text className='text-gray-500 pt-2'>This is the home screen of your app.</Text>
      </View>

      <View className="ml-20 mt-10">
        <PrimaryButton
          title="Go to Profile"
          onPress={handletoProfile}
          className="mt-4"
        />
      </View>
     
    </SafeAreaView>

  )
}

export default Home