import React, {Component} from 'react';

import {Text, View, CheckBox, StyleSheet, Image} from 'react-native';
import IconInput from './common/IconInput';
import Button from './common/Button';
import R from 'res/R';
const { PALETTE, COLORS } = R;

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
  }
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
            text = "Username"
          />      
          <IconInput 
            icon = "&#xf0e0;"
            text = "Email"
          />        
          <IconInput 
            icon = "&#xf023;"
            text = "Password"
          />         
          <IconInput 
            icon = "&#xf023;"
            text = "Confirm Password"
          />      
          <View style={[PALETTE.row, PALETTE.register.acceptview]}>
            <CheckBox
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
            />            
            <View style={[PALETTE.row, PALETTE.register.termview]}>
              <Text style = {[PALETTE.text, PALETTE.register.accept]}>I accept </Text>
              <Text style = {[PALETTE.text, PALETTE.register.tc]}>terms & conditions</Text>
            </View>
          </View>
          <Button
            text = "Sign In"
            onPress = {() => {this.props.navigation.navigate('Login');}}
            bgcolor = {COLORS.maincolor}
            height = {40}
            width = "100%"
          />
          
          
        </View>
        <View style={[PALETTE.login.bottomcontent]}>
          <View
            style={[PALETTE.login.hr]}
          />
          <View style={[PALETTE.bottom]}>
            <View style={[PALETTE.row]}>
              <View
                style = {[PALETTE.f1, PALETTE.center]}>
                <Button
                  text = "Facebook"
                  bgcolor = {COLORS.facebookcolor}
                  height = {40}
                  width = "80%"
                />
              </View>
              <View
                style = {[PALETTE.f1, PALETTE.center]}>
                <Button
                  text = "Gmail"
                  bgcolor = {COLORS.gmailcolor}
                  height = {40}
                  width = '80%'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}