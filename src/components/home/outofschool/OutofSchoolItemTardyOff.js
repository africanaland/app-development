import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SeparatorBar from '../../common/SeparatorBar';
import StudentItem from '../../common/StudentItem';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const OutofSchoolItemTardyOff = ({ item, onPressSendTo }) => {
  return (
    <View style={[PALETTE.requetCardWrapper, styles.myCardWrapper]}>
      {/** Avatar, full name, type*/}
      <View
        style={[
          PALETTE.row,
          PALETTE.primaryBetween,
          PALETTE.secondaryCenter,
          styles.mySupRowWrapper,
        ]}>
        {/** Stduent side */}
        <StudentItem
          img={item.img}
          title={item.name}
          no={item.no}
          paddingHorizontal={1}
          bgColor={COLORS.white}
        />
      </View>

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
        {/** Send To button */}
        <TouchableOpacity style={[PALETTE.f1, PALETTE.row, PALETTE.center]}>
          <Image source={IMAGES.LOGIN} style={styles.space} />
          <Text style={[PALETTE.text, PALETTE.requestButtonText]}>
            {'Send To Class'}
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
    height: 135,
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

export default OutofSchoolItemTardyOff;
