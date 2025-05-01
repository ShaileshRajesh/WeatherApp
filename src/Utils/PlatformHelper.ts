import {Platform} from 'react-native';

/**
 * Checks if the current platform is Android.
 *
 * @returns Returns true if the platform is Android, otherwise false
 */
export const isAndroid = () => Platform.OS === 'android';

/**
 * Checks if the current platform is iOS.
 *
 * @returns Returns true if the platform is iOS, otherwise false.
 */
export const isIos = () => Platform.OS === 'ios';
