import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();
  const notificationCount = 3; // Example count

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.locationContainer}
        onPress={() => navigation.navigate('SearchLocationScreen')}
      >
        <Icon name="location-outline" size={20} color="#4c669f" />
        <Text style={styles.locationText}>Your Current Location</Text>
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('NotificationScreen')}
        >
          <Icon name="notifications-outline" size={24} color="#4c669f" />
          {notificationCount > 0 && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '80%',
    borderColor: '#4c669f',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff', // Optional: background color for better visibility
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#4c669f',
    fontFamily: 'Poppins-Medium',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#4c669f',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
});

export default CustomHeader;
