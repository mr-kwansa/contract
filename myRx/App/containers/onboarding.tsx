import { View, Text,Image, TouchableOpacity} from 'react-native'
import React ,{Component}from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


    type RootStackParamList = {
    AccountCreationPage: undefined;
         };
  
    type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AccountCreationPage'>;
  const SwiperComponent: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

        const handleSkip = () => {
             navigation.navigate('AccountCreationPage');
                                };

      return (
        <Swiper  
        loop={false} 
        scrollEnabled={true} 
        showsHorizontalScrollIndicator={true}
        showsPagination={true}
        paginationStyle={{ top: -650}}
        activeDot={
            <View
            style={{
                backgroundColor:'#a855f7',
                width: 120, // Custom length
                height: 5,
                borderRadius: 4,
                marginHorizontal: 4,
              }}
            />
        }
        dot={
            <View
            style={{
                backgroundColor: '#d1d5db', // Inactive dot (gray-300)
                width: 120, // Custom length
                height: 5,
                borderRadius: 4,
                marginHorizontal: 4,
              }}
            />
        }
        >
            {/* slide one of the screen */}
          <View className=' flex-1 items-center pt-36'>
            <View className=''>
            <Image source={require("assets/scroll1.png")} 
            className='justify-center rounded-lg w-[350px] h-[450px]'
            resizeMode="cover"
            ></Image>
            </View>
            <View className='pt-10 items-center'>
                <Text className='text-purple-600 text-3xl font-bold '>Welcome to myRx</Text>
                <Text>Track medications, monitor your healt h, and </Text>
                <Text>stay connected wit h your pharmacy—all in</Text>
                <Text>one app.</Text>
            </View>
            <View className=' pl-80 pt-32'>
                <TouchableOpacity onPress={handleSkip}>
                <Text className='text-purple-600 text-xl font-extrabold'>
                    Skip
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* slide two of the screen */}
        <View className=' flex-1 items-center pt-36'>
            <View className=''>
            <Image source={require("assets/scroll2.png")} 
            className='justify-center rounded-lg w-[350px] h-[450px]'
            resizeMode="cover"
            ></Image>
            </View>
            <View className='pt-10 items-center'>
                <Text className='text-purple-600 text-3xl font-bold '>Stay on Top of Your Health</Text>
                <Text>Easily access your diagnostic tests, vital</Text>
                <Text>signs, and healt h trends from your last visits.</Text>
            </View>
            <View className=' pl-80 pt-36'>
                <TouchableOpacity onPress={handleSkip}>
                <Text className='text-purple-600 text-xl font-extrabold'>
                    Skip
                </Text>
                </TouchableOpacity>
            </View>


        </View>
        {/* slide three of the screen */}
        <View className=' flex-1 items-center pt-36'>
            <View className=''>
            <Image source={require("assets/scroll3.png")} 
            className='justify-center rounded-lg w-[350px] h-[450px]'
            resizeMode="cover"
            ></Image>
            </View>
            <View className='pt-10 items-center'>
                <Text className='text-purple-600 text-3xl font-bold '>Your Health History, Always </Text>
                <Text className='text-purple-600 text-3xl font-bold '>with You</Text>
                <Text>Your medical journey is just a tap away, from</Text>
                <Text>pharmacy visits to prescriptions.</Text>
                <Text>one app.</Text>
            </View>
            <View className=' pl-80 pt-24'>
                <TouchableOpacity onPress={handleSkip}>
                <Text className='text-purple-600 text-xl font-extrabold'>
                    Skip
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        </Swiper>
        

      )
    }

  export default SwiperComponent;