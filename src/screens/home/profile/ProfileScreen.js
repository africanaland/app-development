import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ProfileHeader, SeparatorBar } from 'appComponents/home';
import R from 'res/R';
import { TouchableOpacity } from 'react-native-gesture-handler';

// load resources: COLORS && PALETTE && IMAGE
const { COLORS, IMAGES, PALETTE } = R;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={[
          PALETTE.body,
          {
            backgroundColor: COLORS.bluePastel,
          },
        ]}>
        {/** Header Section */}
        <ProfileHeader
          onPressBack={() => {
            navigation.goBack();
          }}
          onPressSetting={() => {
            navigation.navigate('SettingsScreen');
          }}
        />
        {/** Profile Section */}
        <View style={PALETTE.center}>
          <Image source={IMAGES.AVATAR_GIRL} style={styles.avatarStyle} />
          <Text style={[PALETTE.regularRubik, styles.profileName]}>
            {navigation.getParam('profileName', 'NO-Name')}
          </Text>
          <View style={PALETTE.row}>
            <Text style={[PALETTE.mediumRubik, styles.profileLesson]}>
              {navigation.getParam('profileLesson', 'NO-Lesson')}
            </Text>
            <View style={styles.seperateLine} />
            <Text style={[PALETTE.mediumRubik, styles.profileLesson]}>4A</Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              colors={[COLORS.yellowSunflower, COLORS.yellowOrange]}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>In Class</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={[
            PALETTE.f1,
            {
              backgroundColor: COLORS.greyPale,
            },
          ]}>
          {/** Absent Section */}
          <View style={styles.profileContent}>
            <View
              style={[
                PALETTE.row,
                PALETTE.primaryBetween,
                PALETTE.secondaryCenter,
                styles.searchItemContentWrapper,
              ]}>
              {/** Left side */}
              <View style={[PALETTE.row, PALETTE.center]}>
                {/** Avatar Title */}
                <Image source={IMAGES.USER_X1} style={styles.itemStyle} />
                <Text
                  style={[
                    PALETTE.text,
                    PALETTE.regularRubik,
                    styles.searchItemTitle,
                  ]}>
                  {'Absent'}
                </Text>
              </View>
              <View>
                <Text style={[PALETTE.mediumRubik, styles.fontSize20]}>5</Text>
              </View>
            </View>
            {/** Bottom Split Line */}
            <SeparatorBar
              width={'100%'}
              height={1}
              backgroundColor={COLORS.greySlate}
              marginLeft={0}
              marginRight={0}
              opacity={0.2}
            />
          </View>
          {/** Tardy Section */}
          <View style={styles.profileContent}>
            <View
              style={[
                PALETTE.row,
                PALETTE.primaryBetween,
                PALETTE.secondaryCenter,
                styles.searchItemContentWrapper,
              ]}>
              {/** Left side */}
              <View style={PALETTE.row}>
                {/** Avatar Title */}
                <Image source={IMAGES.TIMER_PROFILE} style={styles.itemStyle} />
                <Text
                  style={[
                    PALETTE.text,
                    PALETTE.regularRubik,
                    styles.searchItemTitle,
                  ]}>
                  {'Tardy'}
                </Text>
              </View>
              <View>
                <Text style={[PALETTE.mediumRubik, styles.fontSize20]}>5</Text>
              </View>
            </View>
            {/** Bottom Split Line */}
            <SeparatorBar
              width={'100%'}
              height={1}
              backgroundColor={COLORS.greySlate}
              marginLeft={0}
              marginRight={0}
              opacity={0.2}
            />
          </View>
          {/** Tardy Section */}
          <View style={styles.profileContent}>
            <View
              style={[
                PALETTE.row,
                PALETTE.primaryBetween,
                PALETTE.secondaryCenter,
                styles.searchItemContentWrapper,
              ]}>
              {/** Left side */}
              <View style={PALETTE.row}>
                {/** Avatar Title */}
                <Image source={IMAGES.FILE_TEXT} style={styles.itemStyle} />
                <Text
                  style={[
                    PALETTE.text,
                    PALETTE.regularRubik,
                    styles.searchItemTitle,
                  ]}>
                  {'Permitted (All)'}
                </Text>
              </View>
              <View>
                <Text style={[PALETTE.mediumRubik, styles.fontSize20]}>5</Text>
              </View>
            </View>
          </View>
          {/** Four Item Section */}
          <View style={styles.tilePadding}>
            <View style={PALETTE.row}>
              {/** Out of School Btn */}
              <View style={PALETTE.f1}>
                <TouchableOpacity style={[styles.tileSetting, PALETTE.center]}>
                  <Image source={IMAGES.LOGOUT} style={styles.tileImage} />
                  <Text style={[PALETTE.text, styles.tileText]}>
                    {'Out of School'}
                  </Text>
                </TouchableOpacity>
              </View>
              {/** Trady/Late Paper Btn */}
              <View style={PALETTE.f1}>
                <TouchableOpacity style={[styles.tileSetting, PALETTE.center]}>
                  <Image source={IMAGES.TIMER_RED} style={styles.tileImage} />
                  <Text style={[PALETTE.text, styles.tileText]}>
                    {'Tardy/ Late Paper'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={PALETTE.row}>
              {/** Create Request Btn */}
              <View style={PALETTE.f1}>
                <TouchableOpacity style={[styles.tileSetting, PALETTE.center]}>
                  <Image
                    source={IMAGES.FILE_PLUS_YELLOW}
                    style={styles.tileImage}
                  />
                  <Text style={[PALETTE.text, styles.tileText]}>
                    {'Create Request'}
                  </Text>
                </TouchableOpacity>
              </View>
              {/** Send To Btn */}
              <View style={PALETTE.f1}>
                <TouchableOpacity style={[styles.tileSetting, PALETTE.center]}>
                  <Image source={IMAGES.UP_RIGHT} style={styles.tileImage} />
                  <Text style={[PALETTE.text, styles.tileText]}>
                    {'Send To'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  fontSize20: {
    fontSize: 20,
  },
  profileContent: {
    paddingHorizontal: 44,
  },
  linearGradient: {
    borderRadius: 4,
    marginTop: 25,
    marginBottom: 21,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 7,
    marginRight: 7,
    color: COLORS.greySlate,
    letterSpacing: 0.3,
  },
  avatarStyle: {
    width: 100,
    height: 100,
    marginTop: -32,
  },
  profileName: {
    fontSize: 30,
    color: COLORS.white,
    marginBottom: 9,
    letterSpacing: 0.56,
  },
  profileLesson: {
    fontSize: 18,
    color: COLORS.white,
    letterSpacing: 0.39,
  },
  seperateLine: {
    width: 1,
    height: 25,
    opacity: 0.84,
    backgroundColor: COLORS.white,
    marginLeft: 7,
    marginRight: 7,
  },
  searchItemContentWrapper: {
    width: '100%',
    height: 76,
    paddingTop: 27,
    paddingBottom: 24,
  },
  searchItemTitle: {
    fontSize: 16,
    marginTop: 2,
  },
  itemStyle: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  tilePadding: {
    padding: 12,
  },
  tileSetting: {
    margin: 4,
    paddingTop: 34,
    paddingBottom: 34,
    borderRadius: 7,
    shadowRadius: 6,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  tileText: {
    fontSize: 12,
    color: '#888898',
    letterSpacing: 0.3,
  },
  tileImage: {
    width: 24,
    height: 24,
    marginBottom: 9,
  },
});

export default ProfileScreen;
