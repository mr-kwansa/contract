import {View, Text, Switch, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import AccordionItem from '../components/CollapsableDropDown';
import Icon from 'react-native-vector-icons/Feather';
import {Dropdown} from 'react-native-element-dropdown';
import {Language} from '../utils/storage';
import {RadioButton} from 'react-native-paper';

const Settings = () => {
  const [medication, setMedication] = React.useState(true);
  const [appointment, setAppointment] = React.useState(false);
  const [messages, setMessages] = React.useState(true);
  const [pharmacy, setPharmacy] = React.useState(true);
  const [language, setLanguage] = React.useState('english');
  const [unit, setUnit] = React.useState('metric1');
  const [biometric, setBiometric] = React.useState(true);

  const SettingsChildren = (
    <View className="gap-5 pt-2">
      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-semibold text-base">Medication Reminders</Text>
          <Text className="text-sm text-gray-500">
            Get notified when it's time to take your medication
          </Text>
        </View>
        <Switch
          value={medication}
          onValueChange={setMedication}
          trackColor={{true: '#6200E0'}}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-semibold text-base">Appointment Reminders</Text>
          <Text className="text-sm text-gray-500">
            Get notified about upcoming appointments
          </Text>
        </View>
        <Switch
          value={appointment}
          onValueChange={setAppointment}
          trackColor={{true: '#6200E0'}}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-semibold text-base">Messages</Text>
          <Text className="text-sm text-gray-500">
            Get notified when you receive new messages
          </Text>
        </View>
        <Switch
          value={messages}
          onValueChange={setMessages}
          trackColor={{true: '#6200E0'}}
          thumbColor="#fff"
        />
      </View>

      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-semibold text-base">
            Pharmacy Announcements
          </Text>
          <Text className="text-sm text-gray-500">
            Get notified about important announcements
          </Text>
        </View>
        <Switch
          value={pharmacy}
          onValueChange={setPharmacy}
          trackColor={{true: '#6200E0'}}
          thumbColor="#fff"
        />
      </View>
    </View>
  );

  const SettingsChildren1 = (
    <View className="gap-6 pt-2">
      <View>
        <Text className="font-semibold text-base mb-1">Language</Text>
        <View className="border-2 border-gray-300 rounded-lg mt-1 overflow-hidden h-[50px] justify-center">
          <Dropdown
            data={Language}
            labelField="label"
            valueField="value"
            placeholder="Select Gender"
            value={language}
            onChange={item => setLanguage(item)}
            style={{height: 30}}
            placeholderStyle={{
              fontSize: 12,
              paddingHorizontal: 10,
              lineHeight: 28,
              color: '#9CA3AF',
            }}
            selectedTextStyle={{
              fontSize: 12,
              paddingHorizontal: 10,
              lineHeight: 28,
              color: '#1F2937',
            }}
          />
        </View>
      </View>

      <View>
        <Text className="font-semibold text-base mb-1">
          Units of Measurement
        </Text>
        <View className="flex-row items-center space-x-5">
          <TouchableOpacity
            onPress={() => setUnit('metric1')}
            className="flex-row items-center">
            <RadioButton
              value="metric1"
              status={unit === 'metric1' ? 'checked' : 'unchecked'}
              onPress={() => setUnit('metric1')}
              color="#6200E0"
            />
            <Text>Metric (kg, cm)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setUnit('metric2')}
            className="flex-row items-center">
            <RadioButton
              value="metric2"
              status={unit === 'metric2' ? 'checked' : 'unchecked'}
              onPress={() => setUnit('metric2')}
              color="#6200E0"
            />
            <Text>Metric (kg, cm)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between items-start">
        <View>
          <Text className="font-semibold text-base">
            Biometric Authentication
          </Text>
          <Text className="text-sm text-gray-500">
            Use fingerprint or face ID to log in
          </Text>
        </View>
        <Switch
          value={biometric}
          onValueChange={setBiometric}
          trackColor={{true: '#6200E0'}}
          thumbColor="#fff"
        />
      </View>
    </View>
  );

  return (
    <View className="flex-1">
      <View className="p-5">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          <AccordionItem
            title={'Notifications'}
            children={SettingsChildren}
            icon={<Icon name="bell" size={25} color={'#6200E0'} />}
          />
          <AccordionItem
            title={'App Settings'}
            children={SettingsChildren1}
            icon={<Icon name="settings" size={25} color={'#6200E0'} />}
          />
        </ScrollView>
      </View>

      <View className="absolute bottom-0 left-0 right-0 pt-4 pb-1 px-5 border-t-2 border-[#E9EAEB] w-full bg-white">
        <PrimaryButton
          title={'Log Out'}
          isError
          onPress={() => console.log('Save pressed')}
          hasIcon
          iconName="log-out"
        />
      </View>
    </View>
  );
};

export default Settings;
