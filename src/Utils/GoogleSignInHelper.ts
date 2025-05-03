import {
  GoogleSignin,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import {log} from './LogHelper';

export const googleSignIn = async (): Promise<{status: boolean; data: any}> => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      return {status: true, data: response.data};
    } else {
      log.info('sign in was cancelled by user');
      return {status: false, data: null};
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          log.error('operation already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          log.error('play services not available');
          break;
        case statusCodes.SIGN_IN_CANCELLED:
          log.error('sign in cancelled');
          break;
        case statusCodes.SIGN_IN_REQUIRED:
          log.error('sign in required');
          break;
        default:
          log.error('some other error happened');
      }
    } else {
      log.error('an error not related to google sign in occurred');
    }
    return {status: false, data: null};
  }
};
