// src/Navigation/AppNavigator.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import AuthStack from './AuthStack';
import {ROUTES} from '../Utils/Constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={ROUTES.DRAWER_SCREEN} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
