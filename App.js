import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import SpaceCraft from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

