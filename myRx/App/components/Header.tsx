import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Headers {
  showback?: boolean;
}

const Header: React.FC<Headers> = ({showback}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="p-5 flex flex-row bg-white">
      {showback && (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} />
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default Header;
