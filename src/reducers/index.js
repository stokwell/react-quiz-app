import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testsReducer from './testsReducer';



const rootReducer = combineReducers({
  form: formReducer,
  tests: testsReducer
})

export default rootReducer;
