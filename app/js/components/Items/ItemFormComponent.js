/*eslint no-class-assign: 0*/
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import './Items.scss';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */

// eslint-disable-next-line
export const renderField = ({ input, label, type, meta: { touched, error }, size }) => {
  const className = (touched && error) ? 'form-input form-input-error' : 'form-input';
  return (
    <div>
      <input {...input} size={size || 20} type={type} className={className} autoComplete="off"/>
      {touched && ((error && <span className="form-input-error-copy">{error}</span>))}
    </div>
  );
};

class ItemFormComponent extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    error: PropTypes.string,
  };

  static defaultProps = {
    submitting: false,
    submitSucceeded: false,
    error: '',
  };

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
      <div className="items__detail">
        <form onSubmit={this.props.handleSubmit(this.props.submitHandler)}>
          {(this.props.error) ? <div className={messageClass}>{this.props.error}</div> : null }
          <div>
            <label>Name:</label>
            <div>
              <Field name="name" size="40"
                component={renderField} type="text" placeholder=""/>
            </div>
          </div>
          <div>
            <label>Value:</label>
            <div>
              <Field name="value" size="20"
                component={renderField} type="number" placeholder=""/>
            </div>
          </div>
          <div>
            <label>Description:</label>
            <div>
              <Field name="description" size="40"
                component={renderField} type="text" placeholder=""/>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
          <div>
            <button onClick={(e) => this.props.deleteHandler(e, this.props.match.params.id)}
              className="btn btn-default">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemFormComponent;

