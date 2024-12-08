import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import SuccessScreen from './src/Screens/SuccessScreen';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://5d2d640a97c6b8e0dc97a45dc87f8baf@o4508433665556480.ingest.us.sentry.io/4508433668702208',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        <Stack.Screen name="successScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
