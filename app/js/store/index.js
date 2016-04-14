import { createStore, combineReducers } from 'redux';

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text,
                description: "description",
                value: 1,
                completed: false
            };
        case 'TOGGLE_ITEM':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const items = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                item(undefined, action)
            ];
        case 'TOGGLE_ITEM':
            return state.map(t =>
                    item(t, action)
            );
        case 'RECEIVE_ITEMS':
            return action.items;
        default:
            return state;
    }
};

const event = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                id: action.id,
                text: action.text,
                description: "description",
                time: action.time,
                completed: false
            };
        case 'TOGGLE_EVENT':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const events = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                event(undefined, action)
            ];
        case 'TOGGLE_EVENT':
            return state.map(t =>
                    event(t, action)
            );
        case 'RECEIVE_EVENTS':
            return action.events;
        default:
            return state;
    }
};

const inventoryAppReducer = combineReducers({
    items,
    events
});

var inventory = {
    items: [],
    events: []
};

export default createStore(inventoryAppReducer, inventory)