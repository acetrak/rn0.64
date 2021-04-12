import {StyleSheet} from 'react-native';
import {configureFonts, Colors} from 'react-native-paper';
import color from 'color';

// 主题配置 https://callstack.github.io/react-native-paper/theming.html
const common = StyleSheet.create({
  heading1: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const light = {
  dark: false,
  roundness: 4,
  mode: 'exact',
  colors: {
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#fff',
    error: '#B00020',
    text: Colors.black,
    onSurface: '#000000',
    disabled: color(Colors.black).alpha(0.26).rgb().string(),
    placeholder: color(Colors.black).alpha(0.54).rgb().string(),
    backdrop: color(Colors.black).alpha(0.5).rgb().string(),
    notification: Colors.pinkA400,
    body:'#fff',
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
  ...common,
};

const dark = {
  dark: true,
  roundness: 4,
  mode: 'exact',
  colors: {
    primary: '#0074c0',
    accent: '#03dac4',
    background: '#2b2b2b',
    surface: '#151515',
    error: '#B00020',
    text: Colors.white,
    onSurface: '#151515',
    disabled: color(Colors.black).alpha(0.26).rgb().string(),
    placeholder: color(Colors.black).alpha(0.54).rgb().string(),
    backdrop: color(Colors.black).alpha(0.5).rgb().string(),
    notification: Colors.pinkA400,
    body:'#080808',
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
