import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const Alarm = ({ badgeCount, title, description, onPressBadge }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        styles.alarmWrapper,
      ]}>
      {/** text section */}
      <View>
        <Text style={[PALETTE.text, styles.title]}>{title}</Text>
        <Text style={[PALETTE.text, styles.description]}>{description}</Text>
      </View>
      {/** badge section */}
      <TouchableOpacity onPress={onPressBadge}>
        <Image source={IMAGES.NOTIFICATION} style={styles.notification} />
        <View style={styles.badgeWrapper}>
          <Text style={[PALETTE.text, styles.badgeText]}>{badgeCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmWrapper: {
    marginTop: 43,
  },
  notification: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  badgeWrapper: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
  badgeText: {
    fontSize: 8,
    color: COLORS.black,
  },
  title: {
    fontSize: 24,
    letterSpacing: 0.45,
  },
  description: {
    fontSize: 16,
    color: COLORS.greyBlueCloudy,
    marginTop: 7,
  },
});

export default Alarm;
