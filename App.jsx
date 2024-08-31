import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    
    <NavigationContainer>
       <StatusBar backgroundColor={'#4c669f'} barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
