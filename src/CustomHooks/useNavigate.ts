import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

/**
 * Type definition for navigation stack parameters.
 * hook used to navigate between screen with params
 */

type RootStackParamList = {
  splashScreen: undefined;
  loginScreen: undefined;
  successScreen: undefined;
  // Add more screens here
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const useNavigate = () => {
  const navigation = useNavigation<NavigationProp>();

  const navigateTo = <T extends keyof RootStackParamList>(
    screenName: T,
    params?: RootStackParamList[T],
  ) => {
    navigation.navigate(screenName, params);
  };

  return navigateTo;
};

export default useNavigate;
