import React from 'react';
import { Dimensions, StyleSheet, View, StatusBar } from 'react-native';
import { withTheme } from 'react-native-paper';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);


const FirRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#2e9a37' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  fir: FirRoute,


});

const Notifications = (props) => {

  const theme = props.theme;


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'fir', title: 'fir' },

  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: theme.colors.primary }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: theme.colors.primary, height: StatusBar.currentHeight }} />

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
  scene: {
    flex: 1,
  },
});

export default withTheme(Notifications);
