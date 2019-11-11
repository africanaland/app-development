import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { CardAlert, CardCommon, CardRequest } from 'appComponents/common';
import { Alarm, TeacherHeader, NotificationModal } from 'appComponents/home';
import R from 'res/R';

// load resources: COLORS && PALETTE
const { COLORS, PALETTE } = R;

class TeacherMainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  onShowModal = val => {
    this.setState({
      isModalVisible: val,
    });
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
        <TeacherHeader
          onPressSearch={() => {}}
          onPressSetting={() => {
            this.props.navigation.navigate('SettingsScreen');
          }}
        />

        {/** Calendar Section */}

        <View
          style={[
            PALETTE.f1,
            {
              backgroundColor: COLORS.greyPale,
            },
          ]}>
          {/** Main Section */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[PALETTE.f1, PALETTE.mainPadding]}>
              <Alarm
                title={'Tüm Bildirimler'}
                description={'See all your unread notifications'}
                badgeCount={4}
                onPressBadge={() => {}}
              />

              <CardCommon
                cardType={'duyurular'}
                time={'2 hours ago'}
                title={'Okullar Kapanıyor'}
                content={
                  'Valiliğin aldığı karar ve olumsuz hava koşulları sebebiyle eğitime 1 (bir) gün ara verilmiştir.'
                }
                onPress={() => {}}
              />

              <CardCommon
                cardType={'analytic'}
                time={'3 days ago'}
                title={'Attendance Report'}
                content={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
                onPress={() => this.onShowModal(true)}
              />

              <CardCommon
                cardType={'duyurular'}
                time={'2 hours ago'}
                title={'Okullar Kapanıyor'}
                content={
                  'Valiliğin aldığı karar ve olumsuz hava koşulları sebebiyle eğitime 1 (bir) gün ara verilmiştir.'
                }
                onPress={() => {}}
              />

              <CardAlert
                time={'10min ago'}
                name={'Ayşe Metin'}
                alertTime={'03:21'}
                onPressSilence={() => {}}
                onPressAlarm={() => {}}
                isShowButton={true}
              />

              <CardRequest
                time={'2 hours ago'}
                name={'Ayşe Metin'}
                question={'Ayşe yarın okul sonrası etüde kalabilir mi?'}
                anotherName={'Zeynep Metin'}
                date={'14.10.2019'}
                book={'3.Ders'}
              />
            </View>
          </ScrollView>
        </View>
        <NotificationModal
          isModalVisible={this.state.isModalVisible}
          onShowModal={this.onShowModal}
          title={'Attendance Report'}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          time={'2 hours ago'}
        />
      </View>
    );
  }
}

export default TeacherMainScreen;
