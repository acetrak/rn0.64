import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { TextInput ,Searchbar,Snackbar  ,Button ,Avatar,  Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default function Guide() {
  const [text, setText] = React.useState('');
  const [firstQuery, setFirstQuery] = React.useState('');
  const [visible , setVisible ] = React.useState(false);

  return (
    <View style={styles.body}>
      <Text>Guide</Text>

      <TextInput
        dense
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />

      <Searchbar
        placeholder="Search"
        onChangeText={query => { setFirstQuery(query); }}
        value={firstQuery}
      />

      <Button
        onPress={() => setVisible(state => !state)}
      >
        {visible ? 'Hide' : 'Show'}
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
        Hey there! I'm a Snackbar.
      </Snackbar>

      <MyComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 15,
    flex:1,
    backgroundColor:'#fff'
  },
});
