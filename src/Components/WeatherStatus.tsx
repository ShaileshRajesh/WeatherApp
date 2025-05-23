import React from 'react';
import {View} from 'react-native';
import Image from './Image';
import Text from './Text';
import {AppColors} from '../Utils/Colors';
import {fontFamily} from '../Utils/Styling';

const WeatherStatus = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('../../assets/Icons/clear.png')} />
      <Text
        textStyle={{
          textAlign: 'center',
          color: AppColors.white,
          fontWeight: 40,
          fontFamily: fontFamily.bold,
        }}>
        Clear
      </Text>
      <Text
        textStyle={{
          textAlign: 'center',
          color: AppColors.white,
          fontWeight: 86,
          fontFamily: fontFamily.bold,
        }}>
        {`${24}\u00B0C`}
      </Text>
    </View>
  );
};

export default WeatherStatus;
