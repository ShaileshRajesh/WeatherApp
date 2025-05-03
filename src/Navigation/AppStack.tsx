// src/Navigation/AppStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForecastScreen from '../Screens/ForecastScreen';
import {ROUTES} from '../Utils/Constants';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTES.FORECAST_SCREEN} component={ForecastScreen} />
  </Stack.Navigator>
);

export default AppStack;
