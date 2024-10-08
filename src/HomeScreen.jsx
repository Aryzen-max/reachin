import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
import WebView from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 28.6139, // Default coordinates (e.g., New Delhi)
    longitude: 77.209,
  });

  // Set "Bike Service" as the default selected service type
  const [selectedService, setSelectedService] = useState('Bike Service');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This app needs to access your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          Alert.alert('Permission Denied', 'App cannot work without location permission.');
        }
      } else {
        // Handle iOS permission request
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    // For demonstration, we'll just use the default location
    setLocation({ latitude: 28.6139, longitude: 77.209 });
  };

  const handleServiceSelection = (serviceType) => {
    setSelectedService(serviceType);
  };

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: `https://www.google.com/maps/d/viewer?ie=UTF&msa=0&mid=1ugPBH9-MCw7w7lSrdNWcjO9_y7M&ll=28.61548526474437%2C77.35514857221418&z=11${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik` }}
          style={styles.map}
        />
        <Text style={styles.addressText}>
          225, E Block, Azad Vihar, Khora Colony, Sector 62A, Noida, Uttar Pradesh 201020, India
        </Text>
      </View>

      {/* Bottom Sheet-like View with Gradient Background */}
      <LinearGradient
         colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.bottomSheet}
      >
        {/* Input for Address */}
        <TextInput
          style={styles.input}
          placeholder="Enter Flat No / Floor / Landmark"
        />

        {/* Service Type Section */}
        <Text style={styles.sectionTitleHead}>Service Type</Text>
        <View style={styles.serviceTypeContainer}>
          <TouchableOpacity
            style={styles.radioContainer}
            onPress={() => handleServiceSelection('Bike Service')}
            activeOpacity={0.7}
          >
            <View style={[styles.radioCircle, selectedService === 'Bike Service' && styles.selectedRadio]} />
            <Text style={styles.radioText}>Bike Service</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioContainer}
            onPress={() => handleServiceSelection('Car Service')}
            activeOpacity={0.7}
          >
            <View style={[styles.radioCircle, selectedService === 'Car Service' && styles.selectedRadio]} />
            <Text style={styles.radioText}>Car Service</Text>
          </TouchableOpacity>
        </View>

        {/* Vehicle Section */}
        <Text style={styles.sectionTitleHead}>Vehicle Details :- </Text>
        <Text style={styles.sectionTitle}>KTM-135 </Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('ManageVehicleScreen')}>
          <Text style={styles.addButtonText}>Add or Change</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} activeOpacity={0.7} onPress={() => navigation.navigate('PlaceOrderScreen')}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']} 
              style={styles.nextButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.nextButtonText}>Proceed</Text>
            </LinearGradient>
          </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1, // Occupies remaining space
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  addressText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  bottomSheet: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sectionTitleHead: {
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    color: 'yellow',
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color: '#fff',
  },
  serviceTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: 'red',
  },
  radioText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#4c669f',
    fontFamily: 'Poppins-SemiBold',
  },
  nextButton: {
    width:'100%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default HomeScreen;
