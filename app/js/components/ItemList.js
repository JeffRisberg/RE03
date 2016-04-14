import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class ItemList extends React.Component {

    render() {
        const items = this.props.items;

        const itemNodes = items.map(function (item, key) {
            return <Item key={key} item={item} />;
        });

        return (
            <div className="itemList">
                <table className="table">
                    <tbody>
                    {itemNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);


