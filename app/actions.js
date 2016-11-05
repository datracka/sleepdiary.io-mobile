import {
  FETCH_ENTRIES,
  FETCH_ENTRIES_REJECTED,
  FETCH_ENTRIES_FULFILLED,
  SET_CALENDAR_VIEW
} from './constants';

import axios from 'axios';

const ROOT_URL = 'http://localhost/api/1';
export function fetchEntries() {

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/calendar/year/2016`,
    headers: []
  });

  return {
    type: FETCH_ENTRIES,
    payload: request
  }
}

export function fetchEntriesFulfilled(entries) {
  return {
    type: FETCH_ENTRIES_FULFILLED,
    payload: entries
  };
}

export function fetchEntriesRejected(error) {
  return {
    type: FETCH_ENTRIES_REJECTED,
    payload: error
  };
}


export const setCalendarView = (filter) => ({
  type: 'SET_CALENDAR_VIEW',
  filter
})