import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {DRAWER_OPTIONS, ROUTES} from '../Utils/Constants';
import ForecastScreen from '../Screens/ForecastScreen';
import Image from '../Components/Image';
import {ICONS} from '../Utils/Icons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={DRAWER_OPTIONS.SETTINGS}
        icon={() => <Image source={ICONS.SETTINGS} imgStyle={styles.icons} />}
        onPress={() => console.log('Navigate to Settings')}
      />
      <DrawerItem
        label={DRAWER_OPTIONS.LOGOUT}
        icon={() => <Image source={ICONS.LOGOUT} imgStyle={styles.icons} />}
        onPress={() => console.log('Logout action')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={ROUTES.FORECAST_SCREEN} component={ForecastScreen} />
      {/* Add other screens here */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    height: 24,
    width: 24,
  },
});

export default DrawerNavigator;
