import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const ColorButton = ({
  onPress,
  text,
  bgcolorName,
  textColor,
  width,
  marginTop,
}) => {
  let backgroundColor;
  switch (bgcolorName) {
    case 'grey':
      backgroundColor = COLORS.greyPale;
      break;
    case 'greySlate':
      backgroundColor = COLORS.greySlate;
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        PALETTE.center,
        PALETTE.buttonWrapper,
        { width, backgroundColor, marginTop },
      ]}>
      <Text
        style={[PALETTE.buttonText, { color: textColor || COLORS.greyBrown }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ColorButton;
