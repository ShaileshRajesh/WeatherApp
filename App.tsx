import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import SuccessScreen from './src/Screens/SuccessScreen';
import ForecastScreen from './src/Screens/ForecastScreen';
import * as Sentry from '@sentry/react-native';
import LoginScreen from './src/Screens/LoginScreen';
import {SENTRY_URL} from 'react-native-dotenv';
import useAuth from './src/CustomHooks/useAuth';

Sentry.init({
  dsn: SENTRY_URL,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {isUserLoggedIn} = useAuth();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isUserLoggedIn ? (
        <>
          <Stack.Screen name="splashScreen" component={SplashScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="successScreen" component={SuccessScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="forecastScreen" component={ForecastScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
