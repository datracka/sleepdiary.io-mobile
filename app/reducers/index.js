import {combineReducers} from 'redux'
import testReducer from './testReducer'
import loginFormReducer from './loginFormReducer'
import {reducer as formReducer} from 'redux-form'

const sleepDiary = combineReducers({
  testReducer: testReducer,
  login: loginFormReducer,
  form: formReducer, // <-- redux-form
});

export default sleepDiary;
