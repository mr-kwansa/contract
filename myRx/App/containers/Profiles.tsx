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
import Icon from 'react-native-vector-icons/Feather';
import { RadioGroup } from 'react-native-radio-buttons-group';



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
const bloodTypeData = [
  { label: 'A+', value: 'A+' },
  { label: 'A-', value: 'A-' },
  { label: 'B+', value: 'B+' },
  { label: 'B-', value: 'B-' },
  { label: 'O+', value: 'O+' },
  { label: 'O-', value: 'O-' },
  { label: 'AB+', value: 'AB+' },
  { label: 'AB-', value: 'AB-' },
];
const Gender = 'Male'; // Default
const handleSaveChanges = () => {
  console.log('Changes saved');
}
const setGender = (value: string) => {
  console.log('Selected');
  // Here you can handle the selected value
  // For example, you can update the state or perform any action
}
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
    {/* <ScrollView className='px-4 pt-2' contentContainerStyle={{ flexGrow: 1,paddingBottom: 400 }}> */}
    <View
      style={{ zIndex: 1, position: 'relative' }}
      className=' ml-4 mr-4 mt-2'
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
        {/* </ScrollView> */}
        </KeyboardAvoidingView>
        </>
      )
    }

  const healthInformation = () => {
    return (
      <>
      <View className='flex-row gap-32 ml-4 mr-4 mt-2'>
        <View>
        <Text className='mt-2'>Height(cm)</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 w-32 mt-4 h-12' 
        placeholder='165'/>
        </View>
        <View>
        <Text className='mt-2'>Weight(kg)</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 w-32 mt-4 h-12' 
        placeholder='68'/>
        </View>
        </View>
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <Text className='mt-2'>Blood Type</Text>
        <Dropdown
          style={{
            borderWidth: 1,
            borderColor: '#CFE6F1',
            borderRadius: 8,
            padding: 8,
            marginTop: 16,
            height: 48,
          }}
          data={bloodTypeData}
          labelField="label"
          valueField="value"
          placeholder="A+"
          maxHeight={300}
          dropdownPosition='auto'
          onChange={item => {
            setBloodType(item.value);
          }
          }
        />
      </View>
      </>
    );
  };
  const lifestyleInformation = () => {
    return (
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <Text className='text-lg font-bold'>Lifestyle Information</Text>
        <Text className='mt-2'>Smoking Status</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Alcohol Consumption</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Physical Activity Level</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
      </View>
    );
  };
  const SocialDeterminants = () => {
    return (  

      <ScrollView className='flex-1 ml-4 mr-4 mt-2'>
        <View>
          <Text className='text-lg font-bold'>Social Determinants of Health</Text>
          <Text className='mt-2'>Housing Status</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
          <Text className='mt-2'>Employment Status</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
          <Text className='mt-2'>Education Level</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
          <Text className='mt-2'>Income Level</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
          <Text className='mt-2'>Access to Transportation</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
          <Text className='mt-2'>Food Security</Text>
          <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        </View>
        </ScrollView>

    );
  };

  const InsureanceInformation = () => {
    return (  
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <Text className='text-lg font-bold'>Insurance Information</Text>
        <Text className='mt-2'>Insurance Provider</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Policy Number</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Group Number</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
      </View>
    );
  };

  const EmergancyContact = () => {
    return (
      <View className='flex-1 ml-4 mr-4 mt-2 pb-64'>
        <Text className='text-lg font-bold'>Emergency Contact</Text>
        <Text className='mt-2'>Contact Name</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Relationship</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
        <Text className='mt-2'>Phone Number</Text>
        <TextInput className='border border-[#CFE6F1] rounded-lg p-2 mt-4 h-12' />
      </View>
    );
  };
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

       <View className="my-4 border-t border-gray-300" />
      <ScrollView>
      <View>
        <ScrollView >
        <AccordionItem
        zIndex='relative'
        title="Personal Information"
        children ={<ProfileSettings/>}
        icon={<Icon name="user" size={25} color={'#6200E0'} />}
        />
        </ScrollView>
        <AccordionItem
        title="Health Information"
        children={healthInformation()}
        icon={<Icon name="heart" size={25} color={'#6200E0'} />}
        />
        <AccordionItem
        title="Lifestyle Information"
        children={lifestyleInformation()}
        icon={<Icon name="user-plus" size={25} color={'#6200E0'} />}
        />
        <AccordionItem
        title="Social Determinants"
        children={SocialDeterminants()}
        icon={<Icon name="book" size={25} color={'#6200E0'} />}
        />
        <AccordionItem
        title="Insurance Information"
        children={InsureanceInformation()}
        icon={<Icon name="box" size={25} color={'#6200E0'} />}

        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <AccordionItem
        title="Emergency Contact"
        children={EmergancyContact()}
        icon={<Icon name="user-check" size={25} color={'#6200E0'} />}
        />
        </ScrollView>
      </View>
      </ScrollView>
      <PrimaryButton
        title="Save Changes"
        onPress={handleSaveChanges}
        className=" mt-4 mb-4 bg-purple-600"
        width={350}
        hasIcon={false}
      />
     </View>

    </View>
  );

  const notificationSettings = () => {
    return (
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <View>
        <Text className='text-lg font-bold'>Medication Reminders</Text>
        <Text className='mt-2'>Get notification when it's time to take your</Text>
        <Text className='mt-2'>medication</Text>
        </View>
        <View>
          <Text className='text-lg font-bold mt-4'>Appointment Reminders</Text>
          <Text className='mt-2'>Get notification for upcoming appointments</Text>
        </View>
        <View>
          <Text className='text-lg font-bold mt-4'>Messages</Text>
          <Text className='mt-2'>Get notification when you receive new messages</Text>
        </View>
        <View>
          <Text className='text-lg font-bold mt-4'>Pharmacy Announcement</Text>
          <Text className='mt-2'>Get notified about important announcements</Text>
          </View>
      </View>
    );
  };

  const appSettings = () => {
    return (
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <Text className='text-lg font-bold'>App Settings</Text>
        <Text className='mt-2'>Language</Text>
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
          placeholder="English"
          maxHeight={300}
        />
        <Text className='mt-4'>
          Units of Measurement
        </Text>
        <RadioGroup
          radioButtons={[
            { id: 'Metric(Kg,cm)', label: 'Metric(Kg,cm)' },
            { id: 'Metric(Kg,cm)', label: 'Metric(Kg,cm)' },
          ]}
          onPress={(value) => console.log(value)}
          layout="row"
        />
        <Text className='mt-4 text-2xl'>Biometric authentication</Text>
        <Text className='mt-2'>Use fingerprint or FaceID to Login</Text>
      </View>
    );
  };  
  const datasharing = () => {
    return (  
      <View className='flex-1 ml-4 mr-4 mt-2'>
        <Text className='mt-2'>Share your health data temporarily with healthcare providers or caregivers.</Text>
        <TouchableOpacity className='bg-purple-600 p-3 rounded-lg mt-4'>
          <Text className='text-white text-center text-xl'>Share Health Data</Text>
        </TouchableOpacity>
      </View>
    );
  };
  // --- Email Login Tab ---
  const SettingsRoute = () => (
    <ScrollView>
   <View className="flex-1 ml-4 mr-4  items-center">
    <View className="flex-1 w-full mt-10">
      <AccordionItem
        title="Notification"
        children={notificationSettings()}
        icon={<Icon name="bell" size={25} color={'#6200E0'} />}
      />
       <AccordionItem
        title="App Settings"
        children={appSettings()}
        icon={<Icon name="settings" size={25} color={'#6200E0'} />}
      />
    </View>
    <View className="flex-1 w-full mt-10">
     
      </View>
   </View>
   </ScrollView>
  );

  // --- Membership ID Login Tab ---
  const DataSharingRoute = () => (
   <View className='flex-1 ml-4 mr-4 mt-6'>
    <AccordionItem
      title="Temporary Data Sharing"
      children={datasharing()}
      icon={<Icon name="share" size={25} color={'#6200E0'} />}
    />
   </View>
  );

  // --- Combine Scenes ---
  const renderScene = SceneMap({
    first: ProfileRoute,
    second: SettingsRoute,
    third: DataSharingRoute,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header showback={true} />
      <View className="ml-4 mt-[-30]">
        <Text className="text-purple-600 text-3xl font-bold">Account</Text>
      </View>

      <View className="h-full">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width , height: layout.height }} 
          className='h-full'
        />
      </View>
    </SafeAreaView>
  );
}
