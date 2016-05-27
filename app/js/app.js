import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import items from './reducers/items';
import events from './reducers/events';
import forms from './reducers/forms';

import AppRoot from './components/AppRoot';
import Home from './components/Home';
import ItemPage from './components/ItemPage';
import ItemDetail from './components/ItemDetail';
import EventPage from './components/EventPage';
import EventDetail from './components/EventDetail';

var initialContent = {
    items: {idList: [], records: {}},
    events: {idList: [], records: {}},
    forms: {}
};

const combinedReducers = combineReducers({
    items,
    events,
    forms,
    routing: routerReducer
});

const store = createStore(
    combinedReducers,
    initialContent,
    applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppRoot}>
                <IndexRoute component={Home}/>
                <Route path="items">
                    <IndexRoute component={ItemPage}/>
                    <Route path="detail/:id" component={ItemDetail}/>
                </Route>
                <Route path="events">
                    <IndexRoute component={EventPage}/>
                    <Route path="detail/:id" component={EventDetail}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);
