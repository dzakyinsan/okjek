import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
// import {useDispatch} from 'react-redux';
import WelcomeForm from './../components/welocmeForm';
import RegisterForm from './../components/registerForm';
import LoginForm from './../components/loginForm';
import {TabNav} from './TabNav';

export default MainNavigation = (props) => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator initialRouteName="welcomeForm" headerMode="none">
        <Stack.Screen name="welcomeForm" component={WelcomeForm} />
        <Stack.Screen name="registerForm" component={RegisterForm} />
        <Stack.Screen name="loginForm" component={LoginForm} />
        <Stack.Screen name="TabNav" component={TabNav} />
      </Stack.Navigator>
    </>
  );
};
