// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Homescreen.js';
import Home2 from './components/Home2.js';

const Stack = createNativeStackNavigator();

function bootSrn() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false, }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default bootSrn;