import { types } from '../types'

const forms = (state = [], action = {}) => {
    switch (action.type) {
        case types.SET_FORM:
        {
            const newState = Object.assign({}, state, {[action.formName]: action.formData});
            console.log('set form: ' + JSON.stringify(newState, null, 2))
            return newState;
        }
        case types.SET_FORM_FIELD:
        {
            console.log('setting form field ' + action.fieldName + ' to ' + action.fieldValue + ' in form ' + action.formName);
            const newState = Object.assign({}, state);
            const newFormState = Object.assign(newState[action.formName], {[action.fieldName]: action.fieldValue});
            console.log('new state: ' + JSON.stringify(newState, null, 2));

            return newState;
        }
        case types.CLEAR_FORM:
        {
            const newState = Object.assign({}, state);
            delete newState[action.formName];
            return newState;
        }
        default:
            return state;
    }
};

export default forms;