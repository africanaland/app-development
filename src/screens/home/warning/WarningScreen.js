import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import {
  WarningHeader,
  WarningItemOn,
  WarningItemOff,
  SendToModal,
} from 'appComponents/home';
import R from 'res/R';

// load resources: COLORS && PALETTE && IMAGE
const { COLORS, PALETTE, IMAGES } = R;
// Warning Students Data
const WARNING_DATA = [
  {
    name: 'Joel Gardner',
    no: 201,
    img: IMAGES.AVATAR_BOY,
    group: '3-A',
    time: '03:21',
    tardy: true,
  },
  {
    name: 'Melissa Morillo',
    no: 245,
    img: IMAGES.AVATAR_GIRL,
    group: '3-A',
    time: '03:21',
    tardy: false,
  },
  {
    name: 'Joel Gardner',
    no: 201,
    img: IMAGES.AVATAR_BOY,
    group: '3-A',
    time: '03:21',
    tardy: true,
  },
];

class WarningScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSendToModalVisible: false,
      studentData: {},
    };
  }

  // Show SendTo Modal
  onShowSendToModal = (val, item) => {
    this.setState({
      isSendToModalVisible: val,
      studentData: item ? item : {},
    });
  };

  render() {
    const navigation = this.props.navigation;
    const isModalVisible = this.state.isSendToModalVisible;
    const studentData = this.state.studentData;
    return (
      <View
        style={[
          PALETTE.body,
          {
            backgroundColor: COLORS.white,
          },
        ]}>
        {/** Header Section */}
        <WarningHeader
          onPressBack={() => {
            navigation.goBack();
          }}
        />

        {/** List of Students */}
        <View
          style={[
            PALETTE.f1,
            {
              backgroundColor: COLORS.greyPale,
            },
            styles.studentContentWrapper,
          ]}>
          {/** Header: Number of Students */}
          <View
            style={[
              PALETTE.row,
              PALETTE.secondaryCenter,
              styles.headerContentWrapper,
            ]}>
            <Image source={IMAGES.USER} style={styles.headerIcon} />
            <Text style={[PALETTE.text, styles.headerTitle]}>
              {WARNING_DATA.length + ' Students'}
            </Text>
          </View>
          {/** Students Card List */}
          <FlatList
            data={WARNING_DATA}
            renderItem={({ item, index }) =>
              item.tardy ? (
                <WarningItemOn item={item} />
              ) : (
                <WarningItemOff
                  item={item}
                  onPressSendTo={() => this.onShowSendToModal(true, item)}
                />
              )
            }
            keyExtractor={(item, index) => '' + index}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/** SendTo Modal */}
        <SendToModal
          isModalVisible={isModalVisible}
          onShowModal={this.onShowSendToModal}
          studentData={studentData}
          onPressBack={() => this.onShowSendToModal(false)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  studentContentWrapper: {
    paddingHorizontal: 16,
    paddingTop: 35.2,
  },
  headerContentWrapper: {
    width: '100%',
    marginLeft: 19,
    marginBottom: 20,
  },
  headerIcon: {
    width: 18,
    height: 20,
  },
  headerTitle: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default WarningScreen;
