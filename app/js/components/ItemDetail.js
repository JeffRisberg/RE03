import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { fetchItem, saveItem, deleteItem } from '../actions/items';

import ItemForm from './ItemForm';

class ItemDetail extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.params.id;
        const item = this.props.items.records[id];

        if (item == null)
            this.props.fetchItem(id);
    }

    handleSubmit(e, formData) {
        e.preventDefault();

        //const ein = this.props.selections['ein'];

        //this.props.addDonation(formData, ein);
    }

    render() {
        console.log("itemDetail render");
        const item = this.props.items.records[this.props.params.id];

        if (item != null) {

            return (
                <ItemForm item={item} handleSubmit={this.handleSubmit}
                          formData={{
                          text: "abc",
                          description: "def",
                          value: null
                          }}/>
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
export default connect(
    mapStateToProps,
    {fetchItem, saveItem, deleteItem}
)(ItemDetail);
