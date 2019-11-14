import React, {Component} from 'react';

import {Text, View, CheckBox, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, DrawerItems } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import IconInput from './common/IconInput';
import Button from './common/Button';
import MapView from 'react-native-maps';
import R from 'res/R';
const { PALETTE, COLORS } = R;

export default class Notifications extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View><Text>Booking</Text></View>
    );
  }
}
