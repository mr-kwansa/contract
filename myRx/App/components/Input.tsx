import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {InputProps, CountryCode} from '../types/type';
import Ionicons from 'react-native-vector-icons/Ionicons';

const countryCodes: CountryCode[] = [
  {label: 'GH', value: '+233'},
  {label: 'US', value: '+44'},
  {label: 'NIG', value: '+91'},
  {label: 'LAA', value: '+81'},
];

const Input = ({
  isPhone = false,
  isEmail = false,
  isMembershipID = false,
  onCountryCodeChange,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  hasIcon = false,
  isError = false,
  disabled = false,
}: InputProps) => {
  const [countryCode, setCountryCode] = React.useState('+233');
  const [secureText, setSecureText] = React.useState(isPassword);

  return (
    <View
      style={[styles.container, {borderColor: isError ? 'red' : '#d1d5db'}]}>
      {isPassword && (
        <Ionicons
          name="lock-closed-outline"
          style={styles.leftIcon}
          size={20}
          color="#6b7280"
        />
      )}
      {isPhone && (
        <Dropdown
          data={countryCodes}
          labelField="label"
          valueField="value"
          value={countryCode}
          onChange={item => {
            setCountryCode(item.value);
            onCountryCodeChange?.(item.value);
          }}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          maxHeight={200}
          containerStyle={styles.dropdownContainer}
          itemTextStyle={styles.itemTextStyle}
        />
      )}

      <TextInput
        style={[styles.input, !isPhone && styles.fullWidth]}
        placeholder={placeholder}
        value={value}
        readOnly={disabled}
        onChangeText={onChangeText}
        keyboardType={isPhone ? 'phone-pad' : 'default'}
        secureTextEntry={isPassword ? secureText : false}
        placeholderTextColor="#9ca3af"
      />

      {hasIcon && (
        <>
          {isEmail && (
            <Ionicons name="mail-outline" size={20} color="#6b7280" />
          )}
          {isMembershipID && (
            <Ionicons name="id-card-outline" size={20} color="#6b7280" />
          )}
          {isPhone && (
            <Ionicons name="call-outline" size={20} color="#6b7280" />
          )}
        </>
      )}

      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={styles.eyeIcon}>
          <Ionicons
            name={secureText ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#6b7280"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    height: 60,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    position: 'relative',
  },
  dropdown: {
    minWidth: 70,
    height: 40,
    borderRightWidth: 1,
    borderColor: '#d1d5db',
    paddingRight: 8,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    paddingHorizontal: 8,
    color: '#1f2937',
  },
  fullWidth: {
    marginLeft: 0,
    width: '100%',
  },
  placeholderStyle: {
    color: '#9ca3af',
  },
  selectedTextStyle: {
    color: '#1f2937',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e5e7eb',
  },
  itemTextStyle: {
    color: '#1f2937',
  },
  leftIcon: {
    marginRight: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
  },
});

export default Input;
