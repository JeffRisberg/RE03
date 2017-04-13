import {handleActions} from "redux-actions";
import {types} from "../types";

export default handleActions({
    [types.SET_FORM]: (state, action) => {
        const newState = Object.assign({}, state, {[action.formName]: action.formData});
        return newState;
    },

    [types.SET_FORM_FIELD]: (state, action) => {
        const newState = Object.assign({}, state);

        Object.assign(newState[action.formName], {[action.fieldName]: action.fieldValue});
        return newState;
    },

    [types.CLEAR_FORM]: (state, action) => {
        const newState = Object.assign({}, state);
        delete newState[action.formName];
        return newState;
    }
}, {});