import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import FormHelper from '../helpers/FormHelper';

/**
 * Event Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.eventForm = new FormHelper("eventForm", this, props.formData);
    }

    componentDidMount() {
        this.eventForm.componentDidMount(() => {
        })
    }

    render() {
        const event = this.props.event;

        if (event !== null && event !== undefined) {

            return (
                <div>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.eventForm.getFormData())}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" value={this.eventForm.getValue('text')}
                                   onChange={(e) => {this.eventForm.handleChange(e) }}/>
                        </p>

                        <p>Description:</p>

                        <p>
                            <input type="text" name="description" size="40" value={this.eventForm.getValue('description')}
                                   onChange={(e) => {this.eventForm.handleChange(e)}}/>
                        </p>

                        <p>Value:</p>

                        <p>
                            <input type="text" name="value" size="40" value={this.eventForm.getValue('value')}
                                   onChange={(e) => {this.eventForm.handleChange(e)}}/>
                        </p>

                        <div className="pull-right">
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

export default EventForm;
