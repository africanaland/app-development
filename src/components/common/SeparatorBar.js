import React from 'react';
import { View } from 'react-native';

const SeparatorBar = ({
  width,
  height,
  backgroundColor,
  marginLeft,
  marginRight,
  opacity,
}) => {
  let basicStyle = {
    width,
    height,
    backgroundColor,
  };

  if (marginLeft) {
    basicStyle.marginLeft = marginLeft;
  }

  if (marginRight) {
    basicStyle.marginRight = marginRight;
  }

  if (opacity) {
    basicStyle.opacity = opacity;
  }

  return <View style={basicStyle} />;
};

export default SeparatorBar;
