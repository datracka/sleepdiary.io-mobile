import {
  LOGIN_USER,
  FETCH_ENTRIES, SET_CALENDAR_VIEW, ADD_ENTRY,
  ADD_ENTRY_TO_SERVER_PENDING,
  ADD_ENTRY_TO_SERVER_FULLFILED
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

export function fetchEntries() {

  //hot fix for overriding validation!
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTbGVlcCBEaWFyeSIsImF1ZCI6Ind3dy5zbGVlcGRpYXJ5LmlvIiwic3ViIjoxLCJSb2xlIjpbInVzZXIiXSwiaWF0IjoxNDc4MTc3NTI3LjcyNDc1MjJ9.G7E6QCG789ece21fp8xifsqoJxezO9GAkb0BGAcN2OE';
  let request = axios({
    method: 'get',
    url: `${ROOT_URL}/calendar/year/2016/month/11`,
    headers: [
    ]
  });

  return {
    type: FETCH_ENTRIES,
    payload: request
  };
}

export function addEntry(entry) {

  return function(dispatch) {

    dispatch(addEntryOptimistic(entry));
    //dispatch(addEntryToServerPending(entry));
    //hot fix for overriding validation!
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTbGVlcCBEaWFyeSIsImF1ZCI6Ind3dy5zbGVlcGRpYXJ5LmlvIiwic3ViIjoxLCJSb2xlIjpbInVzZXIiXSwiaWF0IjoxNDc4MTc3NTI3LjcyNDc1MjJ9.G7E6QCG789ece21fp8xifsqoJxezO9GAkb0BGAcN2OE';
    return axios({
      method: 'post',
      url: `${ROOT_URL}/calendar`,
      data: entry
    });
  }
}

export function addEntryToServerPending(entry) {
  return {
    type: ADD_ENTRY_TO_SERVER_PENDING,
    entry: entry
  }
}

export function addEntryToServerFullfilled(entry) {
  return {
    type: ADD_ENTRY_TO_SERVER_FULLFILED,
    entry: entry
  }
}

export function addEntryToServerRejected(entry) {
  return {
    type: ADD_ENTRY_TO_SERVER_FULLFILED,
    entry: entry
  }
}

export function addEntryOptimistic(entry) {

  return {
    type: ADD_ENTRY,
    entry: entry
  }
}


export function setCalendarView(filter) {
  return {
    type: SET_CALENDAR_VIEW,
    filter: filter
  }
}
