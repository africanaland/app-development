import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import R from 'res/R';

// Load resources: COLORS && PALETTE
const { COLORS, PALETTE } = R;

// Student Card
const StudentItem = ({ img, classText, countText, studentText }) => {
  return (
    <View style={[styles.cardContainer]}>
      <Image source={img} style={styles.img} />
      <Text style={[PALETTE.text, styles.classText]}>{classText}</Text>
      <Text style={[PALETTE.text, styles.countText]}>{countText}</Text>
      <Text style={[PALETTE.text, styles.studentText]}>{studentText}</Text>
    </View>
  );
};

const VicePresidentListView = ({
  studentData,
  onPressAlert,
  onPressInClass,
  onPressWarning,
  onPressRequests,
  onPressInfirmary,
  onPressConselling,
  onPressOutofSchool,
}) => {
  return (
    <View style={[PALETTE.f1, PALETTE.mainPadding, styles.tabContainer]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** Title Section*/}
        <Text style={[PALETTE.text, styles.tabTitle]}>
          {'Pazartesi 12.20.2019'}
        </Text>
        <Text style={[styles.lessionTitle]}>
          {'1.Ders - '}
          <Text style={[styles.lessionInfo]}>{'3/7 Alındı'}</Text>
        </Text>

        {/** Alert button section: Yellow Gradient Button */}
        <TouchableOpacity
          style={[PALETTE.center, styles.alertButton, styles.alertShadow]}
          onPress={onPressAlert}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[COLORS.yellowSunflower, COLORS.yellowOrange]}
            style={[styles.gradientStyle, PALETTE.center]}>
            <Text style={[PALETTE.text, styles.alertText]}>{'Alert'}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/** Card list */}
        <View style={[PALETTE.row, PALETTE.primaryBetween]}>
          {/** In Class */}
          <TouchableOpacity onPress={onPressInClass}>
            <StudentItem
              img={studentData[0].img}
              classText={studentData[0].classText}
              countText={studentData[0].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
          {/** Warning */}
          <TouchableOpacity onPress={onPressWarning}>
            <StudentItem
              img={studentData[1].img}
              classText={studentData[1].classText}
              countText={studentData[1].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
        </View>
        <View style={[PALETTE.row, PALETTE.primaryBetween]}>
          {/** Requests */}
          <TouchableOpacity onPress={onPressRequests}>
            <StudentItem
              img={studentData[2].img}
              classText={studentData[2].classText}
              countText={studentData[2].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
          {/** Infirmary */}
          <TouchableOpacity onPress={onPressInfirmary}>
            <StudentItem
              img={studentData[3].img}
              classText={studentData[3].classText}
              countText={studentData[3].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
        </View>
        <View style={[PALETTE.row, PALETTE.primaryBetween]}>
          {/** Conselling */}
          <TouchableOpacity onPress={onPressConselling}>
            <StudentItem
              img={studentData[4].img}
              classText={studentData[4].classText}
              countText={studentData[4].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
          {/** Out of School */}
          <TouchableOpacity onPress={onPressOutofSchool}>
            <StudentItem
              img={studentData[5].img}
              classText={studentData[5].classText}
              countText={studentData[5].countText}
              studentText={'Student'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.greyPale,
  },
  tabTitle: {
    fontSize: 14,
    letterSpacing: 0.3,
    marginTop: 31,
  },
  lessionTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Bold',
    letterSpacing: 0.37,
    color: COLORS.greySlate,
  },
  lessionInfo: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    letterSpacing: 0.37,
    color: COLORS.blueBright,
  },
  gradientStyle: {
    width: '100%',
    height: 73.9,
    borderRadius: 16,
  },
  alertButton: {
    marginTop: 20,
    borderRadius: 16,
  },
  alertShadow: {
    shadowColor: COLORS.yellowOrange,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    elevation: 4,
  },
  alertText: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.34,
    color: COLORS.white,
  },
  cardContainer: {
    marginTop: 18,
    width: 144,
    height: 144,
    paddingHorizontal: 24,
    paddingVertical: 22,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.greySlate,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  img: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  classText: {
    marginTop: 9,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.28,
  },
  countText: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.38,
  },
  studentText: {
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 0.3,
    color: COLORS.greyBlueCloudy,
  },
});

export default VicePresidentListView;
