import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { forms } from '../../constants';
import { fetchEvent, saveEvent, deleteEvent } from '../../actions/events';
import EventFormComponent from './EventFormComponent';
import './Events.scss';

const validate = (values) => {
    const errors = {};
    if (!values.Text) {
        errors.Text = 'Please enter some text.';
    }
    if (!values.Time) {
        errors.Time = 'Please enter a time.';
    }

    return errors;
};

const EventFormContainer = reduxForm({
    form: forms.Event,
    validate,
})(EventFormComponent);

const mapStateToProps = state => ({
    initialValues: state.app.events,
});

const mapDispatchToProps = dispatch => ({
    fetchHandler: (id) => {
        dispatch(fetchEvent(id));
    },
    submitHandler: (values) => {
        dispatch(saveEvent(values));
    },
    deleteHandler: (id) => {
        dispatch(deleteEvent(id));
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EventFormContainer);
