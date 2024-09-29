import React, {useState, useEffect} from 'react';
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
  Image,
  Alert,
  Platform,
  BackHandler,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

export default function HomePage({navigation, route}) {
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');

  const [isConnected, setIsConnected] = useState(false);
  const [networkName, setNetworkName] = useState('');

  const ConfigPage = () => {
    console.log('Button pressed!');
    navigation.dispatch(StackActions.push('Config'));
  };

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.type === 'wifi' && state.isConnected) {
        const ipAddress = state.details.ipAddress;
        console.log(state.details);
        if (ipAddress == '192.168.4.2') {
          setIsConnected(true);
          setNetworkName(ipAddress);
          console.log(ipAddress, ' Connected Successfully');
        } else {
          setIsConnected(false);
          console.log(ipAddress);
          showNoInternetAlert();
          setNetworkName('');
        }
      } else {
        setIsConnected(false);
        showNoInternetAlert();
        setNetworkName('');
      }
    });

    // Unsubscribe on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const showNoInternetAlert = () => {
    setTimeout(() => {
      Alert.alert(
        'Error! Not connected to Autobell',
        'You need to to be connected to the Autobell to use this app. The app will close now.',
        [
          {text: 'OK', onPress: () => closeApp()},
          {
            text: 'Retry',
            onPress: () => navigation.dispatch(StackActions.replace('Home')),
          },
        ],
        {cancelable: false},
      );
    }, 5000);
  };

  const closeApp = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      Alert.alert('Info', 'Please close the app manually.');
    }
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: horizontalScale(30),
        }}>
        <TouchableOpacity onPress={ConfigPage} style={{flex: 0.16}}>
          <View
            style={{
              backgroundColor: '#17181C',
              flex: 1,
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

        <Image
          style={{
            width: horizontalScale(250),
            height: verticalScale(80),
            marginTop: verticalScale(20),
          }}
          source={require('../assets/logo/logo.png')}
        />
        <Text
          style={{
            fontFamily: 'OpenSans-Light',
            fontSize: moderateScale(12),
            color: '#00ff00',
            marginTop: verticalScale(10),
          }}>
          Tegassen Autobell 1.0v
        </Text>
      </View>
      <View></View>
    </View>
  );
}
