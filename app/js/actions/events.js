import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { initialize } from 'redux-form';
import { ActionTypes as types, forms } from '../constants';

export const queryEvents = () => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_EVENTS,
    });
    return fetch('/api/events', {})
      .then(response => response.json())
      .then((json) => {
        dispatch(
          {
            type: types.FETCH_EVENTS_SUCCESS,
            events: json.data
          });
      });
  };
};

export const fetchEvent = (id) => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_EVENTS,
    });
    return fetch('/api/events/' + id, {})
      .then(response => response.json())
      .then((json) => {
        dispatch(initialize(forms.Event, json.data[0]));
        dispatch(
          {
            type: types.FETCH_EVENTS_SUCCESS,
            events: json.data
          });
      });
  };
};

export const toggleEvent = (event) => {
  return function (dispatch) {
    const newEvent = { ...event, completed: !event.completed };
    saveEvent(newEvent)(dispatch);
  }
};

export const saveEvent = (event) => {
  return function (dispatch) {

    return fetch('/api/events/' + event.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ event: event })
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: types.PERSIST_EVENT_SUCCESS,
          events: json.data,
          meta: {
            log: ['event changed']
          }
        });
        dispatch(push('/events'));
      });
  };
};

export const addEvent = (event) => {
  return function (dispatch) {

    return fetch('/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ event: event })
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: types.PERSIST_EVENT_SUCCESS,
          events: json.data,
          meta: {
            log: ['event changed']
          }
        });
        dispatch(queryEvents());
      });
  }
};

export const deleteEvent = (id) => {
  return function (dispatch) {

    return fetch('/api/events/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        dispatch(push('/events'));
      });
  };
};
