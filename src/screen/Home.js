import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Button, Header, ListItem, Avatar} from 'react-native-elements';
import {searchAction} from '../store/actions';
import FlexibleModal from '../components/FlexibleModal';

function Home(props) {
  const {navigation} = props;

  const [visible, setVisible] = useState(false);

  // console.log(JSON.stringify(props.muc));

  const list = props.muc;

  const fetch = () => {
    props.dispatch(searchAction());
  };

  const onClose = () => {
    setVisible(!visible);
  };

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Avatar source={{uri: item.album.artist.img1v1Url}} rounded />
      <ListItem.Content>
        <ListItem.Title>{item.album.name}</ListItem.Title>
        <ListItem.Subtitle>
          {item.artists.map(o => o.name).join('-')}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <SafeAreaView style={styles.body}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: '首页', style: {color: '#fff', fontSize: 18}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Text>Home</Text>
      <Button
        raised
        title="导航"
        onPress={() => navigation.navigate('Guide')}
      />
      <Button disabled={list.length} raised title="fetch" onPress={fetch} />

      <Button raised title="open modal" onPress={() => setVisible(!visible)} />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />

      <FlexibleModal visible={visible} onClose={onClose} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
export default connect(state => state)(Home);
