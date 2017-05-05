/*eslint no-class-assign: 0*/

import React from "react";
import {Field, reduxForm} from "redux-form";
import "./Items.scss";

/**
 * Item Editing Form
 *
 * @author Jeff Risberg
 * @since May 2016 (updated in May 2017 to use redux-form)
 */
class ItemForm extends React.Component {
    render() {
        const item = this.props.item;

        if (item !== null && item !== undefined) {

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
ItemForm = reduxForm({
    form: 'item' // a unique name for this form
})(ItemForm);

export default ItemForm;

