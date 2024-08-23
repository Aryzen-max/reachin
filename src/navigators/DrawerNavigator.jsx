import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';
import DrawerContent from './DrawerContent';
import CustomHeader from './CustomHeader';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen 
      name="HomeScreen" 
      component={HomeScreen}  
      options={{
        headerTitle: (props) => <CustomHeader {...props} />, // Custom header with title and icons
      }} 
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
