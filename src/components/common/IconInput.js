import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import R from 'res/R';

// load resources: PALETTE, COLORS, IMAGES
const { PALETTE, COLORS } = R;

const IconInput = ({ text, icon, width, marginTop }) => {
  return (
    <View style={styles.SectionStyle}>
      <TextInput
          style={[PALETTE.text, styles.TextInputStyle]}
          placeholder={text}
          underlineColorAndroid="transparent"
      />
      <Text style={styles.ImageStyle}>{icon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    borderWidth: 0,
    height: 40,
    borderRadius: 5 ,
    paddingLeft:10,
    marginBottom: 10,
    marginTop: 10,
  },
  TextInputStyle: {
    flex: 1,
    color: COLORS.textcolorgrey,
  },
  ImageStyle: {
      fontFamily: 'Font Awesome 5 Free-Solid-900', 
      fontWeight: "100",
      paddingRight: 10,
      fontSize: 20 
  }, 
});
export default IconInput;
