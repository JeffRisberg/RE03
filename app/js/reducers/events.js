import { handleActions } from 'redux-actions';
import { ActionTypes as types } from '../constants';

export default handleActions({
  [types.FETCH_EVENTS]: (state) => {
    return Object.assign({}, state, {
      data: [],
      isFetching: true,
    });
  },
  [types.FETCH_EVENTS_SUCCESS]: (state, action) => {
    return Object.assign({}, { data: action.events }, {
      isFetching: false,
    });
  },
}, { data: [], isFetching: false });
