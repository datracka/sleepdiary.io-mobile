import {List} from 'immutable'
import {LOGIN_USER_PENDING, LOGIN_USER_REJECTED, LOGIN_USER_FULFILLED} from '../constants';

const initialState = {
  email: 'datracka@gmail.com',
  password: '123456a',
  fetching: false,
  fetched: false,
  error: null,
  message: null,
  data: null
}

export default function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        fetching: true
      };
      break;
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload.data,
        message: action.payload.message
      };
      break;
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      };
      break;
    default:
      return state;
  }
}