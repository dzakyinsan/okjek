import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './../../helpers/types';

const INITIAL_STATE = {
  username: '',
  loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, username: payload};
    case LOGIN_FAILED:
      return {...state, username: payload, loading: false};
    default:
      return state;
  }
};
