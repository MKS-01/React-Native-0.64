import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '_scenes/Home';
import EventPage from '_scenes/Home/EventPage';
import SavedScreen from '_scenes/Saved';
import HistoryScreen from '_scenes/History';
import AccountScreen from '_scenes/Account';

const RootTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator initialRouteName={'Feed'} headerMode="none">
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="EventPage" component={EventPage} />
    </HomeStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <RootTabs.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (route.name === 'Bookmarks') {
      //       iconName = focused ? 'bookmarks' : 'bookmarks';
      //     } else if (route.name === 'Search') {
      //       iconName = focused ? 'ios-search' : 'ios-search';
      //     }

      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}

      tabBarOptions={{
        // showLabel: false,
        // activeTintColor: '#3373fa',
        // inactiveTintColor: 'gray',

        style: {
          backgroundColor: 'rgba(34,34,36,0.95)',
          borderTopColor: 'rgba(34,34,36,0.95)',
          elevation: 0, //android
        },
      }}
      sceneContainerStyle={{
        backgroundColor: '#181b1c',
      }}>
      <RootTabs.Screen name="Home" component={Home} />
      <RootTabs.Screen name="Saved" component={SavedScreen} />
      <RootTabs.Screen name="History" component={HistoryScreen} />
      <RootTabs.Screen name="Account" component={AccountScreen} />
    </RootTabs.Navigator>
  );
};

export default AppNavigator;
