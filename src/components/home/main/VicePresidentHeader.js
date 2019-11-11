import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const VicePresidentHeader = ({ onPressSearch, onPressPrimary, title }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        PALETTE.header,
      ]}>
      {/** Search icon */}
      <TouchableOpacity onPress={onPressSearch}>
        <Image source={IMAGES.SEARCH} style={PALETTE.search} />
      </TouchableOpacity>

      {/** Header title */}
      <View style={[PALETTE.headerTitleWrapper, PALETTE.center]}>
        <Text style={[PALETTE.text, PALETTE.headerTitle]}>{title}</Text>
      </View>

      {/** Primary Button: Gradient Button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[COLORS.redFaded, COLORS.redRouge]}
        style={styles.gradientStyle}>
        <TouchableOpacity
          style={[PALETTE.row, PALETTE.center, styles.primaryButtonWrapper]}
          onPress={onPressPrimary}>
          <Text style={[PALETTE.text, styles.primaryText]}>{'Primary'}</Text>
          <Image source={IMAGES.DOWN_ARROW_WHITE} style={styles.downArrow} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    borderRadius: 5,
  },
  primaryButtonWrapper: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
  downArrow: {
    width: 10,
    height: 6,
    marginLeft: 7,
  },
  primaryText: {
    color: COLORS.white,
    fontSize: 14,
  },
});

export default VicePresidentHeader;
