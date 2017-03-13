import React from "react";
import {connect} from "react-redux";
import {fetchItem, saveItem, deleteItem} from "../../actions/items";
import ItemForm from "./ItemForm";
import "./Items.scss";

class ItemDetail extends React.Component {

    componentDidMount() {
        const id = this.props.params.id;
        const item = this.props.items.records[id];

        if (item == null)
            this.props.fetchItem(id);
    }

    handleSubmit = (e, formData) => {
        e.preventDefault();

        const item = this.props.items.records[this.props.params.id];

        item.text = formData.text;
        item.description = formData.description;
        item.value = formData.value;

        this.props.saveItem(item);

        this.context.router.push('/items');
    }

    handleDelete = (e) => {
        e.preventDefault();

        const item = this.props.items.records[this.props.params.id];

        this.props.deleteItem(item, '/items'); // this will go to /items after delete
    }

    render() {
        const item = this.props.items.records[this.props.params.id];

        if (item != null) {

            return (
                <ItemForm item={item} className="items__detail"
                          handleSubmit={this.handleSubmit}
                          handleDelete={this.handleDelete}
                          formData={{
                              text: item.text,
                              description: item.description,
                              value: item.value
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
