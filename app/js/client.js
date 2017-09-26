import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import AppRoot from './AppRoot';
import configureStore from './configureStore';

const history = createHistory({ basename: '/' });

const store = configureStore({ initialState: {}, history });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppRoot}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app-root')
);
