import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VehicleDetails = ({ navigation }) => {
  const [vehicleBranch, setVehicleBranch] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  
  const navigateToOtpProfileScreen = () => {
    navigation.navigate('HomeScreen');
  }

  const handleProfileUpdate = () => {
    if (vehicleBranch && vehicleModel && vehicleNumber) {
      navigateToOtpProfileScreen();
    } else {
      Alert.alert('Error', 'All fields are required');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
         colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Vehicle Details</Text>
          <Text style={styles.subtitle}>Create your vehicle information</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vehicle Brand"
            value={vehicleBranch}
            onChangeText={setVehicleBranch}
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Model"
            value={vehicleModel}
            onChangeText={setVehicleModel}
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
          />
          <TouchableOpacity style={styles.updateButton} activeOpacity={0.7} onPress={handleProfileUpdate}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.updateButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.updateButtonText}>Create vehicle Details</Text>
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
    marginBottom: 30,
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
    fontFamily: 'Poppins-SemiBold',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
  },
  updateButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  updateButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
});

export default VehicleDetails;
