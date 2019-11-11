import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, IMAGES } = R;

const SearchHeader = ({ value, onChangeText, onPressBack, onPressClose }) => {
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

      {/** Search Field */}
      <View>
        <TextInput
          style={(PALETTE.text, PALETTE.buttonText, styles.searchBar)}
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.subLineSearchBar} />
      </View>

      {/** Search */}
      <TouchableOpacity onPress={onPressClose}>
        <Image
          source={value ? IMAGES.CIRCLE_CLOSE : null}
          style={(PALETTE.search, styles.circleClose)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: 247,
    height: 24,
    marginBottom: 6,
  },
  subLineSearchBar: {
    width: 247,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#6f4cff',
    resizeMode: 'contain',
  },
  circleClose: {
    width: 24,
    height: 22,
    resizeMode: 'contain',
  },
});

export default SearchHeader;
