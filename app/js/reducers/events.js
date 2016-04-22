const events = (state = [], action = {}) => {
    switch (action.type) {
        case 'RESET_EVENTS': // clear prior events
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
                const id = record.id;

                records[id] = record;
                if (idList.indexOf(id) < 0) idList.push(id);
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default events;