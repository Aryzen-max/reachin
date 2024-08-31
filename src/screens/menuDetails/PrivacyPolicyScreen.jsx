import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrivacyPolicyScreen = () => {
  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.text}>
          Welcome to our Privacy Policy. Your privacy is critically important to us.
        </Text>
        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.text}>
          We collect various types of information in connection with the services we provide,
          including:
        </Text>
        <Text style={styles.text}>
          - Personal identification information (Name, email address, phone number, etc.)
          - Log data (Your device’s IP address, browser type, and more)
        </Text>
        
        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          We use the information we collect in various ways, including to:
        </Text>
        <Text style={styles.text}>
          - Provide, operate, and maintain our website and services
          - Improve, personalize, and expand our website and services
        </Text>
        
        <Text style={styles.sectionTitle}>3. Sharing Your Information</Text>
        <Text style={styles.text}>
          We may share the information we collect with third parties for the following purposes:
        </Text>
        <Text style={styles.text}>
          - To comply with legal obligations
          - To protect and defend our rights and property
        </Text>
        
        <Text style={styles.sectionTitle}>4. Security of Your Information</Text>
        <Text style={styles.text}>
          We take the security of your information seriously and use various measures to protect it.
        </Text>
        
        <Text style={styles.sectionTitle}>5. Changes to This Privacy Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time, and we will notify you of any changes
          by posting the new Privacy Policy on our website.
        </Text>
        
        <Text style={styles.sectionTitle}>6. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about this Privacy Policy, please contact us at:
        </Text>
        <Text style={styles.text}>Email: support@mechanicservice.com</Text>
        <Text style={styles.text}>Phone: +1 234 567 890</Text>
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
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 10,
    textAlign:'center',
    color:'#fff'
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 16,
    marginBottom: 8,
     color:'#fff'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
     color:'yellow'
  },
});

export default PrivacyPolicyScreen;
