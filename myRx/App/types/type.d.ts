import {TouchableOpacityProps} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: any;
  hasBg?: boolean;
  isActive?: boolean;
  iconName?: string;
  hasIcon?: boolean;
  isError?: boolean;
}

export interface CountryCode {
  label: string;
  value: string;
}

export interface CollapasableDropDown {
  title: string;
  children: any;
  icon: any;
}

export interface Routes {
  route: any;
}

type RootStackParamList = {
  'register otp': undefined;
  'forgot password': undefined;
  'password reset': undefined;
  'home run': undefined;
  'register otp': undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export interface InputProps {
  disabled?: boolean;
  isPhone?: boolean;
  isEmail?: boolean;
  isPassword?: boolean;
  isMembershipID?: boolean;
  hasIcon?: boolean;
  onCountryCodeChange?: (code: string) => void;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  countryCodeValue?: string;
  isError?: boolean;
}

export type initState = {
  phoneNumber?: string;
  email?: string;
  membershipId?: string;
  countryCode?: string;
  password?: string;
  rePassword?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
};

export type initAction =
  | {type: 'UPDATE_PHONE_NUMBER'; payload: string}
  | {type: 'UPDATE_COUNTRY_CODE'; payload: string}
  | {type: 'UPDATE_EMAIL'; payload: string}
  | {type: 'UPDATE_REPASSWORD'; payload: string}
  | {type: 'UPDATE_FIRST_NAME'; payload: string}
  | {type: 'UPDATE_LAST_NAME'; payload: string}
  | {type: 'UPDATE_DOB'; payload: string}
  | {type: 'UPDATE_GENDER'; payload: string}
  | {type: 'UPDATE_MEMBERSHIPID'; payload: string}
  | {type: 'UPDATE_PASSWORD'; payload: string};

export type AuthState = {
  segment: number;
  setSegment: (index: number) => void;
};
