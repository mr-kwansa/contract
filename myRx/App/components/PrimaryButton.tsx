import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PrimaryButtonProps} from '../types/type';
import Feather from 'react-native-vector-icons/Feather';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  hasBg,
  isActive,
  iconName,
  hasIcon,
  disabled,
  isError,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`border w-full rounded-lg h-14 items-center justify-center flex-row ${
        isError
          ? 'border-red-500'
          : hasBg
          ? isActive === false
            ? 'bg-inactive border-inactive'
            : 'bg-primary border-primary'
          : 'border-primary'
      }`}>
      <Text
        className={`${
          isError ? 'text-red-500' : hasBg ? 'text-white' : 'text-primary'
        } font-bold`}>
        {title}
      </Text>
      {hasIcon && (
        <Feather
          name={`${iconName}`}
          size={20}
          style={{marginLeft: 5}}
          color={isError ? '#EF4444' : hasBg ? '#ffffff' : '#6200E0'}
        />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
