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
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3d3cuc2xlZXBkaWFyeS5pbyIsIlJvbGUiOlsidXNlciJdLCJpc3MiOiJTbGVlcCBEaWFyeSIsImlhdCI6MTQ4MzU1MjAwOS45MTgxNTkyLCJzdWIiOjJ9.Dur6hcSlqiTeNJTN957EzCtcMJlijeqNwXRgjBv5Xhc';
  let request = axios({
    method: 'get',
    url: `${ROOT_URL}/calendar/year/2016/month/12`,
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
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3d3cuc2xlZXBkaWFyeS5pbyIsIlJvbGUiOlsidXNlciJdLCJpc3MiOiJTbGVlcCBEaWFyeSIsImlhdCI6MTQ4MzU1MjAwOS45MTgxNTkyLCJzdWIiOjJ9.Dur6hcSlqiTeNJTN957EzCtcMJlijeqNwXRgjBv5Xhc';
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
