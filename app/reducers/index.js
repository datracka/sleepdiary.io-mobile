import {combineReducers} from 'redux'
import testReducer from './testReducer'
import entries from './entries'
import loginFormReducer from './loginFormReducer'


const sleepDiary = combineReducers({
  testReducer: testReducer,
  login: loginFormReducer,
  entries: entries
});

export default sleepDiary;
