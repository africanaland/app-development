import React, {Component} from 'react';

import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import IconInput from './common/IconInput';
import Button from './common/Button';
import R from 'res/R';
const { PALETTE, COLORS } = R;

export default class Login extends Component {
  render() {
    return (
      <View style = {[PALETTE.login.container]}>
        <Text style = {[PALETTE.login.topcontent]}>EN</Text>
        <View style = {[PALETTE.login.maincontent]}>
          <View style = {[PALETTE.login.logoview]}>
            <Image 
              style = {[PALETTE.login.LogoStyle]}
              source = {require("../res/images/logo.png")}
            />
          </View>
          <IconInput 
            icon = "&#xf0e0;"
            text = "Email"
          />        
          <IconInput 
            icon = "&#xf023;"
            text = "Password"
          />        
          <Text style = {[PALETTE.text, PALETTE.login.forgotpasswordtext]}>Forgot Password?</Text>
          <Button
            text = "Sign In"
            onPress = {() => {this.props.navigation.navigate('HomeScreen');}}
            bgcolor = {COLORS.maincolor}
            height = {40}
            width = "100%"
          />
          <Text style = {[PALETTE.textbold, PALETTE.login.ortext]}>Or</Text>

          <View style={[PALETTE.row]}>
            <View
              style = {[PALETTE.f1, PALETTE.row, PALETTE.center]}>
              <Button
                text = "Facebook"
                bgcolor = {COLORS.facebookcolor}
                height = {40}
                width = "80%"
              />
            </View>
            <View
              style = {[PALETTE.f1, PALETTE.row, PALETTE.center]}>
              <Button
                text = "Gmail"
                bgcolor = {COLORS.gmailcolor}
                height = {40}
                width = '80%'
              />
            </View>
          </View>
        </View>
        <View style={[PALETTE.login.bottomcontent]}>
          <View
            style={[PALETTE.login.hr]}
          />
          <Button
            text = "Sign Up"
            onPress = {() => {this.props.navigation.navigate('Register');}}
            bgcolor = {COLORS.signupcolor}
            height = {40}
            width = '100%'
            style = {[PALETTE.bottom]}
          />
        </View>
      </View>
    );
  }
}