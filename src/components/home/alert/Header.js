import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const Header = ({ onPressBack, title }) => {
  return (
    <LinearGradient
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        PALETTE.header,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[COLORS.yellowGolden, COLORS.yellowTangerine]}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={IMAGES.LEFT_ARROW_WHITE} style={PALETTE.leftArrow} />
      </TouchableOpacity>

      {/** Header title */}
      <View style={[PALETTE.headerTitleWrapper, PALETTE.center]}>
        <Text
          style={[PALETTE.text, PALETTE.headerTitle, { color: COLORS.white }]}>
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
