import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Sample data for vehicles
const initialVehicles = [
  { id: '1', make: 'Toyota', model: 'Corolla', year: '2020' },
  { id: '2', make: 'Honda', model: 'Civic', year: '2018' },
  // Add more vehicles as needed
];

const ManageVehicleScreen = ({navigation}) => {
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
    colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Text style={styles.title}>Manage Vehicles</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your vehicle name"
          value={make}
          placeholderTextColor={"#fff"}
          onChangeText={setMake}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your vehicle Model"
          value={model}
          onChangeText={setModel}
          placeholderTextColor={"#fff"}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your vehicle Year"
          value={year}
          onChangeText={setYear}
          placeholderTextColor={"#fff"}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('HomeScreen')}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']} 
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.buttonText}>Add Vehicle</Text>
            </LinearGradient>
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
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingTop:10,
    color:'#fff',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 8,
  },
  button: {
    width:'100%',
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
    padding: 10,
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
