import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import {SENTRY_URL} from 'react-native-dotenv';
import AppNavigator from './src/Navigation/AppNavigator';

Sentry.init({
  dsn: SENTRY_URL,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
