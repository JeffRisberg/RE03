import React from 'react';
import ReactDOM from 'react-dom';

import store from '../store';

import AddItem from './AddItem';
import AddEvent from './AddEvent';
import EventList from './EventList';
import ItemList from './ItemList';

class AppRoot extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>RE03 Inventory</h1>

                <AddItem store={store}/>
                <ItemList store={store}/>
                <AddEvent store={store}/>
                <EventList store={store}/>
            </div>
        );
    }
}

export default AppRoot;
