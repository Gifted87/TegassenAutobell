import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
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
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../Metrics.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions} from '@react-navigation/native';

const Config = () => {
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

  const [ThursAlarm1, setThursAlarm1] = useState(false);
  const [ThursAlarm2, setThursAlarm2] = useState(false);
  const [ThursAlarm3, setThursAlarm3] = useState(false);
  const [ThursAlarm4, setThursAlarm4] = useState(false);
  const [ThursAlarm5, setThursAlarm5] = useState(false);

  const toggleThursAlarm1 = () =>
    setThursAlarm1(previousState => !previousState);
  const toggleThursAlarm2 = () =>
    setThursAlarm2(previousState => !previousState);
  const toggleThursAlarm3 = () =>
    setThursAlarm3(previousState => !previousState);
  const toggleThursAlarm4 = () =>
    setThursAlarm4(previousState => !previousState);
  const toggleThursAlarm5 = () =>
    setThursAlarm5(previousState => !previousState);

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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
            THURSDAY
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={ThursAlarm1 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleThursAlarm1}
              value={ThursAlarm1}
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={ThursAlarm2 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleThursAlarm2}
              value={ThursAlarm2}
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={ThursAlarm3 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleThursAlarm3}
              value={ThursAlarm3}
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={ThursAlarm4 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleThursAlarm4}
              value={ThursAlarm4}
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
            <Switch
              trackColor={{false: '#17181C', true: '#8AC186'}}
              thumbColor={ThursAlarm5 ? '#17181C' : '#8AC186'}
              ios_backgroundColor="#17181C"
              onValueChange={toggleThursAlarm5}
              value={ThursAlarm5}
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
              00:00AM
            </Text>
            <Text
              style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: moderateScale(15),
                color: '#17181C',
              }}>
              ANGELUS
            </Text>
            <Icon name="wrench-clock" color={'#17181C'} size={25}></Icon>
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
};

export default Config;
