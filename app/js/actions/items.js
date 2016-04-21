import fetch from 'isomorphic-fetch';

export const queryItems = () => {
    return function (dispatch) {

        return fetch('/api/items', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(replaceItems(json.data));
            });
    };
};

export const replaceItems = (items) => {
    return {
        type: 'REPLACE_ITEMS',
        items
    };
};

export const fetchItem = (id) => {
    return function (dispatch) {

        return fetch('/api/items/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch(appendItems(json.data));
            });
    };
};

export const appendItems = (items) => {
    return {
        type: 'APPEND_ITEMS',
        items
    };
};

export const addItem = (text, value) => {
    return function (dispatch) {

        return fetch("/api/items", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: {
                    text: text,
                    description: "",
                    value: value,
                    completed: false
                }
            })
        })
            .then(response => response.json())
            .then((json) => {
                dispatch(appendItems(json.data));
            });
    }
};

export const toggleItem = (id) => {
    return {
        type: 'TOGGLE_ITEM',
        id
    };
};
