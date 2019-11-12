import React from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const Button = ({ onPress, text, height, width, bgcolor, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, {width:width}]} activeOpacity={.7}>
        <View  style={{backgroundColor:bgcolor, borderRadius:5, height:height, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[PALETTE.text, PALETTE.button]}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default Button;
