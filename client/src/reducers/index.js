import { combineReducers } from 'redux';
import emailReducer from './reducer_email';
import usernameReducer from './reducer_username';


const rootReducer = combineReducers({
  emailMsg: emailReducer,
  usernameMsg:usernameReducer
});


export default rootReducer;
