import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const Header = ({ onPressSearch, onPressSetting }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        PALETTE.header,
      ]}>
      <TouchableOpacity onPress={onPressSearch}>
        <Image source={IMAGES.SEARCH} style={PALETTE.search} />
      </TouchableOpacity>

      <Image source={IMAGES.LOGO} style={styles.logo} />

      <TouchableOpacity onPress={onPressSetting}>
        <Image source={IMAGES.SETTING} style={styles.setting} />
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
    backgroundColor: COLORS.white,
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

export default Header;
