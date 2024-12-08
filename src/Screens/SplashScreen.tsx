import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../Components/Button';
import {AppColors, buttonColors} from '../Utils/Colors';
import {STRINGS} from '../Utils/Constants';
import Image from '../Components/Image';
import Text from '../Components/Text';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {fontFamily} from '../Utils/Styling';

type RootStackParamList = {
  successScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'successScreen'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const onHandlePress = () => {
    navigation.navigate('successScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          isBackgroundImage
          bgImgsource={require('../../assets/Icons/blueBackground.png')}
          backgroungImgStyle={styles.backgroundImage}>
          <Image
            source={require('../../assets/Icons/droplets.png')}
            imgStyle={styles.droplets}
          />
          <Image
            source={require('../../assets/Icons/walking_in_rain.png')}
            imgStyle={styles.walkingMan}
          />
        </Image>
        <View style={styles.subContainer}>
          <Text textStyle={styles.rainDropText}>{STRINGS.RAINDROPS}</Text>
          <Text textStyle={styles.discription1}>
            {STRINGS.DISCRIPTION1}
            {'\n'}
            <Text textStyle={styles.discription2}>{STRINGS.DISCRIPTION2}</Text>
          </Text>
          <Button
            label={STRINGS.GET_STARTED}
            backgroundColor={buttonColors.blue}
            border={25}
            buttonStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onClick={onHandlePress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.lightBlue,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 25,
    paddingVertical: 8,
  },
  imageContainer: {
    width: 300,
    height: 320,
    marginTop: '5%',
  },
  backgroundImage: {
    height: '100%',
    resizeMode: 'cover',
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
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',
  },
  rainDropText: {
    fontFamily: fontFamily.bold,
    fontSize: 48,
    color: buttonColors.blue,
  },
  discription1: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    textAlign: 'center',
    color: buttonColors.blue,
  },
  discription2: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    textAlign: 'center',
    color: buttonColors.blue,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
});
export default SplashScreen;
