import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoot from './components/AppRoot.js';

import store from './store';

import { fetchItems, fetchEvents } from './actions/index.js';

ReactDOM.render(
    <Provider store={store}>
        <AppRoot />
    </Provider>,
    document.getElementById('app-root')
);

fetchItems()(store.dispatch);

fetchEvents()(store.dispatch);