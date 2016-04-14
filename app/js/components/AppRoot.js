import React from 'react';
import ReactDOM from 'react-dom';

import AddItem from './AddItem';
import ItemList from './ItemList';
import AddEvent from './AddEvent';
import EventList from './EventList';

class AppRoot extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>RE03 Inventory</h1>

                <AddItem/>
                <ItemList/>
                <AddEvent/>
                <EventList/>
            </div>
        );
    }
}

export default AppRoot;
