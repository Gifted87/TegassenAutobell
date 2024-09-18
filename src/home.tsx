import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions} from '@react-navigation/native';

export default function HomePage({navigation, route}) {
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');

  const ConfigPage = () => {
    console.log('Button pressed!');
    navigation.dispatch(StackActions.push('Config'));
  };

  return (
    <View
      style={{
        backgroundColor: '#23232C',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: horizontalScale(30),
        }}>
        <TouchableOpacity onPress={ConfigPage}>
          <View
            style={{
              backgroundColor: '#17181C',
              flex: 0.1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: moderateScale(20),
              marginHorizontal: moderateScale(10),
              borderRadius: moderateScale(10),
            }}>
            <Icon name="wrench-clock" color={'#fff'} size={25}></Icon>
            <Text style={{color: '#fff'}}>Configuration</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}
