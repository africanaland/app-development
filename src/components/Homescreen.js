import React, {Component} from 'react';

import {Text, View, CheckBox, StyleSheet, Image} from 'react-native';
import IconInput from './common/IconInput';
import Button from './common/Button';
import R from 'res/R';
const { PALETTE, COLORS } = R;

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {[PALETTE.login.container]}>
        <Text>Home</Text>
      </View>
    );
  }
}