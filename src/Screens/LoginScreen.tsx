import React, {useState} from 'react';
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

const LoginScreen = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({email: '', password: ''});
  const [error, setError] = useState({email: '', password: ''});

  const checkLoginValidation = (email: string, password: string) => {
    setError({email: '', password: ''});
    if (!email && !password) {
      setError({email: STRINGS.ENTER_EMAIL, password: STRINGS.ENTER_PASSWORD});
      return false;
    } else if (!email) {
      setError({email: STRINGS.ENTER_EMAIL, password: ''});
      return false;
    } else if (!REGEX.emailRegex.test(email)) {
      setError({email: STRINGS.EMAIL_ERROR, password: ''});
      return false;
    } else if (!password) {
      setError({email: '', password: STRINGS.ENTER_PASSWORD});
      return false;
    } else if (!REGEX.passwordRegex.test(password)) {
      setError({
        email: '',
        password: STRINGS.PASSWORD_ERROR,
      });
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    const isValid = checkLoginValidation(values.email, values.password);

    if (!isValid) {
      return false;
    }
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(async () => {
        await saveLoginData(1, true);
        navigate(ROUTES.SUCCESS);
      })
      .catch(error => {
        console.log('inside the error>>>');
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
    setValues(prevValues => ({
      ...prevValues,
      [textType]: text,
    }));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Icons/sun.png')}
        imgStyle={styles.backgroundImage}
      />
      <Image source={require('../../assets/Icons/walkingMan.png')} />

      <View style={styles.formContainer}>
        <Text textStyle={styles.rainDropText}>{STRINGS.RAINDROPS}</Text>

        <Text textStyle={styles.singUpText}>{STRINGS.SINGN_UP}</Text>
        <View style={styles.formContainer}>
          <IconWithTextInput
            imgSource={require('../../assets/Icons/blurMail.png')}
            placeHolderText="Email address"
            value={values.email}
            onChangeText={(text: string) => handleInputChange(text, 'email')}
          />
          {error.email && (
            <Text textStyle={styles.errorText}>{error.email}</Text>
          )}
          <IconWithTextInput
            imgSource={require('../../assets/Icons/blurEye.png')}
            placeHolderText="Password"
            value={values.password}
            maxLength={15}
            onChangeText={(text: string) => handleInputChange(text, 'password')}
          />
          {error.password && (
            <Text textStyle={styles.errorText}>{error.password}</Text>
          )}
          <Button
            label={STRINGS.CREATE_ACCOUNT}
            backgroundColor={buttonColors.yellow}
            border={25}
            buttonStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onClick={handleSignUp}
          />
        </View>
      </View>
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
  },

  buttonContainer: {
    marginTop: 25,
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
    fontSize: 14,
  },
});

export default LoginScreen;
