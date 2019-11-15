import React, {Component} from 'react';

import {Text, View, CheckBox, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, DrawerItems } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import IconInput from './common/IconInput';
import Button from './common/Button';
import MapView from 'react-native-maps';
import R from 'res/R';
const { PALETTE, COLORS } = R;

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {[PALETTE.login.container]}>
        <MapView
          style={styles.map}
          showsMyLocationButton

          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />      

        <View
          style={[
            PALETTE.row,
            PALETTE.primaryBetween,
            PALETTE.secondaryCenter,
            PALETTE.menubar,
          ]}>
          
          <Button
            onPress={()=>{this.props.navigation.toggleDrawer()}}
            text = "&#xf0c9;"
            height = {30}
            width = {30}
            btnstyle = {[PALETTE.icontext,{fontSize:30}]}
          />         

          <View>
            <View style={PALETTE.row}>
              <Button
                text = "&#xf0e0;"
                height = {30}
                width = {30}
                btnstyle = {[PALETTE.icontext,{fontSize:20}]}
              /> 
              <Button
                text = "&#xf0f3;"
                height = {30}
                width = {30}
                btnstyle = {[PALETTE.icontext,{fontSize:20}]}
              /> 
            </View>
          </View>
        </View>

        <View style={[PALETTE.login.bottomcontent]}>
          <View style={[PALETTE.bottom]}>
            <View style={[PALETTE.row]}>
              <View
                style = {[PALETTE.f1, PALETTE.center]}>
                <Button
                  text = "Search"
                  onPress = {() => {this.props.navigation.navigate('Register');}}
                  bgcolor = {COLORS.white}
                  color = {COLORS.black}
                  height = {40}
                  width = '100%'
                  style = {[PALETTE.homepage.bottom]}
                />
              </View>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});