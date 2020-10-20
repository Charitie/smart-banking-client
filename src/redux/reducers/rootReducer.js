import { combineReducers } from "redux";
import auth from "./authReducers";
import alert from './alertReducer';
import account from './accountReducer';

export default combineReducers({
  auth,
  account,
  alert
});
