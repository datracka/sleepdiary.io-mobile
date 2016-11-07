import {
  LOGIN_USER
} from './constants';

import axios from 'axios';

const ROOT_URL = 'http://localhost/api/1';

export function login(values) {

  let request = axios({
    method: 'post',
    url: `${ROOT_URL}/accounts/session`,
    data: values
  });

  return {
    type: LOGIN_USER,
    payload: request
  }
}

