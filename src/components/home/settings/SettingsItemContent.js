import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SeparatorBar from '../../common/SeparatorBar';
import R from 'res/R';

// load resources: COLORS && PALETTE
const { COLORS, PALETTE, IMAGES } = R;

const SettingsItemContent = ({ title, subtitle }) => {
  return (
    <View>
      <View
        style={[
          PALETTE.row,
          PALETTE.primaryBetween,
          PALETTE.secondaryCenter,
          styles.settingsItemContentWrapper, // Settings item content wrapper
        ]}>
        {/** Left side */}
        <View>
          {/** Setting Title */}
          <Text style={[PALETTE.text, styles.settingItemTitle]}>{title}</Text>

          {/** Setting Subtitle */}
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              styles.fullInfoWrapper,
            ]}>
            {/** Lession number */}
            <Text style={[PALETTE.text, styles.lessonText]}>{subtitle}</Text>
          </View>
        </View>

        {/** Right side */}
        <TouchableOpacity>
          <Image source={IMAGES.RIGHT_ARROW} style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
      {/** Bottom Split Line */}
      <SeparatorBar
        width={'100%'}
        height={1}
        backgroundColor={COLORS.greySlate}
        marginLeft={32}
        opacity={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingItemTitle: {
    fontSize: 16,
  },
  settingsItemContentWrapper: {
    width: '100%',
    height: 96,
    paddingHorizontal: 32,
    paddingTop: 27,
    paddingBottom: 26.5,
  },
  lessonText: {
    fontSize: 14,
    color: COLORS.greyDarkblue,
    letterSpacing: 0.3,
    opacity: 0.6,
  },
  rightArrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  fullInfoWrapper: {
    marginTop: 0.5,
  },
});

export default SettingsItemContent;
