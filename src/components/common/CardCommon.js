import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import R from 'res/R';
import CardTypeView from './CardTypeView';

// load resources: PALETTE
const { PALETTE, COLORS } = R;

const CommonCard = ({ cardType, time, title, content, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
      {/** header */}
      <View
        style={[PALETTE.row, PALETTE.primaryBetween, PALETTE.secondaryCenter]}>
        <CardTypeView cardType={cardType} />
        <Text style={[PALETTE.text, PALETTE.timeText]}>{time}</Text>
      </View>

      {/** title */}
      <Text style={[PALETTE.mediumRubik, styles.titleText]}>{title}</Text>

      {/** content */}
      <Text style={[PALETTE.regularRubik, styles.contentText]}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    height: 143,
    marginTop: 20,
    paddingTop: 16,
    paddingRight: 21,
    paddingBottom: 34,
    paddingLeft: 24,
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
  titleText: {
    fontSize: 16,
    color: COLORS.greySlate,
    letterSpacing: 0.3,
    marginTop: 9,
    marginBottom: 1,
  },
  contentText: {
    fontSize: 14,
    color: COLORS.greySlate,
    opacity: 0.5,
    marginTop: 3,
  },
});

export default CommonCard;
