import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NotificationScreen = () => {
  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Notifications</Text>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationTitle}>Service Reminder</Text>
          <Text style={styles.notificationText}>
            Your car service is scheduled for tomorrow at 10 AM. Please ensure to be on time.
          </Text>
          <Text style={styles.notificationDate}>Aug 21, 2024</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationTitle}>Payment Confirmation</Text>
          <Text style={styles.notificationText}>
            Your payment of $200 for the car repair service has been successfully processed.
          </Text>
          <Text style={styles.notificationDate}>Aug 19, 2024</Text>
        </View>

        <View style={styles.notificationItem}>
          <Text style={styles.notificationTitle}>Promotional Offer</Text>
          <Text style={styles.notificationText}>
            Get 20% off on your next service. Use code SAVE20. Offer valid till the end of the month.
          </Text>
          <Text style={styles.notificationDate}>Aug 15, 2024</Text>
        </View>

        {/* Add more notifications as needed */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    color:'#000',
    textAlign:'center'
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2, // For shadow on Android
  },
  notificationTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color:'#000',
  },
  notificationText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color:'grey'
  },
  notificationDate: {
    fontSize: 14,
    lineHeight: 20,

    fontFamily: 'Poppins-Regular',
  },
});

export default NotificationScreen;
