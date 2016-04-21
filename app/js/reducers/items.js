const items = (state = [], action = {}) => {
    switch (action.type) {
        case 'REPLACE_ITEMS': // clear prior items
        {
            const idList = [];
            const records = {};

            action.items.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case 'APPEND_ITEMS':
        {
            const idList = state.idList;
            const records = state.records;

            action.items.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case 'TOGGLE_ITEM':
        {
            const priorRecords = state.records;
            const target = priorRecords[action.id];
            const records = {...priorRecords};

            if (target != null) {
                records[action.id] = {...target, completed: !target.completed}
            }

            return {idList: state.idList, records: records};
        }
        default:
            return state;
    }
};

export default items;