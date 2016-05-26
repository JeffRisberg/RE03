import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import FormHelper from '../helpers/FormHelper';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class ItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.itemForm = new FormHelper("itemForm", this, props.formData);
    }

    componentDidMount() {
        this.itemForm.componentDidMount(() => {
        })
    }

    render() {
        const item = this.props.item;

        if (item !== null && item !== undefined) {

            return (
                <div>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.itemForm.getFormData())}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" value={this.itemForm.getValue('text')}
                                   onChange={(e) => {this.itemForm.handleChange(e)}}/>
                        </p>

                        <p>Description:</p>

                        <p>
                            <input type="text" name="description" size="40" value={this.itemForm.getValue('description')}
                                   onChange={(e) => {this.itemForm.handleChange(e)}}/>
                        </p>

                        <p>Value:</p>

                        <p>
                            <input type="text" name="value" size="40" value={this.itemForm.getValue('value')}
                                   onChange={(e) => {this.itemForm.handleChange(e)}}/>
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

export default ItemForm;
