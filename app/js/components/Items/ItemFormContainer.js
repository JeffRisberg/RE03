import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { forms } from '../../constants';
import { fetchItem, saveItem, deleteItem } from '../../actions/items';
import ItemFormComponent from './ItemFormComponent';
import './Items.scss';

const validate = (values) => {
  const errors = {};

  if (!values.name || values.name.trim().length < 4) {
    errors.name = 'Please enter a name of at least 4 characters.';
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
  initialValues: state.app.items.data,
  status: {
    isFetching: state.app.items.isFetching,
    ...state.app.appErrors,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchHandler: (id) => {
    dispatch(fetchItem(id));
  },
  submitHandler: (values) => {
    const item = {
      ...values,
      name: values.name.trim(),
      value: values.value,
      description: values.description.trim()
    };
    dispatch(saveItem(item));
  },
  deleteHandler: (e, id) => {
    e.preventDefault();
    dispatch(deleteItem(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ItemFormContainer);
