import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-purple-600">
      <View className='items-center'>
        <Text className='text-4xl text-white'>myRx</Text>
        <Text className='text-white'>Your health companion</Text>
      </View>
    </SafeAreaView>
    
  )
}

export default Index