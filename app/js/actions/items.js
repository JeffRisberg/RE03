import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { initialize } from 'redux-form';
import { ActionTypes as types, forms } from '../constants';

export const queryItems = () => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_ITEMS,
    });
    return fetch('/api/items', {})
      .then(response => response.json())
      .then((json) => {
        dispatch(
          {
            type: types.FETCH_ITEMS_SUCCESS,
            items: json.data
          }
        );
      });
  };
};

export const fetchItem = (id) => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_ITEMS,
    });
    return fetch('/api/items/' + id, {})
      .then(response => response.json())
      .then((json) => {
        dispatch(initialize(forms.Item, json.data[0]));
        dispatch({
          type: types.FETCH_ITEMS_SUCCESS,
          items: json.data
        })
      });
  };
};

export const toggleItem = (item) => {
  return function (dispatch) {
    let newItem = { ...item, completed: !item.completed };
    saveItem(newItem)(dispatch);
  }
};

export const saveItem = (item) => {
  return function (dispatch) {

    return fetch('/api/items/' + item.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: item })
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: types.PERSIST_ITEM_SUCCESS,
          items: json.data,
          meta: {
            log: ['item changed', item]
          }
        });
        dispatch(push('/items'));
      });
  };
};

export const addItem = (item) => {
  return function (dispatch) {

    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: item })
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: types.PERSIST_ITEM_SUCCESS,
          items: json.data,
          meta: {
            log: ['item changed', item]
          }
        })
        dispatch(queryItems());
      });
  }
};

export const deleteItem = (id) => {
  return function (dispatch) {

    return fetch('/api/items/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(push('/items'));
      });
  };
};


