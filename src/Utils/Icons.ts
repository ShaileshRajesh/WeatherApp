import {CDN_ASSERT_URL} from 'react-native-dotenv';

export const ICONS = {
  APP_LOGO: 'appLogo.jpg',
  BLUE_BACKGROUND: 'blueBackground.png',
  DROPLETS: 'droplets.png',
  WALKING_IN_RAIN: 'walking_in_rain.png',
  CLEAR_MAIL: 'clearMail.png',
  CLEAR_EYE: 'clearEye.png',
  SUN: 'sun.png',
  MENU: 'menu.png',
  LOCATION: 'location.png',
  SEARCH: 'search.png',
  WEATHER_CLEAR: 'weatherClear.png',
  SUCCESS: 'success.png',
  WARNING: 'warning.png',
  SETTINGS: 'settings.png',
  LOGOUT: 'logout.png',
  CLEAR: 'clear.png',
};

export const constructCdnUrl = (name: string) => `${CDN_ASSERT_URL}${name}`;
