import React from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/Items/ItemList';
import AddItem from '../components/AddItem';

import { queryItems } from '../actions/items';

class ItemPage extends React.Component {

    componentDidMount() {
        this.props.queryItems();
    }

    render() {
        return (
            <div className="itemPage">
                <AddItem />
                <ItemList />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};
export default connect(
    mapStateToProps,
    {queryItems}
)(ItemPage);
