import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import R from 'res/R';
import CardTypeView from './CardTypeView';

// load resources: PALETTE
const { PALETTE, COLORS, IMAGES } = R;

const RequestCard = ({ time, name, question, anotherName, date, book }) => {
  return (
    <View style={styles.cardWrapper}>
      {/** header */}
      <View
        style={[
          PALETTE.row,
          PALETTE.primaryBetween,
          PALETTE.secondaryCenter,
          PALETTE.wrapperHorizontalPadding,
        ]}>
        <CardTypeView cardType={'request'} />
        <Text style={[PALETTE.text, PALETTE.timeText]}>{time}</Text>
      </View>

      {/** avatar section */}
      <View
        style={[
          PALETTE.row,
          PALETTE.wrapperHorizontalPadding,
          PALETTE.secondaryCenter,
          styles.avatarWrapper,
        ]}>
        <Image source={IMAGES.AVATAR_GIRL} style={styles.avatar} />
        <Text style={[styles.name, PALETTE.mediumRubik]}>{name}</Text>
      </View>

      {/** question section */}
      <Text
        style={[
          PALETTE.text,
          PALETTE.wrapperHorizontalPadding,
          styles.question,
        ]}>
        {question}
      </Text>

      {/** full info */}
      <View style={[PALETTE.wrapperHorizontalPadding, styles.fullInfoWrapper]}>
        {/** user avatar */}
        <View style={[PALETTE.row]}>
          <Image source={IMAGES.USER} style={styles.user} />
          <Text style={[PALETTE.text, styles.fullName]}>{anotherName}</Text>
        </View>
        {/** calendar && book icons */}
        <View
          style={[
            PALETTE.row,
            PALETTE.secondaryCenter,
            styles.calendarWrapper,
          ]}>
          <Image source={IMAGES.CALENDAR} style={styles.calendar} />
          <Text style={[PALETTE.text]}>{date}</Text>

          <Image source={IMAGES.BOOK} style={styles.book} />
          <Text style={[PALETTE.text]}>{book}</Text>
        </View>
      </View>

      {/** button section */}
      <View style={PALETTE.row}>
        <TouchableOpacity
          style={[
            PALETTE.f1,
            PALETTE.center,
            styles.bottomButton,
            styles.bottomLeftButton,
          ]}>
          <Text style={PALETTE.text}>{'HAYIR'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[PALETTE.f1, PALETTE.center, styles.bottomButton]}>
          <Text style={PALETTE.text}>{'EVET'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    marginTop: 20,
    paddingTop: 16,
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
  avatarWrapper: {
    marginTop: 21,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  name: {
    marginLeft: 7,
  },
  user: {
    width: 15,
    height: 16.7,
    resizeMode: 'contain',
  },
  fullInfoWrapper: {
    marginTop: 25.7,
    marginBottom: 30.8,
  },
  calendar: {
    width: 16.7,
    height: 18.3,
    resizeMode: 'contain',
    marginRight: 8.7,
  },
  book: {
    width: 15,
    height: 18.3,
    resizeMode: 'contain',
    marginRight: 9.5,
    marginLeft: 28.5,
  },
  bottomButton: {
    height: 56,
    borderTopWidth: 0.5,
    borderColor: COLORS.greyWarm,
  },
  bottomLeftButton: {
    borderRightWidth: 0.5,
  },
  calendarWrapper: {
    marginTop: 13.5,
  },
  fullName: {
    marginLeft: 9.5,
  },
  question: {
    marginTop: 19,
  },
});

export default RequestCard;
