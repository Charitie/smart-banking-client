import { combineReducers } from "redux";
import auth from "./authReducers";
import alert from './alertReducer';
import account from './accountReducer';
import modal from './modalReducer';

export default combineReducers({
  auth,
  account,
  alert,
  modal
});
