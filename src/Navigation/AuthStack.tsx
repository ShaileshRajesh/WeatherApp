import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SuccessScreen from '../Screens/SuccessScreen';
import {ROUTES} from '../Utils/Constants';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTES.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={ROUTES.SUCCESS_SCREEN} component={SuccessScreen} />
  </Stack.Navigator>
);

export default AuthStack;
