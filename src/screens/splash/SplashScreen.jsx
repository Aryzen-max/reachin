import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
         colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <StatusBar backgroundColor={'#4c669f'} barStyle="dark-content" />
        <View style={styles.content}>
          <Image
            source={{ uri: 'https://st2.depositphotos.com/3682225/11228/v/450/depositphotos_112288198-stock-illustration-automotive-repair-icon-car-service.jpg' }}
            style={styles.logo}
            resizeMode='contain'
          />
          <Text style={styles.text}>Welcome to Reach In</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-BlackItalic',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  version: {
    position:'absolute',
    bottom:10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SplashScreen;
