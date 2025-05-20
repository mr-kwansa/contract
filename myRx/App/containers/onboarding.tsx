import {View, Text, Pressable, Image, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {onBoarding} from '../constants/index';
import PrimaryButton from '../components/PrimaryButton';
import {setFirstTime} from '../utils/storage';
import {AuthStore} from '../store/auth';

const Onboarding = () => {
  const navigation = useNavigation();
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const setSegment = AuthStore(state => state.setSegment);

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="absolute top-10 left-0 right-0 z-10 flex-row justify-center">
        {onBoarding.map((_, index) => (
          <View
            key={index}
            className={`h-[4px] mx-1 rounded-full ${
              activeIndex === index
                ? 'w-[100px] bg-primary'
                : 'w-[100px] bg-[#E2E8F0]'
            }`}
            //@ts-ignore
            style={{transitionDuration: '200ms'}}
          />
        ))}
      </View>
      <View className="mt-40" />
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false}
        onIndexChanged={index => setActiveIndex(index)}>
        {onBoarding.map((item, index) => (
          <View
            key={index}
            className="flex items-center justify-center p-1 pt-20 w-full">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-3xl text-primary font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-6">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {activeIndex === onBoarding.length - 1 ? (
        <View className="absolute bottom-10 justify-center items-center w-full px-5">
          <PrimaryButton
            hasBg={true}
            title="Create Account"
            onPress={() => {
              setFirstTime(false);
              setSegment(1);
              //@ts-ignore
              navigation.navigate('auth');
            }}
          />
          <View className="mt-5" />
          <PrimaryButton
            title="Login"
            onPress={() => {
              setFirstTime(false);
              //@ts-ignore
              navigation.navigate('login');
            }}
          />
        </View>
      ) : (
        <View className="absolute bottom-10 flex-row w-full px-5 justify-between">
          <Pressable
            className="ml-4"
            //@ts-ignore
            onPress={() => navigation.navigate('login')}>
            <Text className="text-primary text-md font-JakartaBold">Skip</Text>
          </Pressable>

          <Pressable
            className="mr-4"
            onPress={() => {
              if (activeIndex === onBoarding.length - 1) {
                //@ts-ignore
                navigation.navigate('login');
              } else {
                swiperRef.current?.scrollBy(1);
              }
            }}>
            <Text className="text-primary text-md font-JakartaBold">
              {'Next'}
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;
