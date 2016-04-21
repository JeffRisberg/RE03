import fetch from 'isomorphic-fetch';

let nextEventId = 10;

export const fetchEvent = (id) => {
    return function (dispatch) {

        return fetch('/api/events/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveEvent(json.data));
            });
    };
};

export const receiveEvent = (event) => {
    return {
        type: 'RECEIVE_EVENT',
        event
    };
};

export const fetchEvents = () => {
    return function (dispatch) {

        return fetch('/api/events', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveEvents(json.data));
            });
    };
};

export const receiveEvents = (events) => {
    return {
        type: 'RECEIVE_EVENTS',
        events
    };
};

export const addEvent = (text, time) => {
    fetch("/api/events", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event: {
                text: text,
                time: time,
                completed: false
            }
        })
    }).then(response => {
        console.log(response);
    });

    return {
        type: 'ADD_EVENT',
        id: nextEventId++,
        text,
        time
    };
};

export const toggleEvent = (id) => {
    return {
        type: 'TOGGLE_EVENT',
        id
    };
};
