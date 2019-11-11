import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import GroupDetailAbsView from '../attendances/detail/GroupDetailAbsView';
import R from 'res/R';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Load resources: COLORS && PALETTE
const { COLORS, PALETTE } = R;

const StudentItem = ({
  // Student info
  title,
  no,
  img,

  // For group detail: check if the student is absent
  isAbsent,

  // For Student Profile: enable or disable touch
  isTouchable,
  onPress,

  // Customize style
  paddingHorizontal,
  bgColor,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={isTouchable ? false : true}>
        <View
          style={[
            PALETTE.row,
            PALETTE.secondaryCenter,
            styles.itemContentWrapper, // Item content wrapper
            {
              paddingHorizontal: paddingHorizontal || 32,
              backgroundColor: bgColor || COLORS.greyPale,
            },
          ]}>
          {/** Left side: avatar */}
          <Image source={img} style={styles.avatarIcon} />

          {/** Right side: info */}
          <View>
            {/** Avatar Title */}
            <Text
              style={[PALETTE.text, PALETTE.mediumRubik, styles.avatarTitle]}>
              {title}
            </Text>

            {/** Class No */}
            <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
              <Text style={[PALETTE.text, styles.noText]}>{no}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/** Render ABS view  */}
      {isAbsent ? <GroupDetailAbsView /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContentWrapper: {
    width: '100%',
    height: 76,
    paddingTop: 27,
    paddingBottom: 24,
  },
  avatarIcon: {
    width: 48,
    height: 48,
    marginRight: 15,
    resizeMode: 'contain',
  },
  avatarTitle: {
    fontSize: 15,
  },
  noText: {
    fontSize: 14,
    color: COLORS.greyDarkblue,
    letterSpacing: 0.3,
    opacity: 0.6,
  },
});

export default StudentItem;
