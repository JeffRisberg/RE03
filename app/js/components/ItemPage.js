import React from 'react';

import ItemList from './ItemList';
import AddItem from './AddItem';

class ItemPage extends React.Component {

    render() {
        return (
            <div className="itemList">
                <AddItem/>
                <ItemList/>
            </div>
        );
    }
}

export default ItemPage;
