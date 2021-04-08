import {StyleSheet} from 'react-native';
import {configureFonts, Colors, DefaultTheme} from 'react-native-paper';
import color from 'color';

const common = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

const light = {
  ...DefaultTheme,
  ...common,
};

const dark = {
  dark: true,
  roundness: 4,
  mode: 'exact',
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#000',
    error: '#B00020',
    text: Colors.white,
    onSurface: '#000000',
    disabled: color(Colors.black).alpha(0.26).rgb().string(),
    placeholder: color(Colors.black).alpha(0.54).rgb().string(),
    backdrop: color(Colors.black).alpha(0.5).rgb().string(),
    notification: Colors.pinkA400,
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  ...common,
};

export default {
  dark, light,
};
