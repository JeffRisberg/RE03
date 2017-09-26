import { handleActions } from 'redux-actions';
import { ActionTypes as types } from '../constants';

export default handleActions({
  [types.FETCH_ITEMS]: (state) => {
    return Object.assign({}, state, {
      data: [],
      isFetching: true,
    });
  },
  [types.FETCH_ITEMS_SUCCESS]: (state, action) => {
    return Object.assign({}, { data: action.items }, {
      isFetching: false,
    });
  },
}, { data: [], isFetching: false });
