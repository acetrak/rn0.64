import { StyleSheet } from 'react-native';
import { configureFonts, Colors } from 'react-native-paper';
import color from 'color';

const theme = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default {
  dark: false,
  roundness: 4,
  mode:'exact',
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: Colors.white,
    error: '#B00020',
    text: Colors.black,
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
  ...theme,
};
