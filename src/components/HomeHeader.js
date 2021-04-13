import { View, StatusBar, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {


  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View
      style={{
        ...styles.bar,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: theme.colors.primary,
      }}
    >
      <IconButton
        icon="menu"
        color="#fff"
        onPress={navigation.toggleDrawer}
      />

      <Text style={styles.title}>Wel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeHeader;
