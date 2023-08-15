import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasketBallScreen from './BasketBallScreen'; // Update the path accordingly
import AccountScreen from './Account'; // Update the path accordingly

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BasketBall">
        <Stack.Screen name="BasketBall" component={BasketBallScreen} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
