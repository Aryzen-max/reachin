import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, PermissionsAndroid } from 'react-native';
import WebView from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: 28.6139, // Default coordinates (e.g., New Delhi)
    longitude: 77.209,
  });

  const [selectedService, setSelectedService] = useState(null); // State to track selected service type

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
          source={{ uri: `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik` }}
          style={styles.map}
        />
        <Text style={styles.addressText}>
          225, E Block, Azad Vihar, Khora Colony, Sector 62A, Noida, Uttar Pradesh 201020, India
        </Text>
      </View>

      {/* Bottom Sheet-like View with Gradient Background */}
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']} // Define your gradient colors here
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
        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate('ManageVehicleScreen')}>
          <Text style={styles.addButtonText}>Add or Change</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
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
    color: 'red',
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
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'red',
    fontFamily: 'Poppins-SemiBold',
  },
  nextButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default HomeScreen;
