import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppRoot from './AppRoot';
import configureStore from './configureStore';

const history = createHistory({basename: '/'});

const store = configureStore({initialState: {}, history});

ReactDOM.render(
  <Provider store={store}>
    <AppRoot history={history}/>
  </Provider>,
  document.getElementById('app-root')
);
