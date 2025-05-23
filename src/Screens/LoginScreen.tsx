import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../Components/Button';
import {AppColors, buttonColors} from '../Utils/Colors';
import Image from '../Components/Image';
import Text from '../Components/Text';
import {ROUTES, STRINGS, REGEX} from '../Utils/Constants';
import {fontFamily} from '../Utils/Styling';
import IconWithTextInput from '../Components/IconWithTextInput';
import auth from '@react-native-firebase/auth';
import useNavigate from '../CustomHooks/useNavigate';
import {saveLoginData} from '../LocalStorage/Database';
import {googleSignIn} from '../Utils/GoogleSignInHelper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from 'react-native-dotenv';
import {ICONS} from '../Utils/Icons';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({name: '', email: '', password: ''});
  const [error, setError] = useState({name: '', email: '', password: ''});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  const checkLoginValidation = (
    name: string,
    email: string,
    password: string,
  ) => {
    setError({name: '', email: '', password: ''});
    if (!name && !email && !password) {
      setError({
        name: STRINGS.ENTER_NAME,
        email: STRINGS.ENTER_EMAIL,
        password: STRINGS.ENTER_PASSWORD,
      });
      return false;
    } else if (!name) {
      setError({name: STRINGS.ENTER_NAME, email: '', password: ''});
    } else if (!email) {
      setError({email: STRINGS.ENTER_EMAIL, password: '', name: ''});
      return false;
    } else if (!REGEX.emailRegex.test(email)) {
      setError({email: STRINGS.EMAIL_ERROR, password: '', name: ''});
      return false;
    } else if (!password) {
      setError({email: '', password: STRINGS.ENTER_PASSWORD, name: ''});
      return false;
    } else if (!REGEX.passwordRegex.test(password)) {
      setError({
        email: '',
        password: STRINGS.PASSWORD_ERROR,
        name: '',
      });
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    const isValid = checkLoginValidation(
      values.name,
      values.email,
      values.password,
    );

    if (!isValid) {
      return false;
    }
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async () => {
        await saveLoginData(1, true);
        navigate(ROUTES.SUCCESS_SCREEN);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleInputChange = (text: string, textType: string) => {
    setError(prevValues => ({
      ...prevValues,
      [textType]: '',
    }));
    setValues(prevValues => ({
      ...prevValues,
      [textType]: text,
    }));
  };

  const handleGoogleSignIn = async () => {
    const {status, data} = await googleSignIn();

    if (status && data) {
      saveLoginData(1, true);
      navigate(ROUTES.SUCCESS_SCREEN);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={ICONS.SUN} imgStyle={styles.backgroundImage} />
      {/* <Image
        source={require('../../assets/Icons/raindrop.png')}
        imgStyle={{height: '20%', width: '80%', marginTop: '4%'}}
      /> */}

      <Text textStyle={styles.rainDropText}>{STRINGS.RAINDROPS}</Text>

      {/* <View style={styles.formContainer}> */}
      <Text textStyle={styles.singUpText}>{STRINGS.SINGN_UP}</Text>
      <View style={[styles.formContainer]}>
        <View style={{paddingVertical: 15}}>
          <IconWithTextInput
            imgSource={ICONS.CLEAR_MAIL}
            placeHolderText="Name"
            value={values.name}
            maxLength={15}
            onChangeText={(text: string) => handleInputChange(text, 'name')}
          />
          {error.name && <Text textStyle={styles.errorText}>{error.name}</Text>}
          <IconWithTextInput
            imgSource={ICONS.CLEAR_MAIL}
            placeHolderText="Email address"
            value={values.email}
            onChangeText={(text: string) => handleInputChange(text, 'email')}
          />
          {error.email && (
            <Text textStyle={styles.errorText}>{error.email}</Text>
          )}
          <IconWithTextInput
            imgSource={ICONS.CLEAR_EYE}
            placeHolderText="Password"
            value={values.password}
            maxLength={15}
            onChangeText={(text: string) => handleInputChange(text, 'password')}
          />
          {error.password && (
            <Text textStyle={styles.errorText}>{error.password}</Text>
          )}
        </View>
        <Button
          label={STRINGS.CREATE_ACCOUNT}
          backgroundColor={buttonColors.yellow}
          border={25}
          buttonStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onClick={handleSignUp}
        />
        <Button
          label={STRINGS.GOOGLE_SIGN_IN}
          backgroundColor={buttonColors.yellow}
          border={25}
          buttonStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onClick={handleGoogleSignIn}
        />
      </View>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.blue,
  },
  backgroundImage: {
    width: '100%',
    height: '25%',
  },
  buttonContainer: {
    paddingVertical: 16,
  },
  imageContainer: {
    width: 300,
    height: 320,
    marginTop: '5%',
  },
  droplets: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: '5%',
  },
  walkingMan: {
    alignSelf: 'center',
    position: 'absolute',
    top: '35%',
    left: '5%',
  },
  rainDropText: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    color: AppColors.white,
    marginTop: '8%',
  },
  discription1: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: 'center',
    color: AppColors.white,
  },
  discription2: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: 'center',
    color: AppColors.white,
  },
  buttonText: {
    color: AppColors.blue,
    fontSize: 12,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    marginTop: '2%',
    color: AppColors.red,
    marginLeft: 6,
    alignSelf: 'flex-start',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  singUpText: {
    marginTop: 15,
    color: AppColors.white,
    fontSize: 18,
  },
});

export default LoginScreen;
