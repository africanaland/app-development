import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from 'res/R';
import CardTypeView from './CardTypeView';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const AlertCard = ({
  time,
  name,
  alertTime,
  onPressSilence,
  onPressAlarm,
  isShowButton,
}) => {
  return (
    <View style={styles.cardWrapper}>
      {/** linear gradient */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          isShowButton
            ? [COLORS.yellowSunflower, COLORS.yellowOrange]
            : [COLORS.redWatermelon, COLORS.redWatermelon]
        }
        style={
          isShowButton
            ? styles.linearGradient
            : [
                styles.linearGradient,
                { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
              ]
        }>
        {/** header(cardtypeview and time) */}
        <View
          style={[
            PALETTE.row,
            PALETTE.primaryBetween,
            PALETTE.secondaryCenter,
            PALETTE.wrapperHorizontalPadding,
            styles.headerWrapper,
          ]}>
          <CardTypeView cardType={'alert'} />
          <Text style={[PALETTE.text, PALETTE.timeText, styles.whiteTextColor]}>
            {time}
          </Text>
        </View>

        {/** avatar section */}
        <View
          style={[
            PALETTE.row,
            PALETTE.wrapperHorizontalPadding,
            PALETTE.primaryBetween,
            PALETTE.secondaryCenter,
            styles.avatarWrapper,
          ]}>
          {/** avatar && name */}
          <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
            <Image source={IMAGES.AVATAR_GIRL} style={styles.avatar} />
            <Text
              style={[styles.name, styles.whiteTextColor, PALETTE.mediumRubik]}>
              {name}
            </Text>
          </View>
          {/** time icon && time */}
          <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
            <Image source={IMAGES.TIMER} style={styles.time} />
            <Text
              style={[
                PALETTE.text,
                styles.whiteTextColor,
                PALETTE.boldRubik,
                styles.timeText,
              ]}>
              {alertTime}
            </Text>
          </View>
        </View>

        {/** location info section*/}
        <View style={[PALETTE.row, PALETTE.center, styles.locationWrapper]}>
          <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
            <Image source={IMAGES.MAP_PIN} style={styles.map} />
            <Text style={[PALETTE.text, styles.whiteTextColor]}>
              {'Last Location'}
            </Text>
          </View>
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              styles.walkingSection,
            ]}>
            <Image source={IMAGES.WALKING} style={styles.walking} />
            <Text style={[PALETTE.text, styles.whiteTextColor]}>
              {'Going to'}
            </Text>
          </View>
        </View>
      </LinearGradient>

      {isShowButton ? (
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
      ) : null}
      {/** button section */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: COLORS.yellowSunflower,
    shadowColor: COLORS.greySlate,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  avatarWrapper: {
    marginTop: 21,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
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
  time: {
    width: 20,
    height: 21,
    resizeMode: 'contain',
  },
  map: {
    width: 20,
    height: 21,
    resizeMode: 'contain',
  },
  walking: {
    width: 20,
    height: 17.5,
    resizeMode: 'contain',
  },
  whiteTextColor: {
    color: COLORS.white,
    marginLeft: 8.7,
  },
  walkingSection: {
    marginLeft: 42,
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
  buttonWrapper: {
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  locationWrapper: {
    marginTop: 18,
    marginBottom: 11,
  },
  linearGradient: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  headerWrapper: {
    marginTop: 16,
  },
});

export default AlertCard;
