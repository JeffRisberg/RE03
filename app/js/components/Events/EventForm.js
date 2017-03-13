import React from 'react'
import { connect } from 'react-redux';
import { setForm, handleFormFieldChange, clearForm } from '../../actions/forms';
import "./Events.scss";

const formName = 'eventForm';

/**
 * Event Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class EventForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setForm(formName, this.props.formData)
    }

    componentWillUnmount() {
        this.props.clearForm(formName)
    }

    render() {
        const event = this.props.event;

        if (this.props.form != null && this.props.form !== undefined && event !== null && event !== undefined) {

            return (
                <div className={this.props.className}>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.props.form)}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" defaultValue={this.props.form.text}
                                   onChange={(e) => {this.props.handleFormFieldChange(formName, e) }}/>
                        </p>

                        <p>Time:</p>

                        <p>
                            <input type="text" name="time" size="20" defaultValue={this.props.form.time}
                                   onChange={(e) => {this.props.handleFormFieldChange(formName, e)}}/>
                        </p>

                        <div>
                            <input type="submit" value="Submit" className="btn btn-default"/>
                        </div>
                        <div>
                            <a onClick={(e) => this.props.handleDelete(e, this.props.form)} className="btn btn-default">
                                Delete
                            </a>
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

const mapStateToProps = (state) => {
    return {
        form: state.forms[formName]
    };
};
export default connect(
    mapStateToProps,
    {setForm, handleFormFieldChange, clearForm}
)(EventForm);
