import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons
import LottieView from 'lottie-react-native'; // Import Lottie for animations
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

const BookingSucessFull = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} 
    // colors={['#fddd00', '#ff6f61']}
      style={styles.container}
    >
      {/* Success Animation */}
      <LottieView
        source={require('../../assets/animationOder.json')} // Path to your success animation JSON
        autoPlay
        loop={false}
        style={styles.lottie}
      />

      {/* Success Message */}
      <Text style={styles.title}>Booking Successful!</Text>
      <Text style={styles.subtitle}>Your booking has been confirmed.</Text>

      {/* Order Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Order ID: #123456789</Text>
        <Text style={styles.detailsText}>Service: General Service</Text>
      </View>

    
      
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('HomeScreen')}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']} 
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  icon: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff', // Adjusted for contrast with gradient background
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#eee', // Adjusted for contrast with gradient background
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF5ED',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
});

export default BookingSucessFull;
