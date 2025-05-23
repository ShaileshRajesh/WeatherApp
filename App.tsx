import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import {SENTRY_URL} from 'react-native-dotenv';
import AppNavigator from './src/Navigation/AppNavigator';
import useNetInfoStatus from './src/CustomHooks/useNetInfoStatus';
import {useUiStore} from './src/Store';
import Modal from './src/Components/Modal';

Sentry.init({
  dsn: SENTRY_URL,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const App = () => {
  const {setModal} = useUiStore();
  const isNetworkConnected = useNetInfoStatus();

  useEffect(() => {
    if (isNetworkConnected === false) {
      setModal({
        iconName: 'warning',
        message: 'No internet connection. Please check your network',
        buttonInfo: {
          primaryButtonName: 'OK',
          primaryButtonColor: 'blue',
          secondaryButtonName: '',
          secondaryButtonColor: '',
        },
      });
    }
  }, [isNetworkConnected, setModal]);

  return (
    <NavigationContainer>
      <Modal />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
