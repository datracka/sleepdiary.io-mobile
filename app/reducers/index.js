import {combineReducers} from 'redux'
import testReducer from './testReducer'
import {reducer as formReducer} from 'redux-form'

const sleepDiary = combineReducers({
  testReducer: testReducer,
  form: formReducer, // <-- redux-form
});

export default sleepDiary;
