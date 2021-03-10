import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './../components/Home';
import Topup from './../components/topup';

export const HomeNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Topup" component={Topup} />
    </Stack.Navigator>
  );
};
