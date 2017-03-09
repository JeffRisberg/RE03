import {types} from "../types";

export const setForm = (name, formData) => {
    return {
        type: types.SET_FORM,
        formName: name,
        formData: formData
    }
};

export const handleFormFieldChange = (formName, event) => {
    const fieldName = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : (event.target.value != null) ? event.target.value.trim() : null;

    return {
        type: types.SET_FORM_FIELD,
        formName: formName,
        fieldName: fieldName,
        fieldValue: value
    }
};

export const clearForm = (name) => {
    return {
        type: types.SET_FORM,
        formName: name
    }
};

