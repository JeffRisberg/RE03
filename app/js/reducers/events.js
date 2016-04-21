const events = (state = [], action = {}) => {
    switch (action.type) {
        case 'REPLACE_EVENTS': // clear prior events
        {
            const idList = [];
            const records = {};

            action.events.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case 'APPEND_EVENTS':
        {
            const idList = state.idList;
            const records = state.records;

            action.events.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case 'TOGGLE_EVENT':
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

export default events;