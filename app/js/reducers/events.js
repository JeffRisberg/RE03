import {handleActions} from "redux-actions";
import {ActionTypes as types} from "../constants";

export default handleActions({
    [types.RESET_EVENTS]: (state, action) => {
        const records = [];

        action.events.forEach(record => {
            records.push(record);
        });

        return records;
    },
}, []);
