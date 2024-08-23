import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
const navigateToOtpScreen=()=>{
  navigation.navigate('OtpScreen')
}
  const handlePhoneNumberChange = (text) => {
    // Allow only digits and limit to 10 characters
    const formattedText = text.replace(/[^0-9]/g, '');
    setPhoneNumber(formattedText);
  };

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
     navigateToOtpScreen()
    } else {
      Alert.alert('Error', 'Phone number must be 10 digits');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#fddd00', '#ff6f61']}
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
          <Text style={styles.title}>Welcome Reach In!</Text>
          <Text style={styles.subtitle}>Login to continue</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.phoneInputContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              numberOfLines={1}
              maxLength={10}
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.7} onPress={handleLogin}>
            <LinearGradient
              colors={['#ff8c00', '#ff6f61']}
              style={styles.loginButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.loginButtonText}>Login</Text>
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
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
    alignItems: 'center',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneInput: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  loginButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LoginScreen;
