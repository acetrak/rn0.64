import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from './Icon';
import { get } from 'lodash';

function DrawerItem({ navigation, label, pathName }) {

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation && navigation.closeDrawer();
        navigation && navigation.navigate(pathName);
      }}
      background={TouchableNativeFeedback.Ripple('#ccc', false)}
    >
      <View style={styles.item}>
        <Icon name="message-processing-outline" size={20} />
        <Text style={styles.itemText}>{label}</Text>
        <Icon name="arrow-right" size={20} />
      </View>
    </TouchableNativeFeedback>
  );
}

function ItemGroup(props) {
  const theme = useTheme();
  const backgroundColor = get(theme, 'colors.background');

  return (
    <View style={{ ...styles.group, backgroundColor }}>
      {props.children}
    </View>
  );
}

function CustomDrawerContent(props) {

  const { navigation, } = props;
  const gutter = 8;
  // 无法在此使用hook
  return (
    <View style={{ flex: 1 }}>

      <View style={{ ...styles.head, marginTop: StatusBar.currentHeight + 10, paddingHorizontal: gutter }}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-e73ebe5fb7fbae39d69ed94dcc82f145_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620799379&t=80e701ffbd801db8205b437c0f936257' }}
        />
        <View style={styles.headContent}>
          <Text style={styles.nickname}>nickname</Text>
          <Text>南宁</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: gutter }}>

        <ItemGroup>
          <DrawerItem navigation={navigation} label="设置" pathName="Setting" />
          <DrawerItem navigation={navigation} label="关于" pathName="About" />
          <DrawerItem />
        </ItemGroup>


        <ItemGroup>
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </ItemGroup>


        <ItemGroup>
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </ItemGroup>

        <ItemGroup>
          <DrawerItem />

          <DrawerItem />
        </ItemGroup>

        <ItemGroup>
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </ItemGroup>

        <ItemGroup>
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </ItemGroup>


        <ItemGroup>
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
          <DrawerItem />
        </ItemGroup>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headContent: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  nickname: {
    paddingBottom: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    paddingHorizontal: 8,
  },
  itemText: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
  },
  group: {
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#2b2b2b',
    overflow: 'hidden',
  },
});


export default CustomDrawerContent;
