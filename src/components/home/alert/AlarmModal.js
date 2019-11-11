import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import GradientButton from '../../common/GradientButton';
import ColorButton from '../../common/ColorButton';
import AlertCardInfo from './AlertCardInfo';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE } = R;

const AlarmModal = ({
  isModalVisible,
  group,
  no,
  time,
  name,
  dissmissModal,
}) => {
  return (
    <Modal isVisible={isModalVisible} style={[PALETTE.modalStyle]}>
      <View style={PALETTE.popupModalContainer}>
        <AlertCardInfo group={group} no={no} time={time} name={name} />
        <GradientButton
          text={'Alarm Emergency Team'}
          bgcolorName={'red'}
          width={221}
        />
        <ColorButton
          text={'Cancel'}
          bgcolorName={'grey'}
          width={221}
          marginTop={20}
          onPress={dissmissModal}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default AlarmModal;
