import { combineReducers } from 'redux';
import leads from './r_leads';
import errors from './errors';

export default combineReducers({
  leads,
  errors,
});