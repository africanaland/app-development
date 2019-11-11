import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AlertCardInfo from './AlertCardInfo';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const AlertCard = ({ group, no, time, name, onPressSilence, onPressAlarm }) => {
  return (
    <View style={styles.cardWrapper}>
      {/**Info Section */}
      <AlertCardInfo group={group} no={no} time={time} name={name} />

      {/** button section */}
      <View style={[PALETTE.row, styles.buttonWrapper]}>
        {/** silence button */}
        <TouchableOpacity
          onPress={onPressSilence}
          style={[
            PALETTE.f1,
            PALETTE.center,
            styles.bottomButton,
            styles.bottomLeftButton,
          ]}>
          <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
            <Image
              source={IMAGES.NOTIFICATION_OFF}
              style={styles.notificationOff}
            />
            <Text style={PALETTE.text}>{'Silence'}</Text>
          </View>
        </TouchableOpacity>
        {/** alarm button */}
        <TouchableOpacity
          onPress={onPressAlarm}
          style={[
            PALETTE.f1,
            PALETTE.center,
            styles.bottomButton,
            styles.bottomRightButton,
          ]}>
          <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
            <Image source={IMAGES.NOTIFICATION} style={styles.notification} />
            <Text style={PALETTE.text}>{'Alarm'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.greySlate,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  buttonWrapper: {
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopWidth: 1,
    borderColor: COLORS.greyPale,
  },
  bottomButton: {
    height: 56,
    backgroundColor: COLORS.white,
  },
  bottomLeftButton: {
    borderBottomLeftRadius: 16,
    borderRightWidth: 0.5,
  },
  bottomRightButton: {
    borderBottomRightRadius: 16,
  },
  notificationOff: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  notification: {
    width: 18.3,
    height: 18.3,
    resizeMode: 'contain',
    marginRight: 5,
  },
});

export default AlertCard;
