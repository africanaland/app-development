import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const GradientButton = ({ onPress, text, bgcolorName, width, marginTop }) => {
  let colors;
  switch (bgcolorName) {
    case 'red':
      colors = [COLORS.redFaded, COLORS.redRouge];
      break;
    case 'blue':
      colors = [COLORS.blueLightTwo, COLORS.blueBurple];
      break;
    case 'green':
      colors = [COLORS.greenRaded, COLORS.greenRouge];
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[PALETTE.center, PALETTE.buttonWrapper, { width, marginTop }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}>
        <Text
          style={[PALETTE.text, PALETTE.buttonText, { color: COLORS.white }]}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default GradientButton;
