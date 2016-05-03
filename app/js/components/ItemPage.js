import React from 'react';
import { connect } from 'react-redux';

import ItemList from './ItemList';
import AddItem from './AddItem';

import { queryItems } from '../actions/items';

class ItemPage extends React.Component {

    componentDidMount() {
        this.props.queryItems();
    }

    render() {
        return (
            <div className="itemPage">
                <AddItem/>
                <ItemList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    {queryItems}
)(ItemPage);
