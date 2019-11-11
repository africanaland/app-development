import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import { StudentItem, SeparatorBar } from 'appComponents/common';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const InfirmaryModal = ({ isModalVisible, onShowModal, studentData }) => {
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View
          style={[
            PALETTE.row,
            PALETTE.secondaryCenter,
            PALETTE.primaryBetween,
          ]}>
          <StudentItem
            title={item.name}
            no={item.no}
            img={item.img}
            bgColor={COLORS.white}
            paddingHorizontal={1}
            isTouchable={false} // check if student item is checkable or not
          />
        </View>
      </TouchableOpacity>
    );
  };

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

          {/** Header */}
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              PALETTE.primaryBetween,
            ]}>
            <Text style={[PALETTE.text, styles.headerTitle]}>
              {'Infirmary'}
            </Text>
            <Image source={IMAGES.ACTIVITY} style={styles.headerIcon} />
          </View>

          {/** Number Of Students */}
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              styles.studentsNumber,
            ]}>
            <Image source={IMAGES.USER} style={styles.studentsIcon} />
            <Text style={[PALETTE.groupItemTitle, PALETTE.text]}>
              {studentData.length + ' Students'}
            </Text>
          </View>

          {/** List Of Students */}
          <FlatList
            data={studentData}
            renderItem={_renderItem}
            keyExtractor={(item, index) => '' + index}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <SeparatorBar
                width={'100%'}
                height={1}
                backgroundColor={COLORS.greyPaleTwo}
              />
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    letterSpacing: 0.37,
  },
  headerIcon: {
    width: 24,
    height: 20,
    resizeMode: 'contain',
  },
  studentsNumber: {
    paddingTop: 19,
    paddingBottom: 27,
  },
  studentsIcon: {
    width: 18,
    height: 20,
    marginRight: 15,
  },
});

export default InfirmaryModal;
