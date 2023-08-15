import React from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useHapticFeedback } from './useHapticFeedback'; // Import the custom hook
import HomeScreen from './HomeScreen';
import BasketBallScreen from './BasketBallScreen';
import TimerScreen from './TimerScreen';
import CheckListScreen from './CheckListScreen';
import AccountScreen from './Account';
//cd to thrivr ==> npx expo start


const Tab = createBottomTabNavigator();

export default function App() {
  const { triggerHapticFeedback } = useHapticFeedback();

  return (
    <NavigationContainer>
      <View style={styles.customTabContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#fb4000',
            tabBarStyle: {
              display: 'flex',
              backgroundColor: 'black',
              borderTopWidth: 0,
              borderRadius: 50,
              width:400,
              height: 90,
              left:7,
              bottom: 25,
            },
          }}
        >
         <Tab.Screen
          name="Basketball"
          component={BasketBallScreen}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/basketball.png')}
                style={{
                  width: size + 8,
                  height: size + 8,
                  top: 20,
                  left: 15,
                  tintColor: color,
                }}
              />
            ),
          }}
  listeners={({ navigation }) => ({
    tabPress: (e) => {
      triggerHapticFeedback();
      navigation.navigate('Basketball');
    },
  })}
/>
<Tab.Screen
  name="Timer"
  component={TimerScreen}
  options={{
    tabBarLabel: '',
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Image
        source={require('./assets/compass.png')}
        style={{
          width: size + 8,
          height: size + 8,
          top: 20,
          left: 5,
          tintColor: color,
        }}
      />
    ),
  }}
  listeners={({ navigation }) => ({
    tabPress: (e) => {
      triggerHapticFeedback({ intensity: 'low' }); // Adjust intensity here
      navigation.navigate('Timer');
    },
  })}
/>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/home.png')}
                  style={{
                    width: size + 8,
                    height: size + 8,
                    top: 20,
                    left: 2,
                    tintColor: color,
                  }}
                />
              ),
            }}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                triggerHapticFeedback();
                navigation.navigate('Home');
              },
            })}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/account.png')}
                  style={{
                    width: size + 8,
                    height: size + 8,
                    top: 20,
                    right: 10,
                    tintColor: color,
                  }}
                />
              ),
            }}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                triggerHapticFeedback();
                navigation.navigate('Account');
              },
            })}
          />
          <Tab.Screen
            name="Check List"
            component={CheckListScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require('./assets/check.png')}
                  style={{
                    width: size + 8,
                    height: size + 8,
                    top: 20,
                    right: 15,
                    tintColor: color,
                  }}
                />
              ),
            }}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                triggerHapticFeedback();
                navigation.navigate('Check List');
              },
            })}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customTabContainer: {
    flex: 1,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
});
