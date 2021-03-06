import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { Avatar, Button, List, Switch, Text } from 'react-native-paper';
import { searchAction, toggleThemeAction } from '../store/actions';
import FlexibleModal from '../components/FlexibleModal';
import HomeHeader from '../components/HomeHeader';
import HeaderCarousel from '../components/HeaderCarousel';


function Home(props) {
  const { navigation } = props;

  const [visible, setVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(props.theme.theme === 'dark');


  const list = props.muc;


  const fetch = () => {
    props.dispatch(searchAction());
  };

  const onClose = () => {
    setVisible(!visible);
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item, separators }) => (
    <List.Item
      onPress={() => {
      }}
      title={item.album.name}
      description={item.artists.map(o => o.name).join('-')}
      left={props => <Avatar.Image {...props} source={{ uri: item.album.artist.img1v1Url }} />}
    />
  );

  const onSwitchChange = () => {

    props.dispatch(toggleThemeAction({ theme: isSwitchOn ? 'light' : 'dark' })).then(() => {
      setIsSwitchOn(!isSwitchOn);
    });

  };

  return (
    <View style={{ flex: 1 }}>

      <StatusBar translucent networkActivityIndicatorVisible backgroundColor="rgba(0,0,0,0.2)" />

      <HomeHeader />
      <HeaderCarousel />

      <View style={styles.body}>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.rowBetween}>
            <Text>黑暗模式</Text>
            <Switch value={isSwitchOn} onValueChange={onSwitchChange} />
          </View>


          <Button
            style={styles.mb10}
            mode="contained"
            onPress={() => navigation.navigate('PlayList')}
          >导航到PlayList页面</Button>

          <Button style={styles.mb10} disabled={list.length} mode="contained" onPress={fetch}>fetch</Button>

          <Button style={styles.mb10} mode="contained" onPress={() => setVisible(!visible)}>open modal</Button>
        </View>

        {/*<MyComponent />*/}
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />

      </View>
      <FlexibleModal visible={visible} onClose={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,

  },
  mb10: {
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
export default connect(state => state)(Home);
