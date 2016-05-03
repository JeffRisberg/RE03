import fetch from 'isomorphic-fetch';

import { push } from 'react-router-redux'

export const queryEvents = () => {
    return function (dispatch) {

        return fetch('/api/events', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'RESET_EVENTS',
                        events: json.data
                    });
            });
    };
};

export const fetchEvent = (id) => {
    return function (dispatch) {

        return fetch('/api/events/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'APPEND_EVENTS',
                        events: json.data
                    });
            });
    };
};

export const toggleEvent = (event) => {
    return function (dispatch) {
        var newEvent = {...event, completed: !event.completed};
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
            body: JSON.stringify({event: event})
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: 'APPEND_EVENTS',
                    events: json.data
                });
            });
    };
};

export const addEvent = (event) => {
    return function (dispatch) {

        return fetch("/api/events", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({event: event})
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: 'APPEND_EVENTS',
                    events: json.data
                });
            });
    }
};

export const deleteEvent = (event, thenUrl) => {
    return function (dispatch) {

        return fetch('/api/events/' + event.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                dispatch(push(thenUrl))
            });
    };
};
