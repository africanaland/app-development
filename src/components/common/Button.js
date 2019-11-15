import React from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const Button = ({ onPress, text, height, width, bgcolor, style, color, btnstyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, {backgroundColor:bgcolor,width:width,height:height,justifyContent: 'center', alignItems: 'center'}]} activeOpacity={.7}>
        
      <Text style={[PALETTE.text, PALETTE.button, btnstyle, {color:color}]}>{text}</Text>
        
    </TouchableOpacity>
  );
};

export default Button;
