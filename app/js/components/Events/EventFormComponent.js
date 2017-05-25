/*eslint no-class-assign: 0*/
import React from "react";
import {Field, reduxForm} from "redux-form";
import "./Events.scss";

/**
 * Event Editing Form
 *
 * @author Jeff Risberg
 * @since May 2016 (updated in May 2017 to use redux-form)
 */
class EventFormComponent extends React.Component {
    render() {
        const event = this.props.event;

        if (event !== null && event !== undefined) {
            return (
                <div className={this.props.className}>
                    <form onSubmit={this.props.handleSubmit}>
                        <div>
                            <label>Text:</label>
                            <div>
                                <Field name="text" size="40"
                                       component="input" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div>
                            <label>Time:</label>
                            <div>
                                <Field name="time" size="20"
                                       component="input" type="text" placeholder=""/>
                            </div>
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="btn btn-default"/>
                        </div>
                        <div>
                            <a onClick={(e) => this.props.onDelete(e)} className="btn btn-default">
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

// Decorate the form component
EventFormComponent = reduxForm({
    form: 'event' // a unique name for this form
})(EventFormComponent);

export default EventFormComponent;
