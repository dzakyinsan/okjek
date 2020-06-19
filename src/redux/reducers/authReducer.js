import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './../../helpers/types';

const INITIAL_STATE = {
  username: '',
  loading: false,
  authChecked: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, username: payload, authChecked: true};
    case LOGIN_FAILED:
      return {...state, username: payload, authChecked: true};
    default:
      return state;
  }
};
