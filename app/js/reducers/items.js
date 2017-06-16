import {handleActions} from 'redux-actions';
import {ActionTypes as types} from '../constants';

export default handleActions({
    [types.RESET_ITEMS]: (state, action) => {
        const records = [];

        action.items.forEach(record => {
            records.push(record);
        });

        return records;
    },
}, []);