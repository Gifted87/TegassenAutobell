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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        updateState(
          day,
          alarm,
          time.toLocaleTimeString().substring(0, 5),
          tone.toUpperCase(),
          true,
        );
        navigation.dispatch(StackActions.push('Config'));
      })
      .catch(error => console.error('Error:', error));
  };

  const updateState = (day, alarm, time, tone, switchState) => {
    if (day == 'mon') {
      if (alarm == '1') {
        const MonAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            MonAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const MonAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            MonAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const MonAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            MonAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const MonAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            MonAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const MonAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            MonAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'tue') {
      if (alarm == '1') {
        const TueAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            TueAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const TueAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            TueAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const TueAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            TueAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const TueAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            TueAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const TueAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            TueAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'wed') {
      if (alarm == '1') {
        const WedAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            WedAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const WedAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            WedAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const WedAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            WedAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const WedAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            WedAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const WedAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            WedAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'thu') {
      if (alarm == '1') {
        const thuAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            thuAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const thuAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            thuAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const thuAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            thuAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const thuAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            thuAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const thuAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            thuAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'fri') {
      if (alarm == '1') {
        const FriAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            FriAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const FriAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            FriAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const FriAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            FriAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const FriAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            FriAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const FriAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            FriAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'sat') {
      if (alarm == '1') {
        const SatAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SatAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const SatAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SatAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const SatAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SatAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const SatAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SatAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const SatAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SatAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }
    if (day == 'sun') {
      if (alarm == '1') {
        const SunAlarmData1 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SunAlarmData1,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }

      if (alarm == '2') {
        const SunAlarmData2 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SunAlarmData2,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '3') {
        const SunAlarmData3 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SunAlarmData3,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '4') {
        const SunAlarmData4 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SunAlarmData4,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
      if (alarm == '5') {
        const SunAlarmData5 = {
          time: time,
          alarm: tone,
          switch: switchState,
        };

        try {
          const alarmData = {
            SunAlarmData5,
          };

          for (const key in alarmData) {
            AsyncStorage.setItem(key, JSON.stringify(alarmData[key]));
          }
          console.log('Alarm data stored successfully!');
        } catch (error) {
          console.error('Failed to store alarm data:', error);
        }
      }
    }

    // Save the updated state to AsyncStorage
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
        <ActivityIndicator size="large" color="#00ff00" />
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: moderateScale(16),
            color: '#00ff00',
            marginTop: verticalScale(20),
          }}>
          Sending Data!
        </Text>
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
