import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import OtpScreen from '../screens/auth/OtpScreen';
import MyProfileScreen from '../screens/auth/MyProfileScreen';
import VehicleDetails from '../screens/auth/VehicleDetails';
import ProfileScreen from '../screens/menuDetails/ProfileScreen';
import ServiceHistoryScreen from '../screens/menuDetails/ServiceHistoryScreen';
import ManageVehicleScreen from '../screens/menuDetails/ManageVehicleScreen';
import HelpSupportScreen from '../screens/menuDetails/HelpSupportScreen';
import AboutUsScreen from '../screens/menuDetails/AboutUsScreen';
import PrivacyPolicyScreen from '../screens/menuDetails/PrivacyPolicyScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import SearchLocationScreen from '../screens/notification/SearchLocationScreen';



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
        <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
           <Stack.Screen
      name="ServiceHistoryScreen"
      component={ServiceHistoryScreen}
      options={{ headerShown: false }}
    />
             <Stack.Screen
      name="ManageVehicleScreen"
      component={ManageVehicleScreen}
      options={{ headerShown: false }}
    />
               <Stack.Screen
      name="HelpSupportScreen"
      component={HelpSupportScreen}
      options={{ headerShown: false }}
    />
                   <Stack.Screen
      name="AboutUsScreen"
      component={AboutUsScreen}
      options={{ headerShown: false }}
    />
                       <Stack.Screen
      name="PrivacyPolicyScreen"
      component={PrivacyPolicyScreen}
      options={{ headerShown: false }}
    />
                           <Stack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
      options={{ headerShown: false }}
    />
                               <Stack.Screen
      name="SearchLocationScreen"
      component={SearchLocationScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
