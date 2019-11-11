import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  AlertHeader,
  AlertCard,
  AlarmModal,
  SilenceModal,
} from 'appComponents/home';

import R from 'res/R';

// load resources: COLORS && PALETTE
const { COLORS, PALETTE } = R;

export default class AlertScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAlarmModalVisible: false,
      isSilenceModalVisible: false,
      reasonText: '',
    };
  }

  onPressAlarm = () => {
    this.setState({
      isAlarmModalVisible: true,
    });
  };

  onPressSilence = () => {
    this.setState({
      isSilenceModalVisible: true,
    });
  };

  dismissAlarmModal = () => {
    this.setState({
      isAlarmModalVisible: false,
    });
  };

  dismissSilenceModal = () => {
    this.setState({
      isSilenceModalVisible: false,
    });
  };

  onChangeReasonText = text => {
    this.setState({
      reasonText: text,
    });
  };

  render() {
    const navigation = this.props.navigation;
    const {
      isAlarmModalVisible,
      isSilenceModalVisible,
      reasonText,
    } = this.state;

    return (
      <View
        style={[
          PALETTE.body,
          {
            backgroundColor: COLORS.white,
          },
        ]}>
        {/** Header Section */}
        <AlertHeader
          onPressBack={() => {
            navigation.goBack();
          }}
          title={'Alert'}
        />
        <View style={[PALETTE.f1, PALETTE.mainPadding]}>
          {/** */}
          <AlertCard
            group={'3-A'}
            no={'271'}
            time={'03:21'}
            name={'Sergio Pliego'}
            onPressSilence={this.onPressSilence}
            onPressAlarm={this.onPressAlarm}
          />

          <AlertCard
            group={'3-A'}
            no={'271'}
            time={'03:21'}
            name={'Sergio Pliego'}
            onPressSilence={this.onPressSilence}
            onPressAlarm={this.onPressAlarm}
          />
        </View>

        <AlarmModal
          isModalVisible={isAlarmModalVisible}
          group={'3-A'}
          no={'271'}
          time={'03:21'}
          name={'Sergio Pliego'}
          dissmissModal={this.dismissAlarmModal}
        />

        <SilenceModal
          isModalVisible={isSilenceModalVisible}
          group={'3-A'}
          no={'271'}
          time={'03:21'}
          name={'Sergio Pliego'}
          dissmissModal={this.dismissSilenceModal}
          reasonText={reasonText}
          onChangeReasonText={this.onChangeReasonText}
        />
      </View>
    );
  }
}
