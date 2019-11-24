import React from 'react';
import {TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const IconInput = ({ text, icon, value, iconstyle, style, onPress, touchable=false, marginTop }) => {
  return (
    <View style={[styles.SectionStyle, style]}>
      {touchable?
      (
        <TextInput
        style={[PALETTE.text, styles.TextInputStyle]}
        placeholder={text}
        underlineColorAndroid="transparent"
        editable={false}
        value={value}
        />
      ):(<TextInput
      style={[PALETTE.text, styles.TextInputStyle]}
      placeholder={text}
      underlineColorAndroid="transparent"
      value={value}
      />)}
      <Text style={[styles.ImageStyle, iconstyle]}>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    borderWidth: 0,
    height: 40,
    borderRadius: 5 ,
    paddingLeft:10,
    marginBottom: 10,
    marginTop: 10,
  },
  TextInputStyle: {
    flex: 1,
    color: COLORS.textcolorgrey,
    
  },
  ImageStyle: {
      fontFamily: 'Font Awesome 5 Free-Solid-900', 
      fontWeight: "100",
      paddingRight: 10,
      fontSize: 20 
  }, 
});
export default IconInput;
