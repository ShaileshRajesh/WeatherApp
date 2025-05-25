import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../src/Screens/SplashScreen';

jest.mock('react-native-gesture-handler');

test('renders splash screen', () => {
  const tree = render(
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
