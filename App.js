import 'react-native-gesture-handler';
import React from 'react';
import {Appearance} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ThemeProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import store from './src/store';
import theme from './src/theme';

// screen
import HomeScreen from './src/screen/Home';
import GuideScreen from './src/screen/Guide';
import ProfileScreen from './src/screen/Profile';
import NotificationsScreen from './src/screen/Notifications';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => Node = () => {



  React.useEffect(() => {

  }, []);


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer>
            {/*<Stack.Navigator initialRouteName="Home">*/}
            {/*  <Stack.Screen*/}
            {/*    name="Home"*/}
            {/*    options={{headerShown: false}}*/}
            {/*    component={HomeScreen}*/}
            {/*  />*/}
            {/*  <Stack.Screen name="Guide" component={GuideScreen} />*/}
            {/*</Stack.Navigator>*/}

            <Tab.Navigator
              initialRouteName="Feed"
              activeColor="#e91e63"
              barStyle={{backgroundColor: '#fff'}}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Guide" component={GuideScreen}
                options={{
                  tabBarLabel: 'Guide',
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                  ),
                }}
              />
              <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                  tabBarLabel: 'Updates',
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
