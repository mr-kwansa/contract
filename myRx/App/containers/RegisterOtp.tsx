import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import OtpInputs from 'react-native-otp-inputs';

const RegisterOtp = ({navigation}: any) => {
  return (
    <View className="bg-white h-screen flex p-5">
      <View>
        <Text className="text-primary font-bold text-3xl mb-2">
          Verify your account
        </Text>
        <Text className="text-black font-medium text-lg">
          A verification code is sent to . Please check your inbox to complete
          your account setup.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <OtpInputs
          handleChange={code => console.log(code)}
          numberOfInputs={6}
          keyboardType={'phone-pad'}
          autofillFromClipboard={true}
          inputStyles={styles.input}
          style={styles.otpInputContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    marginTop: 40,
    position: 'relative',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#gray',
    borderRadius: 8,
    color: '#6200E0',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterOtp;
