import React, {useState} from 'react';
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

export default function SetAlarm({navigation}) {
  StatusBar.setBackgroundColor('#23232C');
  StatusBar.setBarStyle('light-content');

  // Navigation function to config page
  const ConfigPage = () => {
    console.log('Navigating to Config Page');
    navigation.dispatch(StackActions.push('Config'));
  };

  // States for time, language selection, and picker visibility
  const [time, setTime] = useState(new Date());
  const [Texttime, setTextTime] = useState('Select Time');
  const [selectedLanguage, setSelectedLanguage] = useState('java'); // Default selection
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
            </Picker>
          </View>

          <Button
            label={'Apply'}
            size={Button.sizes.large}
            backgroundColor={'#17181C'}
            onPress={() => setIsLoading(true)}
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
