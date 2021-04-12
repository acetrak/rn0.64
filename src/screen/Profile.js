import React from 'react';
import { StatusBar, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Appbar, Button, Chip, Snackbar, Text } from 'react-native-paper';


export default function Profile() {

  const [visible, setVisible] = React.useState(false);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{flex: 1}}>
      <Appbar.Header statusBarHeight={StatusBar.currentHeight}>
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>

      <View style={styles.body}>
        <Button
          style={styles.mb10}
          mode="contained"
          onPress={() => setVisible(state => !state)}
        >
          {visible ? 'Hide Searchbar' : 'Show Searchbar'}
        </Button>

        <Snackbar
          visible={visible}
          onDismiss={() => setVisible(state => !state)}
          action={{
            label: 'Undo',

            onPress: () => {
              // Do something
            },
          }}
        >
          <Text style={{color:'#fff'}}>Hey there! I'm a Snackbar.</Text>
        </Snackbar>


        <View style={{...styles.row,...styles.mb10}}>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" mode={'outlined'} onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
        </View>


        <TouchableNativeFeedback
          onPress={() => {

          }}
          background={TouchableNativeFeedback.Ripple('#ccc', false)}
        >
          <View style={styles.touchable}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical:15,
    flex:1,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  },
  touchable: {  borderColor: "black", borderWidth: 1 ,width:180,height:50},
  text: { alignSelf: "center" },
  mb10:{
    marginBottom:10
  }
});
