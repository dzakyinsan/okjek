import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeNav} from './HomeNav';
import {Account} from './../components/account';

const ScreenOption = ({route}) => {
  return {
    tabBarIcon: ({focused, color, size}, iconName = '') => {
      if (route.name === 'HomeNav') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Account') {
        iconName = focused ? 'account' : 'account-outline';
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  };
};

export const TabNav = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={ScreenOption}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        showLabel: false,
        showIcon: true,
      }}>
      <Tab.Screen name="HomeNav" component={HomeNav} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
