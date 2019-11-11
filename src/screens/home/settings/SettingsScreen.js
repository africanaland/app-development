import React, { Component } from 'react';
import { View } from 'react-native';
import { SettingsHeader } from 'appComponents/home';
import { SettingsItemContent } from 'appComponents/home';
import R from 'res/R';

// load resources: COLORS && PALETTE && IMAGE
const { COLORS, PALETTE } = R;

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

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
        <SettingsHeader
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
          onPressSearch={() => {
            this.props.navigation.navigate('SearchScreen');
          }}
        />

        {/** Search Section */}

        <View
          style={[
            PALETTE.f1,
            {
              backgroundColor: COLORS.greyPale,
            },
          ]}>
          {/** Main Section */}
          <SettingsItemContent
            title={'Password'}
            subtitle={'Change The Password'}
          />
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
