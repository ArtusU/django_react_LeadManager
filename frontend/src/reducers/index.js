import { combineReducers } from 'redux';
import leads from './r_leads';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  leads,
  errors,
  messages,
});