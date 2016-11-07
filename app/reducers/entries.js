import {
  FETCH_ENTRIES_PENDING,
  FETCH_ENTRIES_REJECTED,
  FETCH_ENTRIES_FULFILLED,
  SHOW_SLEEPING_QUALITY,
  ADD_ENTRY,
  ADD_ENTRY_FULFILLED,
  ADD_ENTRY_PENDING,
  ADD_ENTRY_REJECTED,
  ADD_ENTRY_TO_SERVER,
  ADD_ENTRY_TO_SERVER_PENDING,
  ADD_ENTRY_TO_SERVER_FULLFILED,
  ADD_ENTRY_TO_SERVER_REJECTED
} from '../constants'

import {List} from 'immutable'


const initialState = {
  entries: [],
  fetching: false,
  fetched: false,
  error: null,
  message: null
}

export default function entries(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENTRIES_PENDING:
      return {
        ...state,
        entries: [],
        fetching: true,
        fetched: false,
        error: null,
        message: null
      }
      break;
    case FETCH_ENTRIES_FULFILLED:

      return {
        ...state,
        entries: action.payload.data,
        fetching: false,
        fetched: true,
        error: null,
        message: null
      }
      break;
    case FETCH_ENTRIES_REJECTED:
      return {
        ...state,
        entries: [],
        fetching: false,
        fetched: true,
        error: action.payload.data,
        message: action.payload.message
      }
      break;
    case ADD_ENTRY:
      state.entries = new List(state.entries)
        .push(action.entry)
        .toArray();
      return state;
      break
    case ADD_ENTRY_TO_SERVER_PENDING || ADD_ENTRY_TO_SERVER_FULLFILED || ADD_ENTRY_TO_SERVER_REJECTED:
      handleEntryToServer(state, action.type)
    case ADD_ENTRY_PENDING || ADD_ENTRY_REJECTED || ADD_ENTRY_FULFILLED || ADD_ENTRY_TO_SERVER:
      handleAddEntry(state, action.type)
    default:
      return state;
  }
}

function handleAddEntry(state, action) {
  console.log("handleAddEntry", state.type);
  switch (action.type) {
    case ADD_ENTRY_PENDING:
      break;
    case ADD_ENTRY_REJECTED:
      break;
    case ADD_ENTRY_FULFILLED:
      break;
    case ADD_ENTRY_PENDING:
      break;
    default:
      return state;
  }
}

function handleEntryToServer(state, action) {
  console.log("handleAddEntry", state.type);
  switch(action.type) {
    case ADD_ENTRY_TO_SERVER_PENDING:
      break;
    case ADD_ENTRY_TO_SERVER_FULLFILED:
      break;
    case ADD_ENTRY_TO_SERVER_REJECTED:
      break;
    default:
      return state;
  }

}
function filters(state = SHOW_SLEEPING_QUALITY, action) {
  switch (action.type) {
    case 'SET_CALENDAR_VIEW':
      return action.filter
    default:
      return state
  }
}