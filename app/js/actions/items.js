import fetch from "isomorphic-fetch";
import {push} from "react-router-redux";
import {types} from "../types";

export const queryItems = () => {
    return function (dispatch) {

        return fetch('/api/items', {})
            .then(response => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: types.RESET_ITEMS,
                        items: json.data
                    }
                );
            });
    };
};

export const fetchItem = (id) => {
    return function (dispatch) {

        return fetch('/api/items/' + id, {})
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.APPEND_ITEMS,
                    items: json.data
                })
            });
    };
};

export const toggleItem = (item) => {
    return function (dispatch) {
        let newItem = {...item, completed: !item.completed};
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
            body: JSON.stringify({item: item})
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.APPEND_ITEMS,
                    items: json.data
                });
            });
    };
};

export const addItem = (item) => {
    return function (dispatch) {

        return fetch("/api/items", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: item})
        })
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.APPEND_ITEMS,
                    items: json.data
                })
            });
    }
};

export const deleteItem = (item, thenUrl) => {
    return function (dispatch) {

        return fetch('/api/items/' + item.id, {
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


