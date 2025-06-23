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
  KeyboardAvoidingView,
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
type RootStackParamList = {
  ForgotPassword: undefined;
  Home: undefined;
  AccountCreationPage: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const dropdata = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];
const langData = [
  { label: 'English', value: 'English' },
  { label: 'Spanish', value: 'Spanish' },
  { label: 'French', value: 'French' },
  { label: 'German', value: 'German' },
];
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
const Gender = 'Male';
const handleSaveChanges = () => {
  console.log('Changes saved');
};
const setGender = (value: string) => {
  console.log('Selected');
};
const routes = [
  { key: 'first', title: 'Profile' },
  { key: 'second', title: 'Settings' },
  { key: 'third', title: 'Data Sharing ' },
];
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
        <KeyboardAvoidingView>
          <View style={{ zIndex: 1, position: 'relative' }} className=" ml-4 mr-4 mt-2">
            <Text className=" mt-2">First Name</Text>
            <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
            <Text className=" mt-2">Last Name</Text>
            <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
            <Text className=" mt-2">Date Of Birth</Text>
            <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
            <Text className=" mt-2">Gender</Text>
            <Dropdown
              dropdownPosition="auto"
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
              onChange={(item) => {
                setGender(item.value);
              }}
            />
            <Text className=" mt-2">Phone Number</Text>
            <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
            <Text className=" mt-2">Email</Text>
            <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
            <Text className=" mt-2">Languages Spoken</Text>
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
        </KeyboardAvoidingView>
      </>
    );
  };
  const healthInformation = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-row gap-32">
        <View>
          <Text className="mt-2">Height(cm)</Text>
          <TextInput
            className="mt-4 h-12 w-32 rounded-lg border border-[#CFE6F1] p-2"
            placeholder="165"
          />
        </View>
        <View>
          <Text className="mt-2">Weight(kg)</Text>
          <TextInput
            className="mt-4 h-12 w-32 rounded-lg border border-[#CFE6F1] p-2"
            placeholder="68"
          />
        </View>
      </View>
    );
  };
  const lifestyleInformation = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <Text className="text-lg font-bold">Lifestyle Information</Text>
        <Text className="mt-2">Smoking Status</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Alcohol Consumption</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Physical Activity Level</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
      </View>
    );
  };
  const SocialDeterminants = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <Text className="text-lg font-bold">Social Determinants of Health</Text>
        <Text className="mt-2">Housing Status</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Employment Status</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Education Level</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Income Level</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Access to Transportation</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Food Security</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
      </View>
    );
  };
  const InsureanceInformation = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <Text className="text-lg font-bold">Insurance Information</Text>
        <Text className="mt-2">Insurance Provider</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Policy Number</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Group Number</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
      </View>
    );
  };
  const EmergancyContact = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1 pb-10">
        <Text className="text-lg font-bold">Emergency Contact</Text>
        <Text className="mt-2">Contact Name</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Relationship</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
        <Text className="mt-2">Phone Number</Text>
        <TextInput className="mt-4 h-12 rounded-lg border border-[#CFE6F1] p-2" />
      </View>
    );
  };
  const ProfileRoute = () => (
    <ScrollView
      className="ml-4 mr-4 flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}>
      <View>
        <Image
          source={require('assets/profile.png')}
          className="h-24 w-24 rounded-full"
          style={{ marginTop: 20, alignSelf: 'center' }}
        />
        <Text className="mt-4 text-center text-2xl font-bold">John Doe</Text>
        <Text className="mt-2 text-center text-gray-500">Johndoe@gmail.com</Text>
      </View>
       <View className="my-4 border-t border-gray-300" />
      <View>
        <AccordionItem
          zIndex="relative"
          title="Personal Information"
          children={<ProfileSettings />}
          icon={<Icon name="user" size={25} color={'#6200E0'} />}
        />
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
        <AccordionItem
          title="Emergency Contact"
          children={EmergancyContact()}
          icon={<Icon name="user-check" size={25} color={'#6200E0'} />}
        />
        <PrimaryButton
          title="Save Changes"
          onPress={handleSaveChanges}
          className="mb-4 mt-4 bg-purple-600"
          width={350}
          hasIcon={false}
        />
      </View>
    </ScrollView>
  );
  const notificationSettings = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <View>
          <Text className="text-lg font-bold">Medication Reminders</Text>
          <Text className="mt-2">Get notification when it's time to take your</Text>
          <Text className="mt-2">medication</Text>
        </View>
        <View>
          <Text className="mt-4 text-lg font-bold">Appointment Reminders</Text>
          <Text className="mt-2">Get notification for upcoming appointments</Text>
        </View>
        <View>
          <Text className="mt-4 text-lg font-bold">Messages</Text>
          <Text className="mt-2">Get notification when you receive new messages</Text>
        </View>
        <View>
          <Text className="mt-4 text-lg font-bold">Pharmacy Announcement</Text>
          <Text className="mt-2">Get notified about important announcements</Text>
        </View>
      </View>
    );
  };
  const appSettings = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <Text className="text-lg font-bold">App Settings</Text>
        <Text className="mt-2">Language</Text>
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
        <Text className="mt-4">Units of Measurement</Text>
        <RadioGroup
          radioButtons={[
            { id: '1', label: 'Metric (Kg, cm)', value: 'metric' },
            { id: '2', label: 'Imperial (lb, ft)', value: 'imperial' },
          ]}
          onPress={(value) => console.log(value)}
          layout="row"
        />
        <Text className="mt-4 text-xl">Biometric authentication</Text>
        <Text className="mt-2">Use fingerprint or FaceID to Login</Text>
      </View>
    );
  };
  const datasharing = () => {
    return (
      <View className="ml-4 mr-4 mt-2 flex-1">
        <Text className="mt-2">
          Share your health data temporarily with healthcare providers or caregivers.
        </Text>
        <TouchableOpacity className="mt-4 rounded-lg bg-purple-600 p-3">
          <Text className="text-center text-xl text-white">Share Health Data</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const SettingsRoute = () => (
    <ScrollView className="w-full" contentContainerStyle={{ paddingBottom: 100 }}>
      <View className="ml-4 mr-4 mt-10">
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
    </ScrollView>
  );
  const DataSharingRoute = () => (
    <ScrollView className="ml-4 mr-4 mt-6 flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
      <AccordionItem
        title="Temporary Data Sharing"
        children={datasharing()}
        icon={<Icon name="share" size={25} color={'#6200E0'} />}
      />
    </ScrollView>
  );
  const renderScene = SceneMap({
    first: ProfileRoute,
    second: SettingsRoute,
    third: DataSharingRoute,
  });
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header showback={true} />
      <View className="ml-4 mt-[-30]">
        <Text className="text-3xl font-bold text-purple-600">Account</Text>
      </View>
      <View className="flex-1">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width, height: layout.height }}
          className="h-full"
        />
      </View>
    </SafeAreaView>
  );
}