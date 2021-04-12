import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { get } from 'lodash';


function Icon(props) {
  const theme = useTheme();
  const color = get(theme, 'colors.text');
  return <MaterialCommunityIcons color={color} {...props} />;
}

export default Icon;
