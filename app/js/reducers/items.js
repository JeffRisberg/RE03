
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

export default items;