import React from 'react';
import {connect} from 'react-redux';
import {queryItems, toggleItem} from '../../actions/items';
import AddItemComponent from './AddItemComponent';
import ItemListComponent from './ItemListComponent';
import './Items.scss';

class ItemListContainer extends React.Component {

    componentDidMount() {
        this.props.queryItems();
    }

    render() {
        if (this.props.items != undefined) {
            return (
                <div className="itemPage">
                    <AddItemComponent />
                    <ItemListComponent records={this.props.items}
                                       toggleItem={this.props.toggleItem} />
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
        items: state.app.items
    };
};
export default connect(
    mapStateToProps,
    {queryItems, toggleItem}
)(ItemListContainer);


