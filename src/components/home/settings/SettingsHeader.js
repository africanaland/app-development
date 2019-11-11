import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, IMAGES } = R;

const SettingsHeader = ({ onPressBack, onPressSearch }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        PALETTE.header,
      ]}>
      {/** Left */}
      <TouchableOpacity onPress={onPressBack}>
        <Image source={IMAGES.LEFT_ARROW} style={PALETTE.leftArrow} />
      </TouchableOpacity>

      {/** Header title */}
      <Text style={[PALETTE.text, PALETTE.headerTitle]}>{'Settings'}</Text>

      {/** Search */}
      <TouchableOpacity onPress={onPressSearch}>
        <Image source={IMAGES.SEARCH} style={PALETTE.search} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsHeader;
