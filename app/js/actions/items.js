import fetch from 'isomorphic-fetch';

let nextItemId = 10;

export const fetchItem = (id) => {
    return function (dispatch) {

        return fetch('/api/items/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveItem(json.data));
            });
    };
};

export const receiveItem = (items) => {
    return {
        type: 'RECEIVE_ITEM',
        items
    };
};

export const fetchItems = () => {
    return function (dispatch) {

        return fetch('/api/items', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(receiveItems(json.data));
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
