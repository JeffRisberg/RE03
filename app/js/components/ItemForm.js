import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { setForm, handleFormFieldChange, clearForm } from '../actions/forms';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class ItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.formName = 'itemForm';
    }

    componentDidMount() {
        this.props.setForm(this.formName, this.props.formData)
    }

    componentWillUnmount() {
        this.props.clearForm(this.formName)
    }

    render() {
        console.log("itemForm render");
        const item = this.props.item;

        if (this.props.form != null && this.props.form !== undefined && item !== null && item !== undefined) {
            console.log("new text " + this.props.form.text);

            return (
                <div>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.props.form)}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" value={this.props.form.text}
                                   onChange={(e) => {this.props.handleFormFieldChange(this.formName, e)}}/>
                        </p>

                        <p>Description:</p>

                        <p>
                            <input type="text" name="description" size="40" value={this.props.form.description}
                                   onChange={(e) => {this.props.handleFormFieldChange(this.formName, e)}}/>
                        </p>

                        <p>Value:</p>

                        <p>
                            <input type="text" name="value" size="20" value={this.props.form.value}
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
        form: state.forms['itemForm']
    };
};
export default connect(
    mapStateToProps,
    {setForm, handleFormFieldChange, clearForm}
)(ItemForm);

