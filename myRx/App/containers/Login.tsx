import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from 'components/Header';
import PrimaryButton from 'components/PrimaryButton';

// --- Navigation Type Definition ---
type RootStackParamList = {
  ForgotPassword: undefined;
  LoginPage: undefined;
  AccountCreationPage: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// --- Tab Routes ---
const routes = [
  { key: 'first', title: 'Phone' },
  { key: 'second', title: 'Email' },
  { key: 'third', title: 'Membership ID' },
];

// --- Tab Bar Customization ---
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#6200E0', height: 2 }}
    style={{ backgroundColor: 'white' }}
    labelStyle={{ fontWeight: 'bold', color: '#6200E0' }}
    activeColor="purple"
    inactiveColor="gray"
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation<NavigationProp>();

  const handletoforgotpassword = () => {
    navigation.navigate('ForgotPassword');
    console.log('hello I am pressed');
  };

  const handletologin = () => {
    navigation.navigate('LoginPage');
  };

  const handletocreateacc = () => {
    navigation.navigate('AccountCreationPage');
  };

  // --- Phone Login Tab ---
  const PhoneRoute = () => (
    <View className="flex-1 ml-4 mr-4">
      <Text className="text-xl mt-5 text-[#414651]">Phone Login</Text>
      <TextInput
        placeholder="Enter your phone number"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        keyboardType="phone-pad"
      />
      <Text className="text-xl mt-5 text-[#414651]">Password</Text>
      <TextInput
        placeholder="Enter your password"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        secureTextEntry
      />
      <View className="flex-row justify-between items-center mt-4">
        <Pressable onPress={handletoforgotpassword}>
          <Text className="text-purple-600 text-sm">Forgot Password?</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-center items-center mt-5">
        <PrimaryButton
          title="Sign In"
          onPress={handletologin}
          hasBg
          isActive={false}
          hight={50}
          width={300}
          hasIcon={false}
          bgColor="#673ab7"
        />
      </View>
    </View>
  );

  // --- Email Login Tab ---
  const EmailRoute = () => (
    <View className="flex-1 ml-4 mr-4">
      <Text className="text-xl mt-5 text-[#414651]">Email</Text>
      <TextInput
        placeholder="myRx@rx.com"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        keyboardType="email-address"
      />
      <Text className="text-xl mt-5 text-[#414651]">Password</Text>
      <TextInput
        placeholder="Enter your password"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        secureTextEntry
      />
      <View className="flex-row justify-between items-center mt-4">
        <Pressable onPress={handletoforgotpassword}>
          <Text className="text-purple-600 text-sm">Forgot Password?</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-center items-center mt-5">
        <PrimaryButton
          title="Sign In"
          onPress={handletologin}
          hasBg
          isActive={false}
          hight={50}
          width={300}
          hasIcon={false}
          bgColor="#673ab7"
        />
      </View>
    </View>
  );

  // --- Membership ID Login Tab ---
  const MembershipIdRoute = () => (
    <View className="flex-1 ml-4 mr-4">
      <Text className="text-xl mt-5 text-[#414651]">Membership ID</Text>
      <TextInput
        placeholder="4567912"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        keyboardType="numeric"
      />
      <Text className="text-xl mt-5 text-[#414651]">Password</Text>
      <TextInput
        placeholder="Enter your password"
        className="border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12"
        secureTextEntry
      />
      <View className="flex-row justify-between items-center mt-4">
        <Pressable onPress={handletoforgotpassword}>
          <Text className="text-purple-600 text-sm">Forgot Password?</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-center items-center mt-5">
        <PrimaryButton
          title="Sign In"
          onPress={handletologin}
          hasBg
          isActive={false}
          hight={50}
          width={300}
          hasIcon={false}
          bgColor="#673ab7"
        />
      </View>
    </View>
  );

  // --- Combine Scenes ---
  const renderScene = SceneMap({
    first: PhoneRoute,
    second: EmailRoute,
    third: MembershipIdRoute,
  });

  return (
    <SafeAreaView className="flex-1">
      <Header showback={true} />
      <View className="ml-4">
        <Text className="text-purple-600 text-3xl font-bold">Login to myRx</Text>
        <Text className="text-gray-500 pt-2">Sign in to access your medication and health</Text>
        <Text className="text-gray-500 pt-2">records</Text>
      </View>

      <View className="justify-center items-center mr-8">
        <View className="flex-row items-center pt-5 mt-10 w-96 h-10 border-[0.5px] border-gray-500 rounded-lg">
          <TouchableOpacity
            className="w-52 h-10 rounded-lg items-center justify-center mb-5"
            onPress={handletologin}
          >
            <Text className="text-2xl w-48 h-10 text-center mr-4 rounded-lg items-center justify-center  bg-purple-600 text-white">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" h-10 rounded-lg justify-center ml-10 items-center mb-5"
            onPress={handletocreateacc}
          >
            <Text className=" text-2xl ">Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-[400px] mt-10">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </SafeAreaView>
  );
}
