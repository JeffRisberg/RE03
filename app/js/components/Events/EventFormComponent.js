/*eslint no-class-assign: 0*/
import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import './Events.scss';

/**
 * Event Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */

// eslint-disable-next-line
export const renderField = ({input, label, type, meta: {touched, error}, size}) => {
    const className = (touched && error) ? 'form-input form-input-error' : 'form-input';
    return (
        <div>
            <input {...input} size={size || 20} type={type} className={className} autoComplete="off" />
            {touched && ((error && <span className="form-input-error-copy">{error}</span>))}
        </div>
    );
};

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    error: PropTypes.string,
};

const defaultProps = {
    submitting: false,
    submitSucceeded: false,
    error: '',
};

class EventFormComponent extends React.Component {
    componentDidMount() {
        const { fetchHandler } = this.props;
        fetchHandler(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const messageClass = this.props.error ? 'form-error-copy' : 'form-label';

        return (
            <div className="events__detail">
                <form onSubmit={this.props.handleSubmit(this.props.submitHandler)}>
                    {(this.props.error) ? <div className={messageClass}>{this.props.error}</div> : null }
                    <div>
                        <label>Text:</label>
                        <div>
                            <Field name="text" size="40"
                                   component={renderField} type="text" placeholder=""/>
                        </div>
                    </div>
                    <div>
                        <label>Time:</label>
                        <div>
                            <Field name="time" size="20"
                                   component={renderField} type="number" placeholder=""/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.deleteHandler(this.props.params.id)} className="btn btn-default">
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

EventFormComponent.propTypes = propTypes;

EventFormComponent.defaultProps = defaultProps;

export default EventFormComponent;
