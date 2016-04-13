import { createStore, combineReducers } from 'redux';

const item = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text,
                description: "desc",
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
                description: "desc",
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
        default:
            return state;
    }
};

const inventoryAppReducer = combineReducers({
    items,
    events
});

var basicItems = [
    {
        id: 0,
        text: 'Stegosaurus',
        description: "Mild",
        value: 42
    },
    {
        id: 1,
        text: 'Velociraptor',
        description: "Mean",
        value: 71
    },
    {
        id: 2,
        text: 'Tyrannosaurus',
        description: "Really Mean",
        value: 120
    }
];

var inventory = {
    items: [
        ...basicItems,
        {
            id: 3,
            text: 'Lame-brained Lawyer',
            description: "Stupid",
            value: 10
        }
    ],
    events: [
        {id: 1, text: "Arrivals", time: "0800"},
        {id: 2, text: "Introductory Show", time: "1000"},
        {id: 3, text: "Guest Tour", time: "1100"},
        {id: 4, text: "Lunch", time: "1230"},
        {id: 5, text: "Eat the guests", time: "1500"}
    ]
};

export default createStore(inventoryAppReducer, inventory)