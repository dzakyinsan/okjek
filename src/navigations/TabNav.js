import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Icon} from 'react-native-elements';

import {HomeNav} from './HomeNav';
import {Account} from './../components/account';
// import Tab from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const ScreenOption = ({route}) => {
  return {
    tabBarIcon: ({focused, color, size}, iconName = '', iconName2 = '') => {
      if (route.name === 'HomeNav') {
        iconName = focused ? 'home' : 'home';
        return <Icon name={iconName} size={size} color={color} />;
      } else if (route.name === 'Account') {
        iconName2 = focused ? 'account' : 'account';
        return <Icon2 name={iconName2} size={size} color={color} />;
      }
      //   return <Icon name={iconName} size={size} color={color} />;
    },
  };
};

export const TabNav = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      ScreenOptions={ScreenOption}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        // showLabel: false,
      }}>
      <Tab.Screen name="HomeNav" component={HomeNav} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
