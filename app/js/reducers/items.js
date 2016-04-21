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
        {
            const target = state.records[action.id];
            const x = state.records;
            const records = { ...x };

            if (target != null) {
                records[action.id] = { ...target, completed: !target.completed}
            }

            return {idList: state.idList, records: records};
        }
        case 'RECEIVE_ITEMS':
        {
            const idList = action.items.map(record => record.id);
            const records = {};

            action.items.forEach(record => {
                records[record.id] = record;
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default items;