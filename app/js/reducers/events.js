
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

export default events;