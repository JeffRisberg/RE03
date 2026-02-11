import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from './AppRoot';
import configureStore from './configureStore';

const store = configureStore({ initialState: {} });

const root = createRoot(document.getElementById('app-root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  </Provider>
);
