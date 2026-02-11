import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';

import AppRoot from './AppRoot';
import configureStore from './configureStore';

const history = createBrowserHistory({basename: '/'});

const store = configureStore({initialState: {}, history});

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={store}>
    <AppRoot history={history}/>
  </Provider>
);
