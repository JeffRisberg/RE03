import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { forms } from '../../constants';
import { fetchItem, saveItem, deleteItem } from '../../actions/items';
import ItemFormComponent from './ItemFormComponent';
import './Items.scss';

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter a name.';
    }
    if (!values.value) {
        errors.value = 'Please enter a value.';
    }
    if (!values.description) {
        errors.description = 'Please enter a description.';
    }

    return errors;
};

const ItemFormContainer = reduxForm({
    form: forms.Item,
    validate,
})(ItemFormComponent);

const mapStateToProps = state => ({
    initialValues: state.app.items,
});

const mapDispatchToProps = dispatch => ({
    fetchHandler: (id) => {
        dispatch(fetchItem(id));
    },
    submitHandler: (values) => {
        dispatch(saveItem(values));
    },
    deleteHandler: (id) => {
        dispatch(deleteItem(id));
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ItemFormContainer);
