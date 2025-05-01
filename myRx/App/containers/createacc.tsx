import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const createacc = () => {
  return (
    <SafeAreaView>
        <View>
            <TouchableOpacity>
                <Text>
                    back
                </Text>
            </TouchableOpacity>
        </View>
        <View className='pt-5'>
            <Text className='text-purple-600 text-3xl font-bold'>Create An Account</Text>
            <Text className='text-gray-500 pt-2'>Create an account to get started with myRx</Text>
        </View>
        {/* sign in and register area */}
        <View className='flex-row justify-center items-center pt-5'>
            <TouchableOpacity className='border-gray-500 border-[1px] w-52 h-10 rounded-lg items-center justify-center'>
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
        {/* fname and lname area */}
        <View className='flex-row  gap-4 justify-center  pt-5'>
            <View>
            <Text className='text-2xl'>
                First Name
            </Text>
            <TextInput className='border-[1px] w-48 h-10 rounded-lg' placeholder='Jane'></TextInput>
            </View>
            <View>
                <Text className='text-2xl'>
                    Last Name
                </Text>
                <TextInput className='border-[1px] w-48 h-10 rounded-lg' placeholder='Johnny'></TextInput>
            </View>
        </View>
        {/* date od birth text field */}
        <View className='ml-8 pt-4'>
            <Text className='text-2xl'>
                Date Of Birth
            </Text>
            <TextInput className='border-[1px] w-80 h-10 rounded-lg' placeholder='01/12/2025'></TextInput>
        </View>
    </SafeAreaView>
  )
}

export default createacc