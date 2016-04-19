import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux';

import store from './store';

import AppRoot from './components/AppRoot.js';
import Home from './components/Home.js';
import ItemPage from './components/ItemPage.js';
import EventPage from './components/EventPage.js';

import { fetchItems, fetchEvents } from './actions/index.js';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppRoot}>
                <IndexRoute component={Home}/>
                <Route path="/items" component={ItemPage}/>
                <Route path="/events" component={EventPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);

fetchItems()(store.dispatch);

fetchEvents()(store.dispatch);