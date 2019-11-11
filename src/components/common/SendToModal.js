import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { StudentItem } from 'appComponents/common';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const SendToModal = ({
  isModalVisible,
  onShowModal,
  onPressBack,
  studentData,
}) => {
  return (
    <Modal
      style={PALETTE.modalStyle}
      isVisible={isModalVisible}
      swipeDirection={'down'}
      onSwipeComplete={() => onShowModal(false)}>
      <View style={[PALETTE.f1, PALETTE.primaryEnd]}>
        <View style={[PALETTE.swipeModalContainer, styles.modalWrapper]}>
          {/** knob */}
          <TouchableOpacity
            style={PALETTE.knob}
            onPress={() => onShowModal(false)}
          />

          {/** Header */}
          <TouchableOpacity onPress={onPressBack}>
            <View style={[PALETTE.row, PALETTE.secondaryCenter]}>
              <Image source={IMAGES.LEFT_ARROW} style={styles.headerIcon} />
            </View>
          </TouchableOpacity>

          {/** Student Info */}
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              PALETTE.primaryBetween,
              styles.bottomMargin,
            ]}>
            <StudentItem
              title={studentData.name}
              no={studentData.no}
              img={studentData.img}
              paddingHorizontal={1}
              isTouchable={false} // check if student item is checkable or not
            />
          </View>

          {/** Send To Button */}
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[
                PALETTE.row,
                PALETTE.secondaryCenter,
                PALETTE.primaryBetween,
                styles.buttons,
                styles.focusButton,
              ]}>
              <View>
                <Text style={styles.buttonTitle}>{'Send To'}</Text>
                <Text style={styles.buttonSubTitle}>
                  {'See all your unread notifications'}
                </Text>
              </View>
              <Image source={IMAGES.UP_RIGHT_PINK} />
            </View>
          </TouchableOpacity>

          {/** Infirmary Button */}
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[PALETTE.row, PALETTE.secondaryCenter, styles.buttons]}>
              <Text style={styles.buttonTitle}>{'Infirmary'}</Text>
            </View>
          </TouchableOpacity>

          {/** Infirmary Button */}
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[PALETTE.row, PALETTE.secondaryCenter, styles.buttons]}>
              <Text style={styles.buttonTitle}>{'Conselling'}</Text>
            </View>
          </TouchableOpacity>

          {/** Infirmary Button */}
          <TouchableOpacity onPress={() => {}}>
            <View
              style={[PALETTE.row, PALETTE.secondaryCenter, styles.buttons]}>
              <Text style={styles.buttonTitle}>{'Vice Principal'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: COLORS.greyPale,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  focusButton: {
    paddingHorizontal: 24,
  },
  buttons: {
    paddingHorizontal: 34,
    paddingVertical: 18,
    marginBottom: 7,
    backgroundColor: COLORS.white,
    borderRadius: 16,
  },
  buttonTitle: {
    color: COLORS.greySlate,
    letterSpacing: 0.3,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },
  buttonSubTitle: {
    marginTop: 4,
    color: COLORS.greyBlueCloudy,
    fontSize: 12,
    letterSpacing: 0.3,
  },
  bottomMargin: {
    marginBottom: 30,
  },
});

export default SendToModal;
