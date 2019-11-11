import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import { StudentItem, SeparatorBar } from 'appComponents/common';
import SendToModal from '../../common/SendToModal';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS, IMAGES } = R;

const InClassModal = ({ isModalVisible, onShowModal, studentData }) => {
  const [searchText, setSearchText] = useState('');
  const [StudentData, setStudentData] = useState(studentData);
  const [sendToModalVisible, setSendToModalVisible] = useState(false);
  const [studentItem, setStudentItem] = useState({});

  const searchFilter = text => {
    const newData = studentData.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : '';
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setStudentData(newData);
    setSearchText(text);
  };

  // Show SendTo Modal
  const onShowSendToModal = (val, item) => {
    setSendToModalVisible(val);
    setStudentItem(item ? item : {});
  };

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onShowSendToModal(true, item);
        }}>
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
          <Image source={IMAGES.UP_RIGHT_BLACK} />
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
            <Text style={[PALETTE.text, styles.headerTitle]}>{'In Class'}</Text>
            <Image source={IMAGES.GROUP} style={styles.headerIcon} />
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
              {StudentData.length + ' Students'}
            </Text>
          </View>
          {/** Search InputText */}
          <View
            style={[PALETTE.row, PALETTE.secondaryCenter, styles.searchInput]}>
            <Image source={IMAGES.SEARCH} />
            <TextInput
              placeholder={'Search Student'}
              style={styles.textInput}
              placeholderTextColor={COLORS.greySlate}
              onChangeText={text => searchFilter(text)}
            />
          </View>
          {/** List Of Students */}
          <FlatList
            data={StudentData}
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

        {/** SendTo Modal */}
        <SendToModal
          isModalVisible={sendToModalVisible}
          onShowModal={onShowSendToModal}
          studentData={studentItem}
          onPressBack={() => onShowSendToModal(false)}
        />
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
  searchInput: {
    height: 60,
    marginHorizontal: -16,
    marginBottom: '2.6%',
    backgroundColor: COLORS.greyPale,
    opacity: 0.8,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  textInput: {
    fontSize: 16,
    marginHorizontal: '3.8%',
    letterSpacing: 0.3,
  },
});

export default InClassModal;
