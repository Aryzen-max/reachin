import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Sample data
const serviceData = [
  {
    id: '1',
    date: '2024-08-01',
    vehicle: 'Toyota Corolla',
    service: 'Oil Change',
  },
  {
    id: '2',
    date: '2024-07-15',
    vehicle: 'Honda Civic',
    service: 'Tire Rotation',
  },
  {
    id: '3',
    date: '2024-08-01',
    vehicle: 'Toyota Corolla',
    service: 'Oil Change',
  },
  {
    id: '4',
    date: '2024-07-15',
    vehicle: 'Honda Civic',
    service: 'Tire Rotation',
  },
  {
    id: '5',
    date: '2024-08-01',
    vehicle: 'Toyota Corolla',
    service: 'Oil Change',
  },
  {
    id: '6',
    date: '2024-07-15',
    vehicle: 'Honda Civic',
    service: 'Tire Rotation',
  },
  {
    id: '7',
    date: '2024-08-01',
    vehicle: 'Toyota Corolla',
    service: 'Oil Change',
  },
  {
    id: '8',
    date: '2024-07-15',
    vehicle: 'Honda Civic',
    service: 'Tire Rotation',
  },
  {
    id: '9',
    date: '2024-08-01',
    vehicle: 'Toyota Corolla',
    service: 'Oil Change',
  },
];

const ServiceHistoryScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.vehicleText}>{item.vehicle}</Text>
      <Text style={styles.serviceText}>{item.service}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
    colors={['#fddd00', '#ff6f61']} // Gradient colors
      style={styles.container}
    >
      <Text style={styles.title}>Service History</Text>
      <FlatList
        data={serviceData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
    color:'#000'
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1, // For shadow effect on Android
  },
  dateText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  vehicleText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
});

export default ServiceHistoryScreen;
