import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../Components/Text';
import Image from '../Components/Image';
import {AppColors} from '../Utils/Colors';
import {fontFamily} from '../Utils/Styling';
import WeatherStatus from '../Components/WeatherStatus';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ROUTES} from '../Utils/Constants';
import {ICONS} from '../Utils/Icons';

type DrawerParamList = {
  [ROUTES.FORECAST_SCREEN]: undefined;
  // Add other routes if needed
};

const ForecastScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const renderHeader = () => {
    return (
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={ICONS.MENU} imgStyle={styles.menuIcon} />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Image source={ICONS.LOCATION} imgStyle={styles.locationIcon} />
            <Text textStyle={styles.locationText}>India</Text>
          </View>
        </View>
        <Image source={ICONS.SEARCH} imgStyle={styles.searchIcon} />
      </SafeAreaView>
    );
  };

  return (
    <Image
      isBackgroundImage
      backgroungImgStyle={{
        flex: 1,
      }}
      bgImgsource={ICONS.WEATHER_CLEAR}>
      {renderHeader()}
      <View
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
          paddingHorizontal: 15,
        }}>
        <View style={{marginTop: '10%'}}>
          <Text
            textStyle={{
              textAlign: 'center',
              color: AppColors.white,
              fontWeight: 40,
              fontFamily: fontFamily.bold,
            }}>
            June 17
          </Text>
          <Text
            textStyle={{
              textAlign: 'center',
              color: AppColors.white,
              fontWeight: 16,
              fontFamily: fontFamily.regular,
            }}>
            Updated as of 6/7/2025 12:25 PM
          </Text>
        </View>
        <View
          style={{
            width: '70%',
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <WeatherStatus />
        </View>
      </View>
    </Image>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
  locationText: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
    color: AppColors.white,
  },
  searchIcon: {
    height: 38,
    width: 38,
    paddingRight: 15,
  },
  menuIcon: {
    height: 32,
    width: 32,
  },
  locationIcon: {
    height: 31,
    width: 31,
  },
});

export default ForecastScreen;
