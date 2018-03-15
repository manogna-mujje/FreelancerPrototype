import { combineReducers } from 'redux';
import emailReducer from './reducer_email';
import usernameReducer from './reducer_username';
import passwordReducer from './reducer_password';
import loginReducer from './reducer_login';
import sessionReducer from './reducer_session';


const rootReducer = combineReducers({
  emailMsg: emailReducer,
  usernameMsg: usernameReducer,
  passwordMsg: passwordReducer,
  loginOutput: loginReducer,
  session: sessionReducer
});


export default rootReducer;
