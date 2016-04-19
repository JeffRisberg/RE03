import fetch from 'isomorphic-fetch';

let nextItemId = 10;
let nextEventId = 10;

export const fetchItems = () => {
    return function (dispatch) {

        return fetch('/api/items', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveItems(json.items));
            });
    };
};

export const receiveItems = (items) => {
    return {
        type: 'RECEIVE_ITEMS',
        items
    };
};

export const addItem = (text) => {
    fetch("/api/items", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            item: {
                text: text,
                value: 12,
                completed: false
            }
        })
    }).then(response => {
        console.log(response);
    });

    return {
        type: 'ADD_ITEM',
        id: nextItemId++,
        text
    };
};

export const toggleItem = (id) => {
    return {
        type: 'TOGGLE_ITEM',
        id
    };
};


export const fetchEvents = () => {
    return function (dispatch) {

        return fetch('/api/events', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveEvents(json.events));
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
