import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

    componentDidMount() {
        var store = this.props.store;
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.props.store;
        const items = store.getState().items;

        const itemNodes = items.map(function (item, key) {
            return <Item key={key} item={item} store={store}/>;
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

export default ItemList;
