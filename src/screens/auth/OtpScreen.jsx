import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const navigateToOtpProfileScreen = () => {
    navigation.navigate('MyProfileScreen')
  }

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];

    // Handle deletion
    if (text === '') {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
      newOtp[index] = '';
    } 
    // Handle new character input
    else if (/^[0-9]$/.test(text)) {
      newOtp[index] = text;
      setOtp(newOtp);

      // Move focus to the next box if the input is valid and not the last box
      if (index < otp.length - 1 && text) {
        inputs.current[index + 1].focus();
      }
    }

    setOtp(newOtp);
  };

  const handlePaste = (text) => {
    if (text.length === otp.length) {
      setOtp(text.split(''));
      inputs.current[otp.length - 1].focus();
    }
  };

  const handleSubmitOtp = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      navigateToOtpProfileScreen();
    } else {
      Alert.alert('Error', 'PIN must be 4 digits');
    }
  };

  const renderOtpBox = (value, index) => (
    <View
      key={index}
      style={[styles.box, index === otp.length - 1 && styles.focusedBox]}
    >
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={1}
        value={value}
        onChangeText={(text) => handleOtpChange(text, index)}
        onFocus={() => inputs.current[index].focus()}
        ref={(ref) => inputs.current[index] = ref}
        onPaste={({ nativeEvent: { clipboardData } }) => handlePaste(clipboardData.getData('text'))}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
       colors={['#4c669f', '#3b5998', '#192f6a']} 
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
          source={{ uri: 'https://st2.depositphotos.com/3682225/11228/v/450/depositphotos_112288198-stock-illustration-automotive-repair-icon-car-service.jpg' }}
          width={100}
          height={100}
          style={{ alignSelf: 'center' }}
        />
        <View style={styles.header}>
          <Text style={styles.title}>Enter PIN</Text>
          <Text style={styles.subtitle}>Please enter the 4-digit PIN sent to your phone</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.otpContainer}>
            {otp.map((value, index) => renderOtpBox(value, index))}
          </View>

          <TouchableOpacity style={styles.submitButton} activeOpacity={0.7} onPress={handleSubmitOtp}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']} 
              style={styles.submitButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-BlackItalic',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign:'center',
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: 50,
    height: 50,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  focusedBox: {
    borderColor: '#ff6f61',
  },
  input: {
    fontSize: 24,
    color: '#333',
    width: '100%',
    height: '100%',
    textAlign: 'center', // Center text within each box
  },
  submitButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
});

export default OtpScreen;
