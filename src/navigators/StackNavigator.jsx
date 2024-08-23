import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import MyProfileScreen from '../screens/auth/MyProfileScreen';
import VehicleDetails from '../screens/auth/VehicleDetails';


const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OtpScreen"
      component={OtpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MyProfileScreen"
      component={MyProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VehicleDetails"
      component={VehicleDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
