import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import AlertCardInfo from './AlertCardInfo';
import { ColorButton, SeparatorBar, GradientButton } from '../../common/';

import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const SilenceModal = ({
  isModalVisible,
  dissmissModal,
  group,
  no,
  time,
  name,

  // Textinput
  reasonText,
  onChangeReasonText,
}) => {
  return (
    <Modal
      style={PALETTE.modalStyle}
      isVisible={isModalVisible}
      swipeDirection={'down'}
      onSwipeComplete={dissmissModal}>
      <View style={[PALETTE.f1, PALETTE.primaryEnd]}>
        <View style={[PALETTE.swipeModalContainer, styles.swipeModalPadding]}>
          {/** knob */}
          <TouchableOpacity style={PALETTE.knob} onPress={dissmissModal} />

          <TouchableOpacity onPress={() => {}}>
            <Image
              source={IMAGES.LEFT_ARROW}
              style={[PALETTE.leftArrow, styles.arrow]}
            />
          </TouchableOpacity>

          {/** card info */}
          <AlertCardInfo
            group={group}
            no={no}
            time={time}
            name={name}
            backgroundColor={COLORS.greyPale}
            borderRadius={16}
          />

          <Text style={[PALETTE.mediumRubik, styles.reasonBigText]}>
            {'Reason'}
          </Text>

          <Text
            style={
              reasonText
                ? [
                    styles.reasonSmallText,
                    { color: COLORS.blueBlurple, opacity: 1 },
                  ]
                : [styles.reasonSmallText]
            }>
            {'Reason'}
          </Text>

          <TextInput
            placeholder={"What's the problem?"}
            value={reasonText}
            onChangeText={text => onChangeReasonText(text)}
          />

          <SeparatorBar
            width={'100%'}
            height={1}
            backgroundColor={reasonText ? COLORS.blueBurple : COLORS.greySlate}
            opacity={reasonText ? 1 : 0.4}
          />

          {!reasonText ? (
            <ColorButton
              text={'Cancel'}
              bgcolorName={'grey'}
              width={221}
              marginTop={20}
              onPress={() => {}}
            />
          ) : (
            <GradientButton
              text={'Silence Alert'}
              marginTop={20}
              bgcolorName={'blue'}
              width={221}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  reasonBigText: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.37,
    marginTop: 18,
  },
  reasonSmallText: {
    fontSize: 12,
    // color: COLORS.blueBlurple,
    opacity: 0.2,
    letterSpacing: 0.3,
    fontFamily: 'Helvetica',
    marginTop: 13,
  },
  textInput: {
    paddingVertical: 6,
    fontFamily: 'Helvetica',
    fontSize: 16,
    letterSpacing: 0.36,
  },
  arrow: {
    marginLeft: 19,
    marginBottom: 22,
  },
  swipeModalPadding: {
    paddingHorizontal: 16,
  },
});

export default SilenceModal;
