import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';

import AppRoot from './AppRoot';
import configureStore from './configureStore';

const history = createBrowserHistory({basename: '/'});

const store = configureStore({initialState: {}, history});

ReactDOM.render(
  <Provider store={store}>
    <AppRoot history={history}/>
  </Provider>,
  document.getElementById('app-root')
);
