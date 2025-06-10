import * as React from 'react';
import { useState } from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from 'components/Header';
import PrimaryButton from 'components/PrimaryButton';
import { Dropdown } from 'react-native-element-dropdown';
import AccordionItem from 'components/CollapsabledropDown';
import { Icon } from 'react-native-vector-icons/Feather';




// --- Navigation Type Definition ---
type RootStackParamList = {
  ForgotPassword: undefined;
  Home: undefined;
  AccountCreationPage: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const dropdata = [
 { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
]

const langData = [
  { label: 'English', value: 'English' },
  { label: 'Spanish', value: 'Spanish' },
  { label: 'French', value: 'French' },
  { label: 'German', value: 'German' }, 
]
const Gender = 'Male'; // Default
// --- Tab Routes ---
const routes = [
  { key: 'first', title: 'Profile' },
  { key: 'second', title: 'Settings' },
  { key: 'third', title: 'Data Sharing ' },
];

// --- Tab Bar Customization ---
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#6200E0', height: 2 }}
    style={{ backgroundColor: 'none' }}
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
  const [isLoggedin, seIsLoggedin] = useState(false);
  const handletologin = () => {
    seIsLoggedin(true);
    console.log('Login button pressed');
    navigation.navigate('Home');
  };

  const handletocreateacc = () => {
    navigation.navigate('AccountCreationPage');
  };
  const ProfileSettings = () => {
   return (
    <>
    <KeyboardAvoidingView >
    <ScrollView className='flex-1 '>
    <View
      style={{ zIndex: 1, position: 'relative' }}
      className='flex-1 ml-4 mr-4 mt-2'
    >
      <Text className=' mt-2'>
      First Name
      </Text>
      <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />

      <Text className=' mt-2'>
       Last Name
      </Text>
      <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />

      <Text className=' mt-2'>
       Date Of Birth
      </Text>
      <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />

      <Text className=' mt-2'>
       Gender
      </Text>
      <Dropdown
      dropdownPosition='auto'
        style={{
          borderWidth: 1,
          borderColor: '#CFE6F1',
          borderRadius: 8,
          padding: 8,
          marginTop: 16,
          height: 48,
        }}
        data={dropdata}
        labelField="label"
        valueField="value"
        placeholder=" "
        maxHeight={300}
        value={Gender}
        onChange={item => {
          setGender(item.value);
        }}
      />
      <Text className=' mt-2'>
       Phone Number
      </Text>
      <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />  
      <Text className=' mt-2'>
       Email
      </Text>
      <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
      <Text className=' mt-2'>
       Languages Spoken
      </Text>
      <Dropdown
        style={{
          borderWidth: 1,
          borderColor: '#CFE6F1',
          borderRadius: 8,
          padding: 8,
          marginTop: 16,
          height: 48,
        }}
        data={langData}
        labelField="label"
        valueField="value"
        placeholder=" "
        maxHeight={300}   
        />
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </>
      )
    }
  // --- Phone Login Tab ---
  const ProfileRoute = () => (
    <View className="flex-1 ml-4 mr-4 ">
     <View>
      <Image
        source={require("assets/profile.png")} 
        className="w-24 h-24 rounded-full"
        style={{ marginTop: 20, alignSelf: 'center' }}
      />
      <Text className="text-2xl font-bold text-center mt-4">John Doe</Text>
      <Text className="text-gray-500 text-center mt-2">  
        Johndoe@gmail.com 
        </Text>
     </View>
     <View> 
      <Text>
        line
      </Text>
      <View>
        <AccordionItem
        zIndex='relative'
        title="Personal Information"
        children ={<ProfileSettings/>}
        icon="user"
        />
      </View>
     </View>
    </View>
  );

  // --- Email Login Tab ---
  const SettingsRoute = () => (
   <View>
    <Text>Settings </Text>
   </View>
  );

  // --- Membership ID Login Tab ---
  const DataSharingRoute = () => (
   <View>
    <Text className="text-xl mt-5 ml-4 text-[#414651]">Data Sharing</Text>
   </View>
  );

  // --- Combine Scenes ---
  const renderScene = SceneMap({
    first: ProfileRoute,
    second: SettingsRoute,
    third: DataSharingRoute,
  });

  return (
    <SafeAreaView className="flex-1">
      <Header showback={true} />
      <View className="ml-4 mt-[-30]">
        <Text className="text-purple-600 text-3xl font-bold">Account</Text>
      </View>

      <View className="h-full  mt-10">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width , height: "100%"}} 
          className='h-full'
        />
      </View>
    </SafeAreaView>
  );
}
