import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PlaceOrderScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#fddd00', '#ff6f61']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/149333196/vector/car-mechanic.jpg?s=612x612&w=0&k=20&c=p8MycJhqhnWOFEn32VnbAnAkQTFsOPvOs6e7cq3aEHM=' }} // Replace with your logo URL
          style={styles.logo}
        />
        <View style={styles.section}>
          <Text style={styles.label}>Service Type</Text>
          <View style={styles.row}>
            <Text style={styles.value}>General Service</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.label}>Vehicle</Text>
          <Text style={styles.value}>Bajaj Boxer 100</Text>
          <Text style={styles.subValue}>643333</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>
            Noida, 21, C Block, Sector 59, Noida, Uttar Pradesh 201301, India
          </Text>
          <TouchableOpacity style={styles.couponRow}>
            <Text style={styles.applyCouponText}>Apply Coupon</Text>
            <Text style={styles.arrow}>{">"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.label}>Total Servicing Charges</Text>
          <Text style={styles.value}>₹ 999</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Inspection Charges</Text>
          <Text style={styles.value}>₹ 0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Discount Applied</Text>
          <Text style={styles.value}>₹ 0</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.totalAmountLabel}>Total Amount</Text>
          <Text style={styles.totalAmountValue}>₹ 999</Text>
          <Text style={styles.note}>
            (Including engine oil and complimentary cleaning)
          </Text>
        </View>

        <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('BookingSucessFull')}>
          <Text style={styles.buttonText}>Place Your Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  section: {
    marginBottom: 12,  // Reduced margin
  },
  label: {
    fontSize: 14,  // Reduced font size
    fontFamily: 'Poppins-SemiBold',
    color: '#a52a2a', // Dark red color for labels
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: 12,  // Reduced font size
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 6,  // Reduced margin
  },
  subValue: {
    fontSize: 10,  // Reduced font size
    color: '#777',
    fontFamily: 'Poppins-Regular',
  },
  couponRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,  // Reduced margin
  },
  applyCouponText: {
    fontSize: 14,  // Reduced font size
    color: '#a52a2a',
    fontFamily: 'Poppins-Regular',
  },
  totalAmountLabel: {
    fontSize: 16,  // Reduced font size
    fontFamily: 'Poppins-Regular',
    color: '#a52a2a',
  },
  totalAmountValue: {
    fontSize: 16,  // Reduced font size
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  note: {
    fontSize: 12,  // Reduced font size
    color: '#777',
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,  // Reduced padding
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,  // Reduced margin
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,  // Reduced font size
    fontWeight: 'bold',
  },
});

export default PlaceOrderScreen;
