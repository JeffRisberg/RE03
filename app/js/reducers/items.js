const items = (state = [], action = {}) => {
    switch (action.type) {
        case 'RESET_ITEMS': // clear prior items
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
                const id = record.id;

                if (idList.indexOf(id) < 0) idList.push(id);
                records[id] = record;
            });

            return {idList, records};
        }
        case 'DELETE_ITEMS':
        {
            var idList = state.idList;
            const records = state.records;

            action.items.forEach(record => {
                const id = record.id;

                idList = idList.filter((thisId) => {return thisId != id});
                delete records[id];
            });

            return {idList, records};
        }
        default:
            return state;
    }
};

export default items;