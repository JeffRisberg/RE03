import React from 'react'
import { connect } from 'react-redux';
import { setForm, handleFormFieldChange, clearForm } from '../../actions/forms';
import "./Items.scss";

const formName = 'itemForm';

/**
 * Item Editing Form
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since May 2016
 */
class ItemForm extends React.Component {
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
        const item = this.props.item;

        if (this.props.form != null && this.props.form !== undefined && item !== null && item !== undefined) {

            return (
                <div className={this.props.className}>
                    <form onSubmit={(e) => {this.props.handleSubmit(e, this.props.form)}}>

                        <p>Text:</p>

                        <p>
                            <input type="text" name="text" size="40" defaultValue={this.props.form.text}
                                   onChange={(e) => {this.props.handleFormFieldChange(formName, e)}}/>
                        </p>

                        <p>Value:</p>

                        <p>
                            <input type="text" name="value" size="20" defaultValue={this.props.form.value}
                                   onChange={(e) => {this.props.handleFormFieldChange(formName, e)}}/>
                        </p>

                        <p>Description:</p>

                        <p>
                            <input type="text" name="description" size="40" defaultValue={this.props.form.description}
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
)(ItemForm);

