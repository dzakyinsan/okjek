import AsyncStorage from '@react-native-community/async-storage';

import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './../../helpers/types';
import {Alert} from 'react-native';

export const onUserLogin = (username) => {
  return async (dispatch) => {
    dispatch({type: LOGIN_LOADING}); //change loading into true
    if (username !== '') {
      await AsyncStorage.setItem('username', username);

      setTimeout(() => {
        dispatch({type: LOGIN_SUCCESS, payload: username});
      });
    } else {
      dispatch({type: LOGIN_FAILED});
    }
  };
};

export const onUserLogout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem('username');
    dispatch({type: LOGIN_FAILED, payload: ''});
  };
};
