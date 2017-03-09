import {handleActions} from "redux-actions";
import {types} from "../types";

export default handleActions({
    [types.SET_FORM]: (state, action) => {
        const newState = Object.assign({}, state, {[action.formName]: action.formData});
        console.log('set form: ' + JSON.stringify(newState, null, 2))
        return newState;
    },

    [types.SET_FORM_FIELD]: (state, action) => {
        console.log('setting form field ' + action.fieldName + ' to ' + action.fieldValue + ' in form ' + action.formName);
        const newState = Object.assign({}, state);
        const newFormState = Object.assign(newState[action.formName], {[action.fieldName]: action.fieldValue});
        console.log('new state: ' + JSON.stringify(newState, null, 2));

        return newState;
    },

    [types.CLEAR_FORM]: (state, action) => {
        const newState = Object.assign({}, state);
        delete newState[action.formName];
        return newState;
    }
}, {});