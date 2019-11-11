import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { CardTypeView } from '../common';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE } = R;

const NotificationModal = ({
  isModalVisible,
  onShowModal,
  time,
  title,
  description,
}) => {
  return (
    <Modal
      style={PALETTE.modalStyle}
      isVisible={isModalVisible}
      swipeDirection={'down'}
      onSwipeComplete={() => onShowModal(false)}>
      <View style={[PALETTE.f1, PALETTE.primaryEnd]}>
        <View style={[PALETTE.swipeModalContainer]}>
          {/** knob */}
          <TouchableOpacity
            style={PALETTE.knob}
            onPress={() => onShowModal(false)}
          />
          {/** header */}
          <View
            style={[
              PALETTE.row,
              PALETTE.primaryBetween,
              PALETTE.secondaryCenter,
            ]}>
            <CardTypeView cardType={'analytic'} />
            <Text style={[PALETTE.text, PALETTE.timeText]}>{time}</Text>
          </View>
          {/** title */}
          <Text style={[PALETTE.text, styles.titleText]}>{title}</Text>
          {/** description */}
          <Text style={[PALETTE.text, styles.descriptionText]}>
            {description}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    letterSpacing: 0.41,
    marginTop: 22,
  },
  descriptionText: {
    fontSize: 16,
    letterSpacing: 0.41,
    marginTop: 22,
  },
});

export default NotificationModal;
