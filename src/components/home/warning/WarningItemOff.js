import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AlertCardInfo from '../alert/AlertCardInfo';
import SeparatorBar from '../../common/SeparatorBar';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const WarningItemOff = ({ item, onPressSendTo, onPressAlarm }) => {
  return (
    <View style={[PALETTE.requetCardWrapper, styles.myCardWrapper]}>
      {/**Info Section */}
      <AlertCardInfo
        group={item.group}
        no={item.no}
        time={item.time}
        name={item.name}
      />

      {/** Button */}
      <View style={PALETTE.f1} />
      <SeparatorBar
        width={'100%'}
        height={1}
        backgroundColor={COLORS.greyPaleTwo}
      />
      <View style={[PALETTE.row, PALETTE.requestButtonWrapper, styles.buttons]}>
        {/** SendTo button */}
        <TouchableOpacity
          onPress={onPressSendTo}
          style={[PALETTE.f1, PALETTE.row, PALETTE.center]}>
          <Image source={IMAGES.UP_RIGHT_BLACK} style={styles.space} />
          <Text style={[PALETTE.text, PALETTE.requestButtonText]}>
            {'Send To'}
          </Text>
        </TouchableOpacity>
        {/** Separator */}
        <SeparatorBar
          width={1}
          height={70}
          backgroundColor={COLORS.greyPaleTwo}
        />
        {/** Notifications button */}
        <TouchableOpacity style={[PALETTE.f1, PALETTE.row, PALETTE.center]}>
          <Image source={IMAGES.NOTIFICATION_YELLOW} style={styles.space} />
          <Text style={[PALETTE.text, PALETTE.requestButtonText]}>
            {'Alert'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // redefine CardWrapper
  myCardWrapper: {
    paddingTop: 0,
    paddingBottom: 0,
    height: 162,
  },
  mySupRowWrapper: {
    paddingLeft: 20,
  },
  subText: {
    fontSize: 10,
  },
  buttons: {
    height: 50,
  },
  space: {
    marginRight: 7,
  },
});

export default WarningItemOff;
