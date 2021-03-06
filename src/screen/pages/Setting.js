import React from 'react';
import { StatusBar, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

export default function(props) {

  const { navigation } = props;
  return (
    <View>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Setting" />

      </Appbar.Header>

      <Text> Setting</Text>
    </View>
  );
}
