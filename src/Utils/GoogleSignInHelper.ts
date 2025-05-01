import {
  GoogleSignin,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';

export const googleSignIn = async (): Promise<{status: boolean; data: any}> => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      console.log('sign in success');
      return {status: true, data: response.data};
    } else {
      console.log('sign in was cancelled by user');
      return {status: false, data: null};
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log('operation already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('play services not available');
          break;
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('sign in cancelled');
          break;
        case statusCodes.SIGN_IN_REQUIRED:
          console.log('sign in required');
          break;
        default:
          console.log('some other error happened');
      }
    } else {
      console.log('an error not related to google sign in occurred');
    }
    return {status: false, data: null};
  }
};
