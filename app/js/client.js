import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRoot from "./AppRoot";
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={AppRoot}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app-root')
);
