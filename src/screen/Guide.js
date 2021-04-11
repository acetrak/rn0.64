import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Card, Paragraph, Searchbar, TextInput, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <Card style={styles.mb10}>
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


  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>

        <Appbar.Content title="Guide" />

      </Appbar.Header>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>



        <TextInput
          left={<TextInput.Icon name="alarm" />}
          right={<TextInput.Icon name="close" />}
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.mb10}
        />

        <Searchbar
          placeholder="Search"
          placeholderTextColor="#fff"
          onChangeText={query => {
            setFirstQuery(query);
          }}
          value={firstQuery}
          style={styles.mb10}
        />

        <Button
          style={styles.mb10}
          mode="contained"
          onPress={() => navigation.navigate('Setting')}
        >导航到Setting页面</Button>


        <MyComponent />
        <MyComponent />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 15,
    flex: 1,
  },
  mb10: {
    marginBottom: 10,
  },
});
