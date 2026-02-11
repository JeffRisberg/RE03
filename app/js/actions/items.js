import axios from 'axios';
import { navigateTo } from '../navigation';
import {initialize} from 'redux-form';
import {ActionTypes as types, forms} from '../constants';

export const queryItems = () => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_ITEMS,
    });
    axios('/api/items/').then(result => {
      dispatch({
        type: types.FETCH_ITEMS_SUCCESS,
        items: result.data.data
      });
    });
  };
};

export const fetchItem = (id) => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_ITEMS,
    });
    axios('/api/items/' + id).then(result => {
      dispatch(initialize(forms.Item, result.data.data));
      dispatch({
        type: types.FETCH_ITEMS_SUCCESS,
        items: [result.data.data]
      });
    });
  };
};

export const toggleItem = (item) => {
  return function (dispatch) {
    let newItem = {...item, completed: !item.completed};
    axios.put('/api/items/' + item.id, {item: newItem},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(() => {
        dispatch(queryItems());
      });
  };
};

export const saveItem = (item) => {
  return function (dispatch) {

    axios.put('/api/items/' + item.id, {item: item},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(result => {
        dispatch({
          type: types.PERSIST_ITEM_SUCCESS,
          items: [result.data.data],
          meta: {
            log: ['item changed', result.data]
          }
        });
        navigateTo('/items');
      });
  };
};

export const addItem = (item) => {
  return function (dispatch) {

    axios.post('/api/items', {item: item},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(result => {
        dispatch({
          type: types.PERSIST_ITEM_SUCCESS,
          items: result.data.data,
          meta: {
            log: ['item changed', item]
          }
        })
        dispatch(queryItems());
      });
  }
};

export const deleteItem = (id) => {
  return function (_dispatch) {

    axios.delete('/api/items/' + id,
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(() => {
        navigateTo('/items');
      });
  };
};
