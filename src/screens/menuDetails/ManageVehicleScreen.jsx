import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Sample data for vehicles
const initialVehicles = [
  { id: '1', make: 'Toyota', model: 'Corolla', year: '2020' },
  { id: '2', make: 'Honda', model: 'Civic', year: '2018' },
  // Add more vehicles as needed
];

const ManageVehicleScreen = () => {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const addVehicle = () => {
    if (make && model && year) {
      const newVehicle = {
        id: (vehicles.length + 1).toString(),
        make,
        model,
        year,
      };
      setVehicles([...vehicles, newVehicle]);
      setMake('');
      setModel('');
      setYear('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.make} {item.model} ({item.year})</Text>
    </View>
  );

  return (
    <LinearGradient
    colors={['#fddd00', '#ff6f61']} // Gradient colors
      style={styles.container}
    >
      <Text style={styles.title}>Manage Vehicles</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Make"
          value={make}
          onChangeText={setMake}
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          value={model}
          onChangeText={setModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={addVehicle}>
          <Text style={styles.buttonText}>Add Vehicle</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.list}
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
    marginBottom: 10,
    textAlign:'center',
    color:'#000'
  },
  form: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  list: {
    marginTop: 16,
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1, // For shadow effect on Android
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default ManageVehicleScreen;
