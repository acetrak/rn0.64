import React from 'react';
import { StyleSheet,   View, StatusBar, ScrollView ,Image} from 'react-native';
import { Appbar,Button, Banner,BottomNavigation, Text ,Chip  } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function Profile() {

  const [visible, setVisible] = React.useState(true);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <View style={{flex: 1}}>

      <Appbar.Header>

        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>

      <View style={styles.body}>

        <Banner
          visible={visible}
          actions={[
            {
              label: 'Fix it',
              onPress: () => setVisible(false),
            },
            {
              label: 'Learn more',
              onPress: () => setVisible(false),
            },
          ]}
          icon={({size}) => (
            <Image
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}>
          There was a problem processing a transaction on your credit card.
        </Banner>

        <Text>Profile</Text>

        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <Button icon="camera"  onPress={() => console.log('Pressed')}>
          Press me
        </Button>

        <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
          Press me
        </Button>


        <View style={styles.row}>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" mode={'outlined'} onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 15,
    flex:1,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  }
});
