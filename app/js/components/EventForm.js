import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { setForm, handleFormFieldChange, clearForm } from '../actions/forms';

/**
 * Event Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.formName = 'eventForm';
    }

    componentDidMount() {
        this.props.setForm(this.formName, this.props.formData)
    }

    componentWillUnmount() {
        this.props.clearForm(this.formName)
    }

    render() {
        const event = this.props.event;

        if (this.props.form != null && this.props.form !== undefined && event !== null && event !== undefined) {

            return (
                <div>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.props.form)}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" value={this.props.form.text}
                                   onChange={(e) => {this.props.handleFormFieldChange(this.formName, e) }}/>
                        </p>

                        <p>Description:</p>

                        <p>
                            <input type="text" name="description" size="40" value={this.props.form.description}
                                   onChange={(e) => {this.props.handleFormFieldChange(this.formName, e)}}/>
                        </p>

                        <p>Time:</p>

                        <p>
                            <input type="text" name="value" size="20" value={this.props.form.time}
                                   onChange={(e) => {this.props.handleFormFieldChange(this.formName, e)}}/>
                        </p>

                        <div>
                            <input type="submit" value="Submit" className="btn btn-default"/>
                        </div>
                    </form>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        form: state.forms['eventForm']
    };
};
export default connect(
    mapStateToProps,
    {setForm, handleFormFieldChange, clearForm}
)(EventForm);
