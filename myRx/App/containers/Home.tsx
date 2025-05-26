import { View, Text } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrimaryButton from 'components/PrimaryButton'

const Home = () => {
  return (
    <SafeAreaView>
      <Header showback />
      <View className="ml-4">
        <Text className="text-purple-600 text-3xl font-bold">Welcome Home</Text>
        <Text className='text-gray-500 pt-2'>This is the home screen of your app.</Text>
      </View>
     
    </SafeAreaView>

  )
}

export default Home