import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchItem, saveItem, deleteItem } from '../actions/items';

class ItemDetail extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.onMount(this.props.params.id);
    }

    handleSubmit(e) {
        e.preventDefault();

        const item = this.props.items.records[this.props.params.id];
        const text = ReactDOM.findDOMNode(this.refs.text).value.trim();
        const description = ReactDOM.findDOMNode(this.refs.description).value.trim();
        const value = ReactDOM.findDOMNode(this.refs.value).value.trim();

        item.text = text;
        item.description = description;
        item.value = value;

        this.props.onSave(item);

        this.context.router.push('/items');
    }

    handleDelete(e) {
        e.preventDefault();

        const item = this.props.items.records[this.props.params.id];

        this.props.onDelete(item, "/items"); // after delete, will go to /items
    }

    render() {
        const item = this.props.items.records[this.props.params.id];

        if (item != null) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <table className="itemDetail">
                        <tbody>
                        <tr>
                            <td></td>
                            <td>Item Detail</td>
                        </tr>
                        <tr>
                            <td>Text</td>
                            <td><input type="text" ref="text" defaultValue={item.text}/></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input type="text" ref="description" defaultValue={item.description}/></td>
                        </tr>
                        <tr>
                            <td>Value:</td>
                            <td><input type="text" ref="value" defaultValue={item.value}/></td>
                        </tr>
                        <tr>
                            <td>Completed:</td>
                            <td>{item.completed ? "X" : ""}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit" className="btn btn-default"/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a onClick={this.handleDelete.bind()} className="btn btn-default">Delete</a></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            );
        }
        else
            return null;
    }
}
ItemDetail.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (id) => {
            fetchItem(id)(dispatch);
        },
        onSave: (item) => {
            saveItem(item)(dispatch);
        },
        onDelete: (item, thenUrl) => {
            deleteItem(item, thenUrl)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetail);
