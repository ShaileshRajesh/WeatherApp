// src/Navigation/AppStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../Utils/Constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTES.FORECAST_SCREEN} component={DrawerNavigator} />
  </Stack.Navigator>
);

export default AppStack;
