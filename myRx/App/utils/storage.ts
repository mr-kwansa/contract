import AsyncStorage from '@react-native-async-storage/async-storage';

export const setFirstTime = async (value: boolean) => {
  await AsyncStorage.setItem('isFirstTime', JSON.stringify(value));
};

export const getFirstTime = async () => {
  const value = await AsyncStorage.getItem('isFirstTime');
  return value ? JSON.parse(value) : true;
};

export const genderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

export const Language = [
  {label: 'English', value: '1'},
  {label: 'French', value: '2'},
];

export const BloodType = [
  {label: 'AB+', value: '1'},
  {label: 'AA', value: '2'},
];
