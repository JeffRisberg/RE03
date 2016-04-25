import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers';

import AppRoot from './components/AppRoot';
import Home from './components/Home';
import ItemPage from './components/ItemPage';
import ItemDetail from './components/ItemDetail';
import EventPage from './components/EventPage';
import EventDetail from './components/EventDetail';

var inventory = {
    items: {idList: [], records: {}},
    events: {idList: [], records: {}}
};

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    reducers,
    inventory,
    applyMiddleware(middleware)
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
