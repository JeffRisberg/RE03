import React from 'react';
import { connect } from 'react-redux';

import ItemList from './ItemList';
import AddItem from './AddItem';

import { fetchItems } from '../actions/items';

class ItemPage extends React.Component {

    componentDidMount() {
        this.props.onMount();
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
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: () => {
            fetchItems()(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemPage);
