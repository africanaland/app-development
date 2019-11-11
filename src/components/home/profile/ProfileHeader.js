import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, IMAGES } = R;

const ProfileHeader = ({ onPressBack, onPressSetting }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        styles.header,
      ]}>
      <TouchableOpacity onPress={onPressBack}>
        <Image source={IMAGES.LEFT_ARROW_WHITE} style={PALETTE.setting} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSetting}>
        <Image source={IMAGES.SETTING_WHITE} style={styles.setting} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 52.8,
    paddingLeft: 26,
    paddingRight: 24,
  },
  logo: {
    width: 130,
    height: 31.8,
    resizeMode: 'contain',
  },
  setting: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ProfileHeader;
