import React from 'react';
import { StatusBar, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

export default function ({navigation}) {
  return (
    <View>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="About" />

      </Appbar.Header>

      <Text> About</Text>
    </View>
  );
}
