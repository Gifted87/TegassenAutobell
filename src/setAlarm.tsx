import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '../Metrics.js'; // Assuming this is your custom scaling utility
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {StackActions} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {Button, Colors} from 'react-native-ui-lib';

export default function SetAlarm({navigation, route}) {
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');

  useEffect(() => {
    const {alarm} = route.params;
    setDay(alarm.substring(0, 3).toLowerCase());
    setAlarm(alarm.substring(alarm.length - 1));
    console.log(
      `Setup Page Loaded!, Day: ${alarm
        .substring(0, 3)
        .toLowerCase()}, alarm: ${alarm.substring(alarm.length - 1)}`,
    );
  });

  // Navigation function to config page
  const sendAlarm = (time, tone, day, alarm) => {
    console.log(
      `Send Alarm Button pressed!, Time: ${time}, Tone: ${tone}, Day: ${day}, Alarm: ${alarm}`,
    );
    setSendable(
      day +
        alarm +
        time.toLocaleTimeString().substring(0, 5) +
        tonePicker(tone) +
        '1',
    ); //the last +'1' is the switch that turns on the new alarm
    console.log(
      `Sendable: ${
        day +
        alarm +
        time.toLocaleTimeString().substring(0, 5) +
        tonePicker(tone) +
        '1'
      }`,
    );

    fetch(
      `http://192.168.4.1//N${day}${alarm}${time
        .toLocaleTimeString()
        .substring(0, 5)}${tonePicker(tone)}1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html',
        },
      },
    )
      .then(() => {
        setIsLoading(false);
        navigation.dispatch(StackActions.push('Config'));
      })
      .catch(error => console.error('Error:', error));
  };

  const tonePicker = tone => {
    switch (tone) {
      case 'bell':
        return '1';
      case 'angelus':
        return '2';
      case 'divine_mercy':
        return '3';
      case 'regina':
        return '4';
      default:
        return '1';
    }
  };

  const [sendable, setSendable] = useState('');
  // States for time, language selection, and picker visibility
  const [day, setDay] = useState('Mon');
  const [alarm, setAlarm] = useState('1');
  const [time, setTime] = useState(new Date());
  const [Texttime, setTextTime] = useState('Select Time');
  const [selectedLanguage, setSelectedLanguage] = useState('Bell'); // Default selection
  const [showPicker, setShowPicker] = useState(false); // For DateTimePicker visibility
  const [isLoading, setIsLoading] = useState(false);

  // Toggle DateTimePicker visibility
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  if (!isLoading) {
    return (
      <View
        style={{
          backgroundColor: '#23232C',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Set Alarm</Text>

          <TouchableOpacity onPress={togglePicker}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: moderateScale(15),
                width: horizontalScale(200),
                borderRadius: moderateScale(15),
                marginBottom: verticalScale(30),
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  fontSize: moderateScale(16),
                  color: '#17181C',
                }}>
                {time.toLocaleTimeString()}
              </Text>
            </View>
          </TouchableOpacity>
          <>
            {showPicker && (
              <RNDateTimePicker
                display="spinner"
                mode="time"
                value={time}
                onChange={(event, selectedTime) => {
                  setTime(selectedTime || time);
                  setShowPicker(false); // Close picker after selecting time
                }}
              />
            )}
          </>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedLanguage}
              style={styles.picker}
              onValueChange={itemValue => setSelectedLanguage(itemValue)}>
              <Picker.Item label="Bell" value="bell" />
              <Picker.Item label="Angelus" value="angelus" />
              <Picker.Item label="Divine Mercy" value="divine_mercy" />
              <Picker.Item label="Regina Caeli" value="regina" />
            </Picker>
          </View>

          <Button
            label={'Apply'}
            size={Button.sizes.large}
            backgroundColor={'#17181C'}
            onPress={() => {
              setIsLoading(true);
              sendAlarm(time, selectedLanguage, day, alarm);
            }}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: '#23232C',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#333333" />
          </View>
        </View>
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#8AC186',
    padding: moderateScale(20),
    borderRadius: moderateScale(15),
    width: horizontalScale(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: moderateScale(15),
    color: '#17181C',
    paddingBottom: verticalScale(15),
  },
  pickerContainer: {
    width: 200,
    height: 50,
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: verticalScale(40),
    justifyContent: 'center',
    borderRadius: moderateScale(15),
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: moderateScale(15),
  },
  pickerLabel: {
    fontFamily: 'OpenSans-Medium',
    fontSize: moderateScale(15),
    color: '#17181C',
    paddingBottom: verticalScale(15),
  },
  picker: {
    fontFamily: 'OpenSans-Medium',
    fontSize: moderateScale(15),
    color: '#17181C',
  },
  timeText: {
    color: '#FFF',
    marginVertical: 20,
  },
});
