import { View, Text, TouchableOpacity, TextInput, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';

const phoneviewtab = () =>(
    <View className="flex-1 p-4">
    <View className="mb-4">
      <Text className="text-base">Phone number</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
    <View className="mb-4">
      <Text className="text-base">Password</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
  </View>
);

const siginwithemailtab = () =>(

    <View className="flex-1 p-4">
    <View className="mb-4">
      <Text className="text-base">Email</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
    <View className="mb-4">
      <Text className="text-base">Password</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
  </View>
);

const membershipidtab = () =>(

    <View className="flex-1 p-4">
    <View className="mb-4">
      <Text className="text-base">Membership ID</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
    <View className="mb-4">
      <Text className="text-base">Password</Text>
      <TextInput className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-2 w-full" />
    </View>
  </View>
);

const renderScene = SceneMap({
    first: phoneviewtab,
    second: siginwithemailtab,
    third: membershipidtab
  });

  const routes = [
    { key: 'first', title: 'Phone' },
    { key: 'second', title: 'Email' },
    {key:'third',title:'Membership ID'}
  ];


const Login = () => {

    const navigation= useNavigation()
    type RootStackParamList = {
            AccountCreationPage: undefined;
             };
    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AccountCreationPage'>;
    
    const handletoregister = () => {
        navigation.navigate('AccountCreationPage')
                           };

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
                         
  return (
    <SafeAreaView className='flex-1'>
         <View className='ml-4'>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View className='pt-14 ml-4'>
            <Text className='text-purple-600 text-3xl font-bold'>Login to myRx</Text>
            <Text className='text-gray-500 pt-2'>Sign in to access your medications and health </Text>
            <Text className='text-gray-500' >records</Text>
        </View>
         <View className='flex-row justify-center items-center pt-5'>
                    <TouchableOpacity className='bg-purple-600  w-52 h-10 rounded-lg items-center justify-center'>
                        <Text className=' text-white text-2xl'>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className=' w-52 h-10 border-[0.5px] rounded-lg justify-center items-center' onPress={handletoregister}>
                        <Text className='text-2xl'>
                            Register
                        </Text>
                    </TouchableOpacity>
        </View>

        {/* phone email membershipid sections */}
        <View className=' h-full mt-10'>
            <TabView
             navigationState={{ index, routes }}
             renderScene={renderScene}
             onIndexChange={setIndex}
             initialLayout={{ width: layout.width }}
            //  lazy

             className='flex-1'
            />
        </View>
    </SafeAreaView>
  )
}

export default Login

// function SceneMap(arg0: { first: () => JSX.Element; second: () => JSX.Element; third: () => JSX.Element; }) {
//     throw new Error('Function not implemented.');
// }

