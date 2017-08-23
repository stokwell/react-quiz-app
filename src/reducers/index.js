import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testsReducer from './testsReducer';
import authReducer from './authReducer';
import flashMessagesReducer from './flashMessagesReducer';


const rootReducer = combineReducers({
  form: formReducer,
  tests: testsReducer,
  flashMessagesReducer,
  authReducer
})

export default rootReducer;
