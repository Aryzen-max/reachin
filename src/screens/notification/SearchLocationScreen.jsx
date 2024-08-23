import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SearchLocationScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  const allLocations = [
    'New Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Surat',
    // Add more locations as needed
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query) {
      const filteredData = allLocations.filter((location) =>
        location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLocations(filteredData);
    } else {
      setFilteredLocations([]);
    }
  };

  return (
    <LinearGradient
      colors={['#e0e0e0', '#f5f5f5']} // Same gradient colors as used in other screens
      style={styles.container}
    >
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a location"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredLocations.length > 0 ? filteredLocations : allLocations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.locationItem}>
            <Text style={styles.locationText}>{item}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    marginBottom: 16,
  },
  locationItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2, // Shadow for Android
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchLocationScreen;
