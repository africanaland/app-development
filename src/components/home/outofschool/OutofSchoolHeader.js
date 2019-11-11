import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, IMAGES } = R;

const OutofSchoolHeader = ({ onPressBack }) => {
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
      <Text style={[PALETTE.text, PALETTE.headerTitle]}>{'Out Of School'}</Text>

      {/** Right */}
      <TouchableOpacity />
    </View>
  );
};

export default OutofSchoolHeader;