import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight, StatusBar, View,
  Image,
} from 'react-native';
import { Button, List, Appbar, Avatar, Switch } from 'react-native-paper';
import { searchAction } from '../store/actions';
import FlexibleModal from '../components/FlexibleModal';

function Home(props) {
  const { navigation } = props;

  const [visible, setVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);


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
      title={item.album.name}
      description={item.artists.map(o => o.name).join('-')}
      left={props => <Avatar.Image {...props} source={{ uri: item.album.artist.img1v1Url }} />}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#6200ee" />
      <Appbar.Header>

        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <View style={styles.body}>


        <Text>Home</Text>
        <View style={styles.rowBetween}>
          <Text>黑暗模式</Text>
          <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
        </View>


        <Button
          mode="contained"
          onPress={() => navigation.navigate('Guide')}
        >导航</Button>
        <Button disabled={list.length} mode="contained" onPress={fetch}>fetch</Button>

        <Button mode="contained" onPress={() => setVisible(!visible)}>open modal</Button>

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
    paddingHorizontal: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
export default connect(state => state)(Home);
