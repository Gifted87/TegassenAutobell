import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Config from './config.tsx';
import HomePage from './home.tsx';
import SetAlarm from './setAlarm.tsx';

const App = () => {
  const Stack = createNativeStackNavigator();
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SetAlarm"
          component={SetAlarm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
