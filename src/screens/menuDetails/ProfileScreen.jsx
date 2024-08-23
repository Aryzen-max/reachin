import React from 'react';
import { View, Text, StyleSheet, Image, Platform, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  const name = 'John Doe';
  const email = 'johndoe@example.com';
  const mobileNumber = '123-456-7890';
  const age = '30';
  const dob = '1994-08-23';
  const VehicleModal = 'KTM-135';
  const VehicleNumber = 'DL-10423';

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fddd00', '#ff6f61']} // Gradient colors
        style={styles.header}
      >
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/d0/13/3e/d0133ebbb4b77dde8cd32eff745ef7d2.jpg' }} // Replace with your profile picture URL
            style={styles.profilePicture}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </LinearGradient>

      <KeyboardAvoidingView
        style={styles.infoSection}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <LinearGradient
          colors={['#e0eafc', '#cfdef3']} // Gradient colors for the info container
          style={styles.infoContainer}
        >
          <View style={styles.infoCard}>
            <Text style={styles.label}>Mobile Number</Text>
            <Text style={styles.value}>{mobileNumber}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{age}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>{dob}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Vehicle Modal</Text>
            <Text style={styles.value}>{VehicleModal}</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Vehicle Number</Text>
            <Text style={styles.value}>{VehicleNumber}</Text>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 60, // Space for the profile picture
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10, // Adjust this value as needed
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6, // For Android shadow
  },
  name: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  email: {
    fontSize: 18,
    color: '#dfe3ee',
  },
  infoSection: {
    flex: 1,
    padding: 5,
  },
  infoContainer: {
    flexGrow: 1,
    borderRadius: 10,
    padding: 10,
    elevation: 2, // For Android shadow
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2, // For Android shadow
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  value: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
});

export default ProfileScreen;
