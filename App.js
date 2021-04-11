import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, Provider } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { get } from 'lodash';

import store from './src/store';
import themePattern from './src/theme';
import { toggleThemeAction } from './src/store/actions';
import { getData } from './src/utils/utils';

// screen
import HomeScreen from './src/screen/Home';
import GuideScreen from './src/screen/Guide';
import ProfileScreen from './src/screen/Profile';
import NotificationsScreen from './src/screen/Notifications';
import SettingScreen from './src/screen/pages/Setting';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs({ theme }) {

  const barBackgroundColor = get(theme, 'colors.surface', '#fff');
  const activeColor = get(theme, 'colors.activeColor', '#fff');

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={activeColor}
      barStyle={{ backgroundColor: barBackgroundColor }}
      inactiveColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#673ab7',
        }}
      />
      <Tab.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          tabBarLabel: 'Guide',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarColor: '#00bcd4',
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: '#009688',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          tabBarColor: '#3949ab',
        }}
      />
    </Tab.Navigator>
  );
}

const Layout = (props) => {
  const themeType = props.theme;

  console.log('Layout', props);
  const theme = React.useMemo(
    () => themePattern[themeType],
    [themeType],
  );

  const Tabs = () => <HomeTabs theme={theme} />;

  React.useEffect(async () => {
    const local = await getData('theme');
    if (['light', 'dark'].includes(local)) {
      props.dispatch(toggleThemeAction({ theme: local }));
    }
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // 修改默认页面背景和其它 https://reactnavigation.org/docs/themes
      background: get(theme, 'colors.body', 'rgb(242, 242, 242)'),
      card: get(theme, 'colors.primary', 'rgb(255, 255, 255)'),
      text: '#fff',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Tabs}
            />
            {/*在以下添加其它路由*/}
            {/*https://reactnavigation.org/docs/hiding-tabbar-in-screens/*/}
            <Stack.Screen name="Setting" component={SettingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const ConLayout = connect(state => state.theme)(Layout);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <ConLayout />
    </Provider>
  );
};
export default App;
