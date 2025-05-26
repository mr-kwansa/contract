import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  hasBg?: boolean;
  isActive?: boolean;
  iconName?: string;
  hasIcon?: boolean;
  disabled?: boolean;
  isError?: boolean;
  style?: object;
  className?: string;
  hight?: number;
  width?: number;
  bgColor?: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    onPress,
    hasBg = true,
    isActive = true,
    iconName = 'chevron-right',
    hasIcon = true,
    disabled = false,
    isError = false,
    style = {},
    className = '',
    hight = 50, 
    width = 50,
    bgColor = '#6200EE',
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`border w-full rounded-lg h-28 mt-5 items-center justify-center flex-row ${
        isError
          ? 'border-red-500'
          : hasBg
          ? isActive === false
            ? 'bg-inactive border-inactive'
            : 'bg-primary border-primary'
          : 'border-primary'
      }`}
       style={{
    backgroundColor: isError ? '#EF4444' : bgColor || (hasBg ? (isActive ? '#6200E0' : '#A0AEC0') : 'transparent'), // customize colors here
    height: hight || 112, // default h-28 = 112px
    width: width || '100%',
  }}
      >
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