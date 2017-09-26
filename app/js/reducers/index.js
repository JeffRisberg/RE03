import { combineReducers } from 'redux';
import events from './events';
import items from './items';

export default combineReducers({
  events,
  items
});
