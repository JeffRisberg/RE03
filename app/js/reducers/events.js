import { types } from '../types'

const events = (state = [], action = {}) => {
    switch (action.type) {
        case types.RESET_EVENTS: // clear prior events
        {
            const idList = [];
            const records = {};

            action.events.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case types.APPEND_EVENTS:
        {
            const idList = state.idList;
            const records = state.records;

            action.events.forEach(record => {
                const id = record.id;

                if (idList.indexOf(id) < 0) idList.push(id);
                records[id] = record;
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default events;