import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AboutUsScreen = () => {
  return (
    <LinearGradient
    colors={['#fddd00', '#ff6f61']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/149333196/vector/car-mechanic.jpg?s=612x612&w=0&k=20&c=p8MycJhqhnWOFEn32VnbAnAkQTFsOPvOs6e7cq3aEHM=' }} // Replace with your logo URL
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>Your Trusted Mechanic Service Provider</Text>
        <Text style={styles.description}>
          We are a team of highly skilled mechanics committed to providing top-notch services for all your vehicle needs. With years of experience in the industry, we specialize in a wide range of services, from routine maintenance to complex repairs.
        </Text>
        <Text style={styles.description}>
          Our mission is to ensure that every customer leaves with a vehicle that is running smoothly and safely. We believe in transparency, quality workmanship, and customer satisfaction.
        </Text>
        <Text style={styles.description}>
          Whether you need an oil change, brake repair, or engine diagnostics, our team is here to help. We use the latest tools and technology to diagnose and repair your vehicle efficiently, so you can get back on the road as soon as possible.
        </Text>
        <Text style={styles.subtitle}>Our Values</Text>
        <Text style={styles.description}>
          - **Integrity:** We believe in honest and transparent communication with our customers.
          - **Quality:** We are committed to delivering the highest quality of service.
          - **Customer Satisfaction:** Your satisfaction is our top priority.
          - **Innovation:** We stay up-to-date with the latest industry trends and technologies.
        </Text>
        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.description}>
          If you have any questions or need assistance, don't hesitate to reach out to us. We are always here to help you with your vehicle needs.
        </Text>
        <Text style={styles.contactInfo}>
          Phone: +1 234 567 890
        </Text>
        <Text style={styles.contactInfo}>
          Email: support@mechanicservice.com
        </Text>
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color:'#000',
    textAlign: 'center',
 
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color:'#000',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
  contactInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default AboutUsScreen;
