import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Components/Text';
import Button from '../Components/Button';
import {AppColors, buttonColors} from '../Utils/Colors';

const SuccessScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text textStyle={styles.text}>You’re all set!</Text>
        <Button
          label="Let's Go!"
          buttonStyle={styles.button}
          border={25}
          backgroundColor={AppColors.white}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    height: 300,
    width: 300,
    borderRadius: 300,
    backgroundColor: AppColors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.white,
  },
  button: {
    width: '45%',
    height: '15%',
    marginHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    color: buttonColors.blue,
    fontSize: 12,
  },
});

export default SuccessScreen;
