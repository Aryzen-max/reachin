// DrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const DrawerContent = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here
    Alert.alert('Logout', 'You have been logged out.');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fddd00', '#ff6f61']} // Gradient colors
        style={styles.header}
      >
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/d0/13/3e/d0133ebbb4b77dde8cd32eff745ef7d2.jpg' }} // Replace with your profile picture URL
          style={styles.profilePicture}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </LinearGradient>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person-outline" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ServiceHistoryScreen')}>
          <MaterialIcons name="history" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Service History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ManageVehicleScreen')}>
          <FontAwesome name="car" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Manage Vehicle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('HelpSupportScreen')}>
          <Ionicons name="help-circle-outline" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ShareThisAppScreen')}>
          <Entypo name="share" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Share This App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AboutUsScreen')}>
          <Ionicons name="information-circle-outline" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Ionicons name="settings-outline" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#0077B5" style={styles.icon} />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#E0E0E0',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default DrawerContent;
