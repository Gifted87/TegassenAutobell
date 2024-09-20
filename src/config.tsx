import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Switch,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  //   Modal,
  Pressable,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions} from '@react-navigation/native';
import {Modal} from 'react-native-ui-lib';

export default function Config({navigation, route}) {
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');

  const [MonAlarm1, setMonAlarm1] = useState(false);
  const [MonAlarm2, setMonAlarm2] = useState(false);
  const [MonAlarm3, setMonAlarm3] = useState(false);
  const [MonAlarm4, setMonAlarm4] = useState(false);
  const [MonAlarm5, setMonAlarm5] = useState(false);

  const toggleMonAlarm1 = () => setMonAlarm1(previousState => !previousState);
  const toggleMonAlarm2 = () => setMonAlarm2(previousState => !previousState);
  const toggleMonAlarm3 = () => setMonAlarm3(previousState => !previousState);
  const toggleMonAlarm4 = () => setMonAlarm4(previousState => !previousState);
  const toggleMonAlarm5 = () => setMonAlarm5(previousState => !previousState);

  const [TueAlarm1, setTueAlarm1] = useState(false);
  const [TueAlarm2, setTueAlarm2] = useState(false);
  const [TueAlarm3, setTueAlarm3] = useState(false);
  const [TueAlarm4, setTueAlarm4] = useState(false);
  const [TueAlarm5, setTueAlarm5] = useState(false);

  const toggleTueAlarm1 = () => setTueAlarm1(previousState => !previousState);
  const toggleTueAlarm2 = () => setTueAlarm2(previousState => !previousState);
  const toggleTueAlarm3 = () => setTueAlarm3(previousState => !previousState);
  const toggleTueAlarm4 = () => setTueAlarm4(previousState => !previousState);
  const toggleTueAlarm5 = () => setTueAlarm5(previousState => !previousState);

  const [WedAlarm1, setWedAlarm1] = useState(false);
  const [WedAlarm2, setWedAlarm2] = useState(false);
  const [WedAlarm3, setWedAlarm3] = useState(false);
  const [WedAlarm4, setWedAlarm4] = useState(false);
  const [WedAlarm5, setWedAlarm5] = useState(false);

  const toggleWedAlarm1 = () => setWedAlarm1(previousState => !previousState);
  const toggleWedAlarm2 = () => setWedAlarm2(previousState => !previousState);
  const toggleWedAlarm3 = () => setWedAlarm3(previousState => !previousState);
  const toggleWedAlarm4 = () => setWedAlarm4(previousState => !previousState);
  const toggleWedAlarm5 = () => setWedAlarm5(previousState => !previousState);

  const [thuAlarm1, setthuAlarm1] = useState(false);
  const [thuAlarm2, setthuAlarm2] = useState(false);
  const [thuAlarm3, setthuAlarm3] = useState(false);
  const [thuAlarm4, setthuAlarm4] = useState(false);
  const [thuAlarm5, setthuAlarm5] = useState(false);

  const togglethuAlarm1 = () => setthuAlarm1(previousState => !previousState);
  const togglethuAlarm2 = () => setthuAlarm2(previousState => !previousState);
  const togglethuAlarm3 = () => setthuAlarm3(previousState => !previousState);
  const togglethuAlarm4 = () => setthuAlarm4(previousState => !previousState);
  const togglethuAlarm5 = () => setthuAlarm5(previousState => !previousState);

  const [FriAlarm1, setFriAlarm1] = useState(false);
  const [FriAlarm2, setFriAlarm2] = useState(false);
  const [FriAlarm3, setFriAlarm3] = useState(false);
  const [FriAlarm4, setFriAlarm4] = useState(false);
  const [FriAlarm5, setFriAlarm5] = useState(false);

  const toggleFriAlarm1 = () => setFriAlarm1(previousState => !previousState);
  const toggleFriAlarm2 = () => setFriAlarm2(previousState => !previousState);
  const toggleFriAlarm3 = () => setFriAlarm3(previousState => !previousState);
  const toggleFriAlarm4 = () => setFriAlarm4(previousState => !previousState);
  const toggleFriAlarm5 = () => setFriAlarm5(previousState => !previousState);

  const [SatAlarm1, setSatAlarm1] = useState(false);
  const [SatAlarm2, setSatAlarm2] = useState(false);
  const [SatAlarm3, setSatAlarm3] = useState(false);
  const [SatAlarm4, setSatAlarm4] = useState(false);
  const [SatAlarm5, setSatAlarm5] = useState(false);

  const toggleSatAlarm1 = () => setSatAlarm1(previousState => !previousState);
  const toggleSatAlarm2 = () => setSatAlarm2(previousState => !previousState);
  const toggleSatAlarm3 = () => setSatAlarm3(previousState => !previousState);
  const toggleSatAlarm4 = () => setSatAlarm4(previousState => !previousState);
  const toggleSatAlarm5 = () => setSatAlarm5(previousState => !previousState);

  const [SunAlarm1, setSunAlarm1] = useState(false);
  const [SunAlarm2, setSunAlarm2] = useState(false);
  const [SunAlarm3, setSunAlarm3] = useState(false);
  const [SunAlarm4, setSunAlarm4] = useState(false);
  const [SunAlarm5, setSunAlarm5] = useState(false);

  const toggleSunAlarm1 = () => setSunAlarm1(previousState => !previousState);
  const toggleSunAlarm2 = () => setSunAlarm2(previousState => !previousState);
  const toggleSunAlarm3 = () => setSunAlarm3(previousState => !previousState);
  const toggleSunAlarm4 = () => setSunAlarm4(previousState => !previousState);
  const toggleSunAlarm5 = () => setSunAlarm5(previousState => !previousState);

  const [isDialogVisible, setDialogVisible] = useState(false);
  const toggleDialogVisibility = () => setDialogVisible(!isDialogVisible);

  const setAlarm = alarm => {
    console.log(`${alarm}Set Alarm Button pressed!`);
    navigation.dispatch(StackActions.push('SetAlarm', {alarm: alarm}));
  };

  const [MonAlarmData1, setMonAlarmData1] = useState({
    time: '00:00AM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [MonAlarmData2, setMonAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [MonAlarmData3, setMonAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [MonAlarmData4, setMonAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [MonAlarmData5, setMonAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [TueAlarmData1, setTueAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [TueAlarmData2, setTueAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [TueAlarmData3, setTueAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [TueAlarmData4, setTueAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [TueAlarmData5, setTueAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [WedAlarmData1, setWedAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [WedAlarmData2, setWedAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [WedAlarmData3, setWedAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [WedAlarmData4, setWedAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [WedAlarmData5, setWedAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [thuAlarmData1, setthuAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [thuAlarmData2, setthuAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [thuAlarmData3, setthuAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [thuAlarmData4, setthuAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [thuAlarmData5, setthuAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [FriAlarmData1, setFriAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [FriAlarmData2, setFriAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [FriAlarmData3, setFriAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [FriAlarmData4, setFriAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [FriAlarmData5, setFriAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [SatAlarmData1, setSatAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SatAlarmData2, setSatAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SatAlarmData3, setSatAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SatAlarmData4, setSatAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SatAlarmData5, setSatAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  const [SunAlarmData1, setSunAlarmData1] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SunAlarmData2, setSunAlarmData2] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SunAlarmData3, setSunAlarmData3] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SunAlarmData4, setSunAlarmData4] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });
  const [SunAlarmData5, setSunAlarmData5] = useState({
    time: '00:00PM',
    alarm: 'ANGELUS',
    switch: false,
  });

  return (
    <ScrollView>
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
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
            marginTop: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            MONDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {MonAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {MonAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('MonAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={MonAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleMonAlarm1}
              value={MonAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {MonAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {MonAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('MonAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={MonAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleMonAlarm2}
              value={MonAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {MonAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {MonAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('MonAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={MonAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleMonAlarm3}
              value={MonAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {MonAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {MonAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('MonAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={MonAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleMonAlarm4}
              value={MonAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {MonAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {MonAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('MonAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={MonAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleMonAlarm5}
              value={MonAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            TUESDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {TueAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {TueAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('TueAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={TueAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleTueAlarm1}
              value={TueAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {TueAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {TueAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('TueAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={TueAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleTueAlarm2}
              value={TueAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {TueAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {TueAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('TueAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={TueAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleTueAlarm3}
              value={TueAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {TueAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {TueAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('TueAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={TueAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleTueAlarm4}
              value={TueAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {TueAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {TueAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('TueAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={TueAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleTueAlarm5}
              value={TueAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            WEDNESDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {WedAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {WedAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('WedAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={WedAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleWedAlarm1}
              value={WedAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {WedAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {WedAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('WedAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={WedAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleWedAlarm2}
              value={WedAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {WedAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {WedAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('WedAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={WedAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleWedAlarm3}
              value={WedAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {WedAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {WedAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('WedAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={WedAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleWedAlarm4}
              value={WedAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {WedAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {WedAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('WedAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={WedAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleWedAlarm5}
              value={WedAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            thuDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {thuAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {thuAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('thuAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={thuAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={togglethuAlarm1}
              value={thuAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {thuAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {thuAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('thuAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={thuAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={togglethuAlarm2}
              value={thuAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {thuAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {thuAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('thuAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={thuAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={togglethuAlarm3}
              value={thuAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {thuAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {thuAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('thuAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={thuAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={togglethuAlarm4}
              value={thuAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {thuAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {thuAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('thuAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={thuAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={togglethuAlarm5}
              value={thuAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            FRIDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {FriAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {FriAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('FriAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={FriAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleFriAlarm1}
              value={FriAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {FriAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {FriAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('FriAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={FriAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleFriAlarm2}
              value={FriAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {FriAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {FriAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('FriAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={FriAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleFriAlarm3}
              value={FriAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {FriAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {FriAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('FriAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={FriAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleFriAlarm4}
              value={FriAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {FriAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {FriAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('FriAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={FriAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleFriAlarm5}
              value={FriAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            SATURDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SatAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SatAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SatAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SatAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSatAlarm1}
              value={SatAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SatAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SatAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SatAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SatAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSatAlarm2}
              value={SatAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SatAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SatAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SatAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SatAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSatAlarm3}
              value={SatAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SatAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SatAlarmData4.time}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SatAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SatAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSatAlarm4}
              value={SatAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SatAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SatAlarmData5.time}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SatAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SatAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSatAlarm5}
              value={SatAlarm5}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#8AC186',
            padding: moderateScale(20),
            borderRadius: moderateScale(15),
            width: 320,
            marginBottom: verticalScale(30),
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Medium',
              fontSize: moderateScale(15),
              color: '#17181C',
              paddingBottom: verticalScale(15),
            }}>
            SUNDAY
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SunAlarmData1.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SunAlarmData1.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SunAlarm1')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SunAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSunAlarm1}
              value={SunAlarm1}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SunAlarmData2.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SunAlarmData2.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SunAlarm2')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SunAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSunAlarm2}
              value={SunAlarm2}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SunAlarmData3.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SunAlarmData3.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SunAlarm3')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SunAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSunAlarm3}
              value={SunAlarm3}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SunAlarmData4.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SunAlarmData4.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SunAlarm4')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SunAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSunAlarm4}
              value={SunAlarm4}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              padding: moderateScale(15),
              borderRadius: moderateScale(15),
              marginBottom: verticalScale(10),
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: moderateScale(25),
                color: '#17181C',
              }}>
              {SunAlarmData5.time}
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              {SunAlarmData5.alarm}
            </Text>
            <TouchableOpacity onPress={() => setAlarm('SunAlarm5')}>
              <Icon name="clock-edit" color={'#17181C'} size={25}></Icon>
            </TouchableOpacity>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={SunAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleSunAlarm5}
              value={SunAlarm5}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  modalContainer: {
    backgroundColor: '#ccc',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  modalView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  alert: {
    width: '100%',
    maxWidth: 300,
    margin: 48,
    elevation: 24,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  alertTitle: {
    margin: 24,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  alertMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    fontSize: 16,
    color: '#000',
  },
  alertButtonGroup: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 24,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  alertButton: {
    marginTop: 12,
    marginRight: 8,
    width: 100,
  },
});
