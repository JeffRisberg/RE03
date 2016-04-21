
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
        {
            const target = state.records[action.id];
            const x = state.records;
            const records = { ...x };

            if (target != null) {
                records[action.id] = { ...target, completed: !target.completed}
            }

            return {idList: state.idList, records: records};
        }
        case 'RECEIVE_EVENTS':
        {
            const idList = action.events.map(record => record.id);
            const records = {};

            action.events.forEach(record => {
                records[record.id] = record;
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default events;