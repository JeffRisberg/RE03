import axios from 'axios';
import { navigateTo } from '../navigation';
import {initialize} from 'redux-form';
import {ActionTypes as types, forms} from '../constants';

export const queryEvents = () => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_EVENTS,
    });
    axios('/api/events').then(result => {
      dispatch({
        type: types.FETCH_EVENTS_SUCCESS,
        events: result.data.data
      });
    });
  };
};

export const fetchEvent = (id) => {
  return function (dispatch) {

    dispatch({
      type: types.FETCH_EVENTS,
    });
    axios('/api/events/' + id).then(result => {
      dispatch(initialize(forms.Event, result.data.data));
      dispatch({
        type: types.FETCH_EVENTS_SUCCESS,
        events: [result.data.data]
      });
    });
  };
};

export const toggleEvent = (event) => {
  return function (dispatch) {
    let newEvent = {...event, completed: !event.completed};
    axios.put('/api/events/' + event.id, {event: newEvent},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(() => {
        dispatch(queryEvents());
      });
  };
};

export const saveEvent = (event) => {
  return function (dispatch) {

    axios.put('/api/events/' + event.id, {event: event},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(result => {
        dispatch({
          type: types.PERSIST_EVENT_SUCCESS,
          events: [result.data.data],
          meta: {
            log: ['event changed', result.data]
          }
        });
        navigateTo('/events');
      });
  };
};

export const addEvent = (event) => {
  return function (dispatch) {

    axios.post('/api/events', {event: event},
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(result => {
        dispatch({
          type: types.PERSIST_EVENT_SUCCESS,
          events: result.data.data,
          meta: {
            log: ['event changed', event]
          }
        })
        dispatch(queryEvents());
      });
  }
};

export const deleteEvent = (id) => {
  return function () {

    axios.delete('/api/events/' + id,
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
      .then(() => {
        navigateTo('/events');
      });
  };
};
