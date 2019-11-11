// import StorybookUI from '../storybook';

// export default StorybookUI;

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Navigators
import TeacherHomeNavigator from './screens/home/TeacherHomeNavigator';
import VPHomeNavigator from './screens/home/VPHomeNavigator';
import AnalyticsNavigator from './screens/analytics/AnalyticsNavigator';
import AttendanceNavigator from './screens/attendances/AttendanceNavigator';
import RequestsNavigator from './screens/requests/RequestsNavigator';
import SplashNavigator from './screens/splash/SplashNavigator';
import SchoolBusNavigator from './screens/schoolbus/SchoolBusNavigator';

import R from 'res/R'; // Load resources
const { COLORS, IMAGES } = R;

// Default options for bottom tab bars
const defaultTabNavigationOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      switch (routeName) {
        case 'Home':
          iconName = IMAGES.HOME;
          if (focused) {
            iconName = IMAGES.HOME_RED;
          }
          break;

        case 'Attendance':
          iconName = IMAGES.LIST;
          if (focused) {
            iconName = IMAGES.LIST_RED;
          }
          break;

        case 'Requests':
          iconName = IMAGES.FILE_PLUS_GREY;
          if (focused) {
            iconName = IMAGES.FILE_PLUS_RED;
          }
          break;

        case 'Analytics':
          iconName = IMAGES.BAR_CHARTS;
          if (focused) {
            iconName = IMAGES.BAR_CHARTS_RED;
          }
          break;

        default:
          break;
      }

      return <Image source={iconName} style={styles.tabIcon} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: COLORS.black,
    inactiveTintColor: COLORS.black,
    labelStyle: {
      fontSize: 11,
    },
  },
};

// Basic bottom tab screens: common tab screens used for Teacher and VP
const BasicTabScreens = {
  Attendance: {
    screen: AttendanceNavigator,
  },
  Requests: {
    screen: RequestsNavigator,
  },
  Analytics: {
    screen: AnalyticsNavigator,
  },
};

// Teacher bottom tab screens
const TeacherTabScreens = {
  Home: {
    screen: TeacherHomeNavigator,
  },
  ...BasicTabScreens,
};

// Teacher bottom tab navigator
const TeacherTabNavigator = createBottomTabNavigator(
  TeacherTabScreens,
  defaultTabNavigationOptions,
);

// VP bottom tab screens
const VPTabScreens = {
  Home: {
    screen: VPHomeNavigator,
  },
  ...BasicTabScreens,
};
// VP bottom tab navigator
const VPTabNavigator = createBottomTabNavigator(
  VPTabScreens,
  defaultTabNavigationOptions,
);

const AppNavigator = createStackNavigator(
  {
    SplashNavigator: SplashNavigator,
    TeacherTabNavigator: TeacherTabNavigator,
    VPTabNavigator: VPTabNavigator,
    SchoolBusNavigator: SchoolBusNavigator,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashNavigator',
  },
);

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 22,
    resizeMode: 'contain',
  },
});

export default createAppContainer(AppNavigator);
