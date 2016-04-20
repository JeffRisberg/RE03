import { combineReducers } from 'redux';

import items from './items';
import events from './events';

export default combineReducers({
    items,
    events
});