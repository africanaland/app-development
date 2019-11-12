// import StorybookUI from '../storybook';

// export default StorybookUI;

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Navigators
import MainNavigator from './screens/MainNavigator';

const AppNavigator = createStackNavigator(
  {
    MainNavigator: MainNavigator
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainNavigator',
  },
);

export default createAppContainer(AppNavigator);
