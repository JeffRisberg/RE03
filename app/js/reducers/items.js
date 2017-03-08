import { types } from '../types'

const items = (state = [], action = {}) => {
    switch (action.type) {
        case types.RESET_ITEMS: // clear prior items
        {
            const idList = [];
            const records = {};

            action.items.forEach(record => {
                records[record.id] = record;
                idList.push(record.id);
            });

            return {idList, records};
        }
        case types.APPEND_ITEMS:
        {
            const idList = state.idList;
            const records = state.records;

            action.items.forEach(record => {
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

export default items;