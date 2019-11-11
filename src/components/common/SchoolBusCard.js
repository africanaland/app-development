import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SeparatorBar from './SeparatorBar';
import { DEVICE_WIDTH } from 'library/constants';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const AlertCard = ({
  time,
  name,
  alertTime,
  onPressCall,
  isShowButton,
  isBottomButton,
}) => {
  const [btnStyle, setBtnStyle] = useState({
    left: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
    center: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
    right: {
      backgroundColor: COLORS.white,
      color: COLORS.black,
    },
  });
  const [cardBgClr, setCardBgClr] = useState({
    backgroundColor: COLORS.white,
  });
  useEffect(() => {
    ThreeBtn(isBottomButton);
  }, []);
  const ThreeBtn = no => {
    switch (no) {
      case 1:
        setCardBgClr({ backgroundColor: COLORS.greyDark1 });
        setBtnStyle({
          left: {
            backgroundColor: COLORS.greenRaded,
            color: COLORS.white,
          },
          center: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
          right: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
        });
        break;
      case 2:
        setCardBgClr({ backgroundColor: COLORS.greyDark1 });
        setBtnStyle({
          left: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
          center: {
            backgroundColor: COLORS.redWatermelon,
            color: COLORS.white,
          },
          right: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
        });
        break;
      case 3:
        setCardBgClr({ backgroundColor: COLORS.greyDark1 });
        setBtnStyle({
          left: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
          center: {
            backgroundColor: COLORS.white,
            color: COLORS.black,
          },
          right: {
            backgroundColor: COLORS.greyDark,
            color: COLORS.white,
          },
        });
        break;
    }
  };
  return (
    <View style={[styles.cardWrapper, cardBgClr]}>
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
          <Text style={[styles.avatarText, PALETTE.text]}>{name}</Text>
        </View>

        {/** time icon && time */}
        <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
          <Image source={IMAGES.CLOCK} style={styles.time} />
          <Text style={[PALETTE.text, PALETTE.mediumRubik, styles.timeText]}>
            {alertTime}
          </Text>
        </View>
      </View>

      {/** location info section*/}
      <View style={[PALETTE.row, PALETTE.center, styles.locationWrapper]}>
        <TouchableOpacity onPress={onPressCall}>
          <View
            style={[PALETTE.row, PALETTE.secondaryCenter, styles.callSection]}>
            <Image source={IMAGES.PHONE_BLACK} style={styles.callIcon} />
            <Text style={[PALETTE.buttonText, styles.callText]}>{'Call'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={[PALETTE.row, PALETTE.secondaryCenter, styles.navSection]}>
            <Image source={IMAGES.MAP_BLACK} style={styles.navIcon} />
            <Text style={[PALETTE.buttonText, styles.callText]}>{'Nav'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <SeparatorBar
        width={'100%'}
        height={1}
        backgroundColor={COLORS.greyPaleTwo}
      />
      {isShowButton ? (
        <View style={[PALETTE.row, styles.buttonWrapper]}>
          {/** In button */}
          <TouchableOpacity
            onPress={() => ThreeBtn(1)}
            style={[
              PALETTE.f1,
              PALETTE.center,
              styles.bottomButton,
              styles.bottomLeftButton,
              styles.inBackground,
              btnStyle.left,
            ]}>
            <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
              <Text style={[PALETTE.text, styles.buttonText, btnStyle.left]}>
                {'IN'}
              </Text>
            </View>
          </TouchableOpacity>
          {/** Separator */}
          <SeparatorBar
            width={1}
            height={57}
            backgroundColor={COLORS.greyPaleTwo}
          />
          {/** Absent button */}
          <TouchableOpacity
            onPress={() => ThreeBtn(2)}
            style={[
              PALETTE.f1,
              PALETTE.center,
              styles.bottomButton,
              btnStyle.center,
            ]}>
            <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
              <Text style={[PALETTE.text, styles.buttonText, btnStyle.center]}>
                {'ABSENT'}
              </Text>
            </View>
          </TouchableOpacity>
          {/** Separator */}
          <SeparatorBar
            width={1}
            height={57}
            backgroundColor={COLORS.greyPaleTwo}
          />
          {/** Out button */}
          <TouchableOpacity
            onPress={() => ThreeBtn(3)}
            style={[
              PALETTE.f1,
              PALETTE.center,
              styles.bottomButton,
              styles.bottomRightButton,
              btnStyle.right,
            ]}>
            <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
              <Text style={[PALETTE.text, styles.buttonText, btnStyle.right]}>
                {'OUT'}
              </Text>
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
    marginTop: 19,
  },
  avatar: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  bottomButton: {
    height: 57,
    backgroundColor: COLORS.white,
  },
  bottomLeftButton: {
    borderBottomLeftRadius: 16,
  },
  bottomRightButton: {
    borderBottomRightRadius: 16,
  },
  time: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
  callIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  callText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#373737',
  },
  navIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  avatarText: {
    fontSize: 16,
    marginLeft: 9,
  },
  timeText: {
    fontSize: 14,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  buttonWrapper: {
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  callSection: {
    height: 29,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cecece',
    backgroundColor: COLORS.white,
    paddingHorizontal: (DEVICE_WIDTH / 375) * 16,
    marginLeft: (DEVICE_WIDTH / 375) * 40,
  },
  navSection: {
    height: 29,
    paddingHorizontal: (DEVICE_WIDTH / 375) * 16,
    marginRight: 20,
    marginLeft: DEVICE_WIDTH / 3.75,
    resizeMode: 'contain',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cecece',
    backgroundColor: COLORS.white,
  },
  locationWrapper: {
    marginTop: 18,
    marginBottom: 20,
  },
});

export default AlertCard;
