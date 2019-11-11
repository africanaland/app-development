import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, IMAGES } = R;

const AlertCardInfo = ({
  group,
  no,
  time,
  name,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.secondaryCenter,
        styles.infoSection,
        backgroundColor ? { backgroundColor } : null,
        borderRadius ? { borderRadius } : null,
      ]}>
      {/** Left side: avatar section */}
      <Image source={IMAGES.AVATAR_GIRL} style={styles.avatar} />
      {/** Right side:  */}
      <View style={[PALETTE.f1, styles.infoWrapper]}>
        <View style={[PALETTE.row, PALETTE.primaryBetween]}>
          <View style={[PALETTE.row]}>
            <Text style={[PALETTE.text, styles.classText]}>{group}</Text>
            <Text style={[PALETTE.text, styles.noText]}>{no}</Text>
          </View>

          <View style={[PALETTE.row]}>
            <Image source={IMAGES.TIMER_GREY} style={styles.timer} />
            <Text style={[PALETTE.text, styles.classText]}>{time}</Text>
          </View>
        </View>

        <Text style={[PALETTE.text, styles.nameText]}>{name}</Text>

        <View
          style={[
            PALETTE.row,
            PALETTE.secondaryCenter,
            styles.locationWrapper,
          ]}>
          <Image source={IMAGES.MAP_PIN_GREY} style={styles.map} />
          <Text style={[PALETTE.text, styles.locatinText]}>
            {'Last Location'}
          </Text>

          <Image source={IMAGES.WALKING_GREY} style={styles.walking} />
          <Text style={[PALETTE.text, styles.locatinText]}>{'Going to'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 21,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  infoWrapper: {
    marginLeft: 8,
  },
  classText: {
    fontSize: 14,
    fontWeight: '500',
  },
  noText: {
    fontWeight: 'normal',
    marginLeft: 12,
  },
  nameText: {
    marginTop: 4,
    fontSize: 16,
  },
  timer: {
    width: 15,
    height: 17,
    resizeMode: 'contain',
    marginRight: 6,
  },
  locationWrapper: {
    marginTop: 6,
  },
  locatinText: {
    fontSize: 14,
    marginLeft: 7,
  },
  map: {
    width: 16.7,
    height: 20,
    resizeMode: 'contain',
  },
  walking: {
    width: 20,
    height: 19,
    resizeMode: 'contain',
    marginLeft: 28,
  },
});

export default AlertCardInfo;
