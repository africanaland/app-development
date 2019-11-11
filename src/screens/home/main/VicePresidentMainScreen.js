import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  VicePresidentHeader,
  VicePresidentListView,
  SendToModal,
} from 'appComponents/home';
import R from 'res/R';
import { DEVICE_WIDTH } from 'library/constants';
import { InClassModal, InfirmaryModal } from '../../../components/home';

// Load resources: COLORS && PALETTE
const { COLORS, PALETTE, IMAGES } = R;

// Student data for list view
const STUDENT_DATA = [
  { img: IMAGES.GROUP, classText: 'In Class', countText: 15 },
  { img: IMAGES.CLOCK_PINK, classText: 'Warning', countText: 3 },
  { img: IMAGES.FILE_PLUS, classText: 'Requests', countText: 4 },
  { img: IMAGES.ACTIVITY, classText: 'Infirmary', countText: 1 },
  { img: IMAGES.BOOK_BLUE, classText: 'Conselling', countText: 2 },
  { img: IMAGES.USER_X, classText: 'Out of School', countText: 3 },
];
// Student data for Search
const SEARCH_DATA = [
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
  { img: IMAGES.AVATAR_BOY, name: 'Toe Heftiba', no: '198' },
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
  { img: IMAGES.AVATAR_BOY, name: 'Toe Heftiba', no: '198' },
];
// Student data for Infirmary
const INFIRMARY_DATA = [
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
  { img: IMAGES.AVATAR_BOY, name: 'Toe Heftiba', no: '198' },
  { img: IMAGES.AVATAR_GIRL, name: 'Tyler Conllin', no: '245' },
];

export default class VicePresidentMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Live Overview' },
        { key: 'second', title: 'Daily' },
      ],
      isInClassModalVisible: false,
      isInfirmaryModalVisible: false,
    };
  }

  //Show In Class Modal
  onShowInClassModal = val => {
    this.setState({
      isInClassModalVisible: val,
    });
  };

  //Show Infirmary Modal
  onShowInfirmaryModal = val => {
    this.setState({
      isInfirmaryModalVisible: val,
    });
  };

  // onPressAlert
  onPressAlert = () => {
    this.props.navigation.navigate('AlertScreen');
  };
  // onPressInClass
  onPressInClass = () => this.onShowInClassModal(true);
  // onPressWarning
  onPressWarning = () => {
    this.props.navigation.navigate('WarningScreen');
  };
  // onPressRequests
  onPressRequests = () => {};
  // onPressInfirmary
  onPressInfirmary = () => this.onShowInfirmaryModal(true);
  // onPressConselling
  onPressConselling = () => {};
  // onPressOutofSchool
  onPressOutofSchool = () => {
    this.props.navigation.navigate('OutofSchoolScreen');
  };

  // Render list
  _renderList = () => (
    <VicePresidentListView
      studentData={STUDENT_DATA}
      onPressAlert={this.onPressAlert}
      onPressInClass={this.onPressInClass}
      onPressWarning={this.onPressWarning}
      onPressRequests={this.onPressRequests}
      onPressInfirmary={this.onPressInfirmary}
      onPressConselling={this.onPressConselling}
      onPressOutofSchool={this.onPressOutofSchool}
    />
  );

  // Render daily
  _renderDaily = () => (
    <View style={[PALETTE.f1, PALETTE.mainPadding, styles.tabContainer]} />
  );

  // Render Tabbar
  renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: COLORS.redRouge }}
        style={PALETTE.tabBar}
        renderLabel={({ route, focused, color }) => (
          <Text
            style={
              !focused
                ? [PALETTE.tabText, PALETTE.inActiveTabText]
                : [PALETTE.tabText, PALETTE.activeTabText]
            }>
            {route.title}
          </Text>
        )}
      />
    );
  };

  render() {
    return (
      <View
        style={[
          PALETTE.body,
          {
            backgroundColor: COLORS.white,
          },
        ]}>
        {/** Header Section */}
        <VicePresidentHeader
          onPressSearch={() => {}}
          onPressPrimary={() => {}}
          title={'Reports'}
        />

        {/** Main section */}
        <View style={[PALETTE.f1]}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: this._renderList,
              second: this._renderDaily,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: DEVICE_WIDTH }}
            renderTabBar={this.renderTabBar}
          />
        </View>

        {/** InClass Modal */}
        <InClassModal
          isModalVisible={this.state.isInClassModalVisible}
          onShowModal={this.onShowInClassModal}
          studentData={SEARCH_DATA}
        />

        {/** Infirmary Modal */}
        <InfirmaryModal
          isModalVisible={this.state.isInfirmaryModalVisible}
          onShowModal={this.onShowInfirmaryModal}
          studentData={INFIRMARY_DATA}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
