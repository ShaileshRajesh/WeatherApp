import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Components/Button';
import {buttonColors} from '../Utils/Colors';
import {STRINGS} from '../Utils/Constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        label={STRINGS.GET_STARTED}
        backdroundColor={buttonColors.blue}
        border={25}
        buttonStyle={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: '25%',
  },
});
export default SplashScreen;
