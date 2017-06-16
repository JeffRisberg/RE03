/*eslint no-class-assign: 0*/
import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import './Items.scss';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg
 * @since May 2017
 */
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

class ItemFormComponent extends React.Component {
    componentDidMount() {
        const { fetchHandler } = this.props;
        fetchHandler(this.props.params.id);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        return (
            <div className="items__detail">
                <form onSubmit={this.props.handleSubmit(this.props.submitHandler)}>
                    <div>
                        <label>Text:</label>
                        <div>
                            <Field name="text" size="40"
                                   component="input" type="text" placeholder=""/>
                        </div>
                    </div>
                    <div>
                        <label>Value:</label>
                        <div>
                            <Field name="value" size="20"
                                   component="input" type="text" placeholder=""/>
                        </div>
                    </div>
                    <div>
                        <label>Description:</label>
                        <div>
                            <Field name="description" size="40"
                                   component="input" type="text" placeholder=""/>
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Submit" className="btn btn-default"/>
                    </div>
                    <div>
                        <a onClick={() => this.props.deleteHandler(this.props.params.id)} className="btn btn-default">
                            Delete
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

ItemFormComponent.propTypes = propTypes;

ItemFormComponent.defaultProps = defaultProps;

export default ItemFormComponent;

