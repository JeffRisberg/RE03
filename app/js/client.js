import React from "react";
import ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {routerReducer, routerMiddleware} from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import items from "./reducers/items";
import events from "./reducers/events";
import forms from "./reducers/forms";
import routes from "./routes";

const combinedReducers = combineReducers({
    items,
    events,
    forms,
    routing: routerReducer
});

const store = createStore(
    combinedReducers,
    {},
    applyMiddleware(routerMiddleware(hashHistory), thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app-root')
);
