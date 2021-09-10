import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/Home';
import Template from '../pages/Template';
import Agreement from '../pages/Agreement';

const Stack = createNativeStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Templates" component={Template} />
      <Stack.Screen name="Agreements" component={Agreement} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
