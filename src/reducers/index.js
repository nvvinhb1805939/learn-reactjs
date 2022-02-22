import { combineReducers } from 'redux';
import hobby from './hobby';
import user from './user';

const rootReducer = combineReducers({
  hobby,
  user,
});

export default rootReducer;
