import fetch from 'isomorphic-fetch';

export const queryEvents = () => {
    return function (dispatch) {

        return fetch('/api/events', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(replaceEvents(json.data));
            });
    };
};

export const replaceEvents = (events) => {
    return {
        type: 'REPLACE_EVENTS',
        events
    };
};

export const fetchEvent = (id) => {
    return function (dispatch) {

        return fetch('/api/events/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(appendEvents(json.data));
            });
    };
};

export const appendEvents = (events) => {
    return {
        type: 'APPEND_EVENTS',
        events
    };
};

export const addEvent = (text, time) => {
    return function (dispatch) {

        return fetch("/api/events", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event: {
                    text: text,
                    description: "",
                    time: time,
                    completed: false
                }
            })
        })
            .then(response => response.json())
            .then((json) => {
                dispatch(appendEvents(json.data));
            });
    }
};

export const toggleEvent = (id) => {
    return {
        type: 'TOGGLE_EVENT',
        id
    };
};
