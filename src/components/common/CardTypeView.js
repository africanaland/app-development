import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CARD_TYPE_DATA } from 'library/constants';
import R from 'res/R';

// load resources: COLORS && PALETTE
const { PALETTE } = R;

const CardTypeView = ({ cardType }) => {
  // find the card data by the type of the card
  const card = CARD_TYPE_DATA.find(({ type }) => type === cardType);

  return (
    <View
      style={[
        styles.cardTypeWrapper,
        PALETTE.center,
        { backgroundColor: card.bgColor },
      ]}>
      <Text style={[PALETTE.text, { color: card.textColor }]}>{card.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypeWrapper: {
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 4,
  },
});

export default CardTypeView;
